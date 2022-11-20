import ExternalLink from "../ui/ExternalLink";

export default function Footer() {
  return (
    <footer className="bg-black">
      <div className="py-6">
        <div className="container">
          <div className="text-center">
            <span>
              made by{" "}
              <ExternalLink
                href="https://twittter.com/eckoln"
                target="_blank"
                rel="noreferrer"
              >
                @eckoln
              </ExternalLink>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
