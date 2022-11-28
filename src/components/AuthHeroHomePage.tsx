import { Heading } from "@rocinante/ui";
import type { Props as HeroProps } from "src/components/HeroHomePage";
import Button from "src/components/shared/ui/Button";

export default function AuthHeroHomePage({ data }: HeroProps) {
  return (
    <div className="flex flex-col items-center space-y-2 border-t border-white/10 pt-4">
      <Heading as="h4" variant="h4">
        Hello {data.user.displayName}! Your overlay URL is here:
      </Heading>
      <Button
        intent="primary"
        onClick={() => {
          console.log("clicked to overlay url");
          navigator.clipboard.writeText(`${data.origin}/overlays/${data.ref}`);
          return alert("The URL has been copied!");
        }}
      >
        {data.origin}/overlays/{data.ref}
      </Button>
      <p className="text-sm">
        You must now make a few adjustments. Follow the directives at the bottom
        of the page.
      </p>
    </div>
  );
}
