import {
  commitSession,
  destroySession,
  getSession,
} from "@/utils/session.server";
import { json, redirect, type LoaderArgs } from "@remix-run/node";
import { useFetcher, useParams } from "@remix-run/react";
import { Heading } from "@rocinante/ui";
import { useEffect } from "react";
import { prisma } from "src/utils/prisma.server";
import { spotify } from "src/utils/spotify.server";
import type { SpotifyCurrentlyPlaying } from "types";

export async function loader({ request, params }: LoaderArgs) {
  const ref = params.ref as string;
  const cookie = request.headers.get("Cookie");
  const session = await getSession(cookie);

  // check if not have session or current date > access token expires at
  if (!session.has("id") || Date.now() > session.data.expires_at) {
    // get user from db with ref
    const findUser = await prisma.account.findUnique({ where: { id: ref } });
    if (!findUser) return json({});

    // refresh access token
    const refreshToken = await spotify.getRefreshToken(findUser.refreshToken);
    if (!refreshToken) return json({});

    // set session
    session.set("id", findUser.id);
    session.set("access_token", refreshToken.access_token);
    session.set("refresh_token", findUser.refreshToken);
    session.set(
      "expires_at",
      (Date.now() + refreshToken.expires_in * 1000).toString()
    );

    // commit session
    return redirect(request.url, {
      headers: {
        "Set-Cookie": await commitSession(session),
      },
    });
  }

  // check session if have then
  if (session.data.id !== ref) {
    // destroy session
    return redirect(request.url, {
      headers: {
        "Set-Cookie": await destroySession(session),
      },
    });
  }

  // get track data
  const track = await spotify.getCurrentlyPlayingTrack(
    session.data.access_token
  );
  if (!track) return json({});

  // response
  return json<SpotifyCurrentlyPlaying>({
    is_playing: track.is_playing,
    name: track.item.name,
    image: track.item.album.images[2].url,
    artists: track.item.artists.map((artist) => artist.name),
  });
}

export default function Overlay() {
  const params = useParams();
  const fetcher = useFetcher();

  const data = fetcher.data as SpotifyCurrentlyPlaying;
  const refetch = () => fetcher.load(`/overlays/${params.ref}`);

  // refetch track data every 3 seconds
  useEffect(() => {
    refetch();

    const interval = setInterval(() => {
      refetch();
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  if (!data || !data.is_playing) {
    return <div></div>;
  }

  return (
    <div className="relative inline-flex w-full max-w-[285px] flex-row items-center gap-x-4 overflow-hidden rounded-lg bg-black/95 py-1.5 px-3">
      <figure className="inset-0 z-10 h-full max-h-[64px] w-full max-w-[64px] overflow-hidden rounded-md">
        <img src={data.image} alt="" />
      </figure>
      <div className="z-10 truncate text-green-500">
        <Heading as="h5" variant="h5">
          {data.name}
        </Heading>
        <p className="text-sm text-gray-400">
          {data.artists.map((artist) => artist).join(", ")}
        </p>
      </div>
      <div className="absolute inset-0 z-0 hidden h-full w-full bg-black bg-opacity-50 backdrop-blur-md" />
    </div>
  );
}
