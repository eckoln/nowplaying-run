import type { LinksFunction, MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import styles from "@/styles/app.css";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: styles }];
};

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Now Playing - The Minimalistic Overlay for Livestreams",
  viewport: "width=device-width,initial-scale=1",
  description:
    "Now Playing is an overlay service for livestreamers that serves up an overlay of the track you are listening to on Spotify.",
  keywords:
    "spotify now playing, spotify currently playing, now playing overlay, now playing",
});

export default function App() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body className="min-h-screen w-full bg-gradient-to-b from-green-600 via-neutral-900 to-black text-white antialiased">
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
