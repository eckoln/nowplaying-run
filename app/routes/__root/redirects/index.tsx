import { type LoaderFunction, redirect } from "@remix-run/node";

export const loader: LoaderFunction = ({ request }) => {
  const url = new URL(request.url);
  const to = url.searchParams.get("to") as string;

  if (!to) {
    return redirect("/");
  }

  return redirect(to);
};
