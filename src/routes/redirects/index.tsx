import { type LoaderArgs, redirect, json } from "@remix-run/node";

export const loader = ({ request }: LoaderArgs) => {
  const url = new URL(request.url);
  const cc = url.href.split("/redirects?to=");
  console.log("cc", cc?.[1].toString());

  //return json(cc);
  return redirect(cc?.[1].toString());
};
