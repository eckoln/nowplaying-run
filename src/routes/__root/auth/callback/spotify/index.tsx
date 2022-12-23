import { prisma } from "@/utils/prisma.server";
import { spotify } from "@/utils/spotify.server";
import { redirect, type LoaderFunction } from "@remix-run/node";

export const loader: LoaderFunction = async ({ request }) => {
  const url = new URL(request.url);
  const code = url.searchParams.get("code") as string;

  // get access token & current user with this access token
  const accessToken = await spotify.getAccesToken(code);
  const currentUser = await spotify.getCurrentUser(
    accessToken?.access_token as string
  );

  // get user from db with current user's email
  const getUser = await prisma.account.findUnique({
    where: { spotifyId: currentUser?.id },
  });
  if (getUser) {
    await prisma.account.update({
      where: { id: getUser.id },
      data: { refreshToken: accessToken?.refresh_token },
    });
    return redirect("/?ref=" + getUser.id);
  }

  // create new account if not exist user
  const createAccount = await prisma.account.create({
    data: {
      spotifyId: currentUser?.id as string,
      displayName: currentUser?.display_name as string,
      refreshToken: accessToken?.refresh_token as string,
    },
  });

  // response
  return redirect("/?ref=" + createAccount.id);
};
