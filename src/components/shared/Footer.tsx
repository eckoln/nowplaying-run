import Link from "src/components/shared/ui/Link";

export default function Footer() {
  return (
    <footer className="bg-black">
      <div className="py-6">
        <div className="container">
          <div className="text-center">
            <span>
              made by{" "}
              <Link
                to="/redirects?to=https://twitter.com/eckoln"
                target="_blank"
                rel="noreferrer"
              >
                @eckoln
              </Link>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
