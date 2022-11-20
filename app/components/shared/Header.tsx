import { Link } from "@remix-run/react";
import { BsSoundwave } from "react-icons/bs";
import Button from "../ui/Button";

export default function Header() {
  return (
    <header>
      <nav className="py-4">
        <div className="container">
          <div className="flex flex-row items-center justify-between">
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-x-2"
            >
              <span className="h-10 w-10">
                <BsSoundwave className="h-full w-full" />
              </span>
              <span className="text-xl font-semibold">Now Playing</span>
            </Link>

            <Button>Sign in with Spotify</Button>
          </div>
        </div>
      </nav>
    </header>
  );
}
