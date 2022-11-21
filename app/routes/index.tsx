import HeroHomePage from "@/components/HeroHomePage";
import HowToUseHomePage from "@/components/HowToUseHomePage";
import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import { json, type LoaderFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

export type OverlayResponse = {
  origin: string;
  ref: string | null;
};

export const loader: LoaderFunction = ({ request }) => {
  const url = new URL(request.url);
  return json<OverlayResponse>({
    origin: url.origin,
    ref: url.searchParams.get("ref"),
  });
};

export default function Index() {
  const data = useLoaderData() as OverlayResponse;

  return (
    <div className="h-full w-full bg-gradient-to-b from-green-600 via-neutral-900 to-black text-white">
      <Header />
      <main>
        <HeroHomePage data={data} />
        <HowToUseHomePage />
      </main>
      <Footer />
    </div>
  );
}
