import Button from "@/ui/Button";
import Heading from "@/ui/Heading";

export default function AuthHeroHomePage({
  origin,
  refId,
}: {
  origin: string;
  refId: string;
}) {
  console.log(origin, refId);
  return (
    <div className="flex flex-col items-center space-y-2 border-t border-white/10 pt-4">
      <Heading as="h4" variant="h4">
        Hello eckoln! Your overlay URL is here:
      </Heading>
      <Button
        variant="copyToUrl"
        size="md"
        onClick={() => {
          console.log("clicked to overlay url");
          navigator.clipboard.writeText(`${origin}/overlays?ref=${refId}`);
          return alert("The URL has been copied!");
        }}
      >
        {origin}/overlays?ref={refId}
      </Button>
      <p className="text-sm">
        You must now make a few adjustments. Follow the directives at the bottom
        of the page.
      </p>
    </div>
  );
}
