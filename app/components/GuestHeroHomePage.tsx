import Button from "@/ui/Button";
import { HiArrowLongRight } from "react-icons/hi2";

export default function GuestHeroHomePage() {
  return (
    <>
      <figure className="h-full max-w-[250px] overflow-hidden">
        <img src="/example-overlay.png" alt="" />
      </figure>
      <Button
        to="/redirects?to=https://spotify.com"
        variant="ghost"
        endIcon={HiArrowLongRight}
      >
        Let's create your overlay
      </Button>
    </>
  );
}
