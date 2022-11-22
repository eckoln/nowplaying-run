import Heading from "@/components/ui/Heading";
import { prisma } from "@/utils/prisma.server";
import { spotify } from "@/utils/spotify.server";
import { json, type LoaderFunction } from "@remix-run/node";
import { useFetcher, useParams } from "@remix-run/react";
import { useEffect } from "react";
import type { SpotifyCurrentlyPlaying } from "types";

export const loader: LoaderFunction = async ({ params }) => {
  const ref = params.ref as string;

  // get user from db with ref
  const findUser = await prisma.account.findUnique({ where: { id: ref } });
  if (!findUser) return json({});

  // refresh access token
  const refreshToken = await spotify.getRefreshToken(findUser.refreshToken);
  if (!refreshToken) return json({});

  // get track data
  const track = await spotify.getCurrentlyPlayingTrack(
    refreshToken?.access_token as string
  );
  if (!track) return json({});

  // response
  return json<SpotifyCurrentlyPlaying>({
    is_playing: track.is_playing,
    name: track.item.name,
    image: track.item.album.images[2].url,
    artists: track.item.artists.map((artist) => artist.name),
  });
};

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
    <div className="relative inline-flex w-full max-w-xs flex-row items-center gap-x-4 overflow-hidden rounded-lg bg-black/95 py-3.5 px-5">
      <figure className="inset-0 z-10 h-full max-h-[64px] w-full max-w-[64px] overflow-hidden rounded-md">
        <img src={data.image} alt="" />
      </figure>
      <div className="z-10 truncate text-green-500">
        <Heading as="h5" variant="h5">
          {data.name}
        </Heading>
        <p className="text-gray-400">
          {data.artists.map((artist) => artist).join(", ")}
        </p>
      </div>
      <div className="absolute inset-0 z-0 hidden h-full w-full bg-black bg-opacity-50 backdrop-blur-md" />
    </div>
  );
}
