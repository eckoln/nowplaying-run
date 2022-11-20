import Heading from "@/ui/Heading";
import { useSearchParams } from "@remix-run/react";
import AuthHeroHomePage from "./AuthHeroHomePage";
import GuestHeroHomePage from "./GuestHeroHomePage";

export default function HeroHomePage() {
  const [searchParams] = useSearchParams();
  const ref = searchParams.get("ref") as string;

  return (
    <section>
      <div className="flex items-center justify-center py-8 tablet:py-24">
        <div className="w-full laptop:max-w-2xl">
          <div className="container">
            <div className="flex flex-col items-center justify-center space-y-6 text-center">
              <Heading as="h1" variant="h1">
                The Lightweight Overlay for Your Live-streams
              </Heading>
              <p className="text-gray-300">
                <span className="font-semibold">Now Playing</span> is an overlay
                service for live-streamers that serve up to overlay the
                currently track you are listening on Spotify and add it to OBS
                Studio, XSplit and similar broadcasting tools as a
                &quot;browser&quot; source. It is simple to set up and
                completely free to use.
              </p>
              {ref ? <AuthHeroHomePage refId={ref} /> : <GuestHeroHomePage />}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
