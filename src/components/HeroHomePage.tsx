import AuthHeroHomePage from "@/components/AuthHeroHomePage";
import GuestHeroHomePage from "@/components/GuestHeroHomePage";
import type { Prisma } from "@prisma/client";
import { Heading } from "@rocinante/ui";

export type Props = {
  data: {
    user: Prisma.AccountSelect | any;
    origin: string;
    ref: string | null;
    authorizeUrl: string;
  };
};

export default function HeroHomePage({ data }: Props) {
  return (
    <section>
      <div className="py-8 tablet:py-24">
        <div className="mx-auto w-full laptop:max-w-2xl">
          <div className="container">
            <div className="flex flex-col items-center justify-center space-y-6 text-center">
              <Heading as="h1" size="h1">
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
