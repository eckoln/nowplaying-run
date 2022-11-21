import Button from "@/ui/Button";
import Heading from "./ui/Heading";
import { HiArrowLongRight } from "react-icons/hi2";
import { spotify } from "@/utils/spotify.server";

export default function GuestHeroHomePage() {
  return (
    <>
      <div className="relative inline-flex w-full max-w-[300px] flex-row items-center gap-4 rounded-lg bg-black/95 py-4 px-4">
        <figure className="inline-block h-12 w-12 overflow-hidden rounded-lg">
          <img src="/overlay-example-figure.png" alt="" />
        </figure>
        <div className="flex flex-col items-start">
          <Heading as="h5" variant="h5" className="text-green-400">
            Always Forever
          </Heading>
          <p className="text-gray-400">Artist</p>
        </div>
      </div>
      <a href={spotify.createAuthorizeUrl()}>{spotify.createAuthorizeUrl()}</a>
      <Button
        to={`/redirects?to=${new URLSearchParams(
          spotify.createAuthorizeUrl()
        )}`}
        variant="ghost"
        endIcon={HiArrowLongRight}
      >
        Let's create your overlay
      </Button>
    </>
  );
}
