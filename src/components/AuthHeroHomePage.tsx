import type { Props as HeroProps } from "@/components/HeroHomePage";
import Button from "@/ui/Button";
import Link from "@/ui/Link";
import { Heading } from "@rocinante/ui";

export default function AuthHeroHomePage({ data }: HeroProps) {
  const url = `${data.origin}/overlays/${data.ref}`;

  return (
    <div className="flex w-full flex-col items-center space-y-3 rounded-lg bg-green-400/25 p-6">
      <Heading as="h3" size="h3">
        Hello {data.user.displayName}!
      </Heading>
      <Button
        variant="primary"
        onClick={() => {
          console.log("clicked to overlay url");
          navigator.clipboard.writeText(url);
          return alert("The URL has been copied!");
        }}
      >
        Click to Copy
      </Button>
      <Heading>OR</Heading>
      <p className="select-all">{url}</p>
      <p className="text-sm">
        You must now make a few adjustments.{" "}
        <Link to="#how-to-use">Click here</Link> and Follow the directives.
      </p>
    </div>
  );
}
