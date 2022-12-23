import Link from "@/components/shared/ui/Link";

export default function Footer() {
  return (
    <footer className="bg-black">
      <div className="py-6">
        <div className="container">
          <div className="flex flex-col items-center gap-y-2">
            <Copyright />
            <ContriBute />
          </div>
        </div>
      </div>
    </footer>
  );
}

const Copyright = () => {
  return (
    <p>
      made by{" "}
      <Link
        to="https://twitter.com/eckoln"
        target="_blank"
        rel="noreferrer"
        external
      >
        @eckoln
      </Link>
    </p>
  );
};

const ContriBute = () => {
  return (
    <p>
      <Link to="/">nowplaying.run</Link> is an open-source initiative.{" "}
      <Link
        to="https://github.com/eckoln/nowplaying-run"
        target="_blank"
        rel="noreferrer"
        external
      >
        Contribute!
      </Link>
    </p>
  );
};
