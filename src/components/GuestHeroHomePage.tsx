import { HiArrowLongRight } from "react-icons/hi2";
import Button from "src/components/shared/ui/Button";
import Heading from "src/components/shared/ui/Heading";

type Props = {
  authorizeUrl: string;
};

export default function GuestHeroHomePage({ authorizeUrl }: Props) {
  return (
    <>
      <div className="relative inline-flex w-full max-w-[285px] flex-row items-center gap-4 rounded-lg bg-black/95 p-3">
        <figure className="inline-block h-12 w-12 overflow-hidden rounded-lg">
          <img src="/overlay-example-figure.png" alt="" />
        </figure>
        <div className="flex flex-col items-start">
          <Heading as="h5" variant="h5" className="text-green-400">
            Always Forever
          </Heading>
          <p className="text-sm text-gray-400">Artist</p>
        </div>
      </div>
      <Button
        to={authorizeUrl}
        variant="ghost"
        endIcon={HiArrowLongRight}
        isExternal
      >
        Let's create your overlay
      </Button>
    </>
  );
}
