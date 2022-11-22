import HeroHomePage from "@/components/HeroHomePage";
import HowToUseHomePage from "@/components/HowToUseHomePage";
import { spotify } from "@/utils/spotify.server";
import { json, type LoaderArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

export const loader = ({ request }: LoaderArgs) => {
  const url = new URL(request.url);
  return json({
    origin: url.origin,
    ref: url.searchParams.get("ref"),
    authorizeUrl: spotify.createAuthorizeUrl(),
  });
};

export default function HomePage() {
  const data = useLoaderData<typeof loader>();

  return (
    <>
      <HeroHomePage data={data} />
      <HowToUseHomePage />
    </>
  );
}
