import type { Prisma } from "@prisma/client";
import { Heading } from "@rocinante/ui";
import AuthHeroHomePage from "src/components/AuthHeroHomePage";
import GuestHeroHomePage from "src/components/GuestHeroHomePage";

export type Props = {
  data: {
    user: Prisma.AccountSelect;
    origin: string;
    ref: string | null;
    authorizeUrl: string;
  };
};

export default function HeroHomePage({ data }: Props) {
  return (
    <section>
      <div className="flex items-center justify-center py-8 tablet:py-24">
        <div className="w-full laptop:max-w-2xl">
          <div className="container">
            <div className="flex flex-col items-center justify-center space-y-6 text-center">
              <Heading as="h1" variant="h1">
                The Minimalistic Overlay for Livestreams
              </Heading>
              <p className="text-gray-300">
                <span className="font-semibold">Now Playing</span> is an overlay
                service for livestreamers that serves up an overlay of the track
                you are listening to on Spotify and adds it to OBS Studio,
                XSplit, and similar broadcasting tools as a "browser" source. It
                is simple to set up and completely free to use.
              </p>
              {data.ref ? (
                <AuthHeroHomePage data={data} />
              ) : (
                <GuestHeroHomePage authorizeUrl={data.authorizeUrl} />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
