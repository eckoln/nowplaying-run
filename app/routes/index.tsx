export default function Index() {
  return (
    <div className="flex h-screen flex-col items-center justify-center">
      <div className="container">
        <div className="space-y-4 text-center">
          <h1 className="text-5xl font-bold leading-tight laptop:text-6xl">
            <span className="text-indigo-400">Hello world!</span> You're early,
            but <span className="text-green-400">no worries!</span>
          </h1>
          <p className="text-gray-400">
            The Minimalistic Overlay for Livestreams.
          </p>
          <footer className="text-gray-400">
            <div className="container">
              made by{" "}
              <a
                href="https://twitter.com/eckoln"
                className="font-semibold transition-colors hover:text-green-400"
                target="_blank"
                rel="noreferrer"
              >
                @eckoln
              </a>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}
