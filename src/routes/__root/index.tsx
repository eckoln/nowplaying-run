import { spotify } from "@/utils/spotify.server";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { Button, Heading } from "@rocinante/ui";
import { BsSpotify } from "react-icons/bs";

export async function loader() {
  return json({
    authorizeUrl: spotify.createAuthorizeUrl(),
  });
}

export default function HomePage() {
  const data = useLoaderData<typeof loader>();

  return (
    <div className="flex flex-col gap-y-2 text-center">
      <Heading size="h4">Welcome!</Heading>
      <Button
        as="a"
        href={data.authorizeUrl}
        startIcon={<BsSpotify className="h-5 w-5" />}
      >
        Sign in with Spotify
      </Button>
    </div>
  );
}
