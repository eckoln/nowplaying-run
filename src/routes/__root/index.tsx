import { prisma } from "@/utils/prisma.server";
import { json, redirect, type LoaderArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import HeroHomePage from "src/components/HeroHomePage";
import HowToUseHomePage from "src/components/HowToUseHomePage";
import { spotify } from "src/utils/spotify.server";

export const getUser = async (ref: string) => {
  return await prisma.account.findUnique({ where: { id: ref } });
};

export async function loader({ request }: LoaderArgs) {
  const url = new URL(request.url);
  const ref = url.searchParams.get("ref") as string;

  const user = ref ? await getUser(ref) : null;
  if (ref && !user) {
    return redirect("/");
  }

  return json({
    user: user,
    origin: url.origin,
    ref: url.searchParams.get("ref"),
    authorizeUrl: spotify.createAuthorizeUrl(),
  });
}

export default function HomePage() {
  const data = useLoaderData<typeof loader>();

  return (
    <>
      <HeroHomePage data={data} />
      <HowToUseHomePage />
    </>
  );
}
