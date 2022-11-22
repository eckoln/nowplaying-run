import { type LoaderArgs, redirect } from "@remix-run/node";

export const loader = ({ request }: LoaderArgs) => {
  const url = new URL(request.url);
  const to = url.href.split("redirects?to=")[1] as string;

  return redirect(to);
};
