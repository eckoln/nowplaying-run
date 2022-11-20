import Heading from "@/ui/Heading";
import Button from "@/ui/Button";
import { HiArrowLongRight } from "react-icons/hi2";

export default function HeroHomePage() {
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
              <figure className="h-full max-w-[250px] overflow-hidden">
                <img src="/example-overlay.png" alt="" />
              </figure>
              <Button variant="ghost" endIcon={HiArrowLongRight}>
                Let's create yours overlay
              </Button>
              {/* <div className="flex flex-col items-center space-y-2 border-t border-white/20 pt-4">
                <Heading as="h4" variant="h4">
                  Hello eckoln! Your overlay url is here:
                </Heading>
                <Button variant="copyToUrl" size="md">
                  http://localhost:3000/overlays?ref=123456789123456789
                </Button>
                <p className="text-sm">
                  Now, you have to few settings. Follow the directives at the
                  bottom of page.
                </p>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
