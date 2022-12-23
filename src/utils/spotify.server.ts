import { env } from "@/utils/env.server";
import type {
  SpotifyAccessTokenResponse,
  SpotifyCurrentlyPlayingResponse,
  SpotifyCurrentUserResponse,
  SpotifyRefreshTokenResponse,
} from "types";

type Props = {
  authDomain: string;
  apiDomain: string;
  clientId: string;
  clientSecret: string;
  clientRedirectUri: string;
};

class Spotify {
  options: Props;
  constructor(options: Props) {
    this.options = options;
  }

  createAuthorizeUrl = () => {
    const { authDomain, clientId, clientRedirectUri } = this.options;

    const uri = `https://${authDomain}/authorize`;
    const params = {
      client_id: clientId,
      response_type: "code",
      redirect_uri: clientRedirectUri,
      scope: "user-read-currently-playing",
      show_dialog: "true",
    };
    const authorizeUrl = uri + "?" + new URLSearchParams(params).toString();
    return authorizeUrl;
  };

  getAccesToken = async (code: string) => {
    console.log("token: fetching with client credentials", this.options);
    const { authDomain, clientId, clientSecret, clientRedirectUri } =
      this.options;

    const uri = `https://${authDomain}/api/token`;
    const body = {
      code: code,
      redirect_uri: clientRedirectUri,
      grant_type: "authorization_code",
    };
    const res = await fetch(uri, {
      method: "POST",
      headers: {
        Authorization:
          "Basic " +
          Buffer.from(clientId + ":" + clientSecret).toString("base64"),
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams(body),
    });

    if (!res.ok) {
      //console.log(res.status, res.statusText); // remove
      return null;
    }

    const json = (await res.json()) as SpotifyAccessTokenResponse;
    console.log("token: fetching response", json);

    return json;
  };

  getRefreshToken = async (token: string) => {
    console.log(
      "refresh_token: fetching with client credentials",
      this.options
    );
    const { authDomain, clientId, clientSecret } = this.options;

    const uri = `https://${authDomain}/api/token`;
    const body = {
      refresh_token: token,
      grant_type: "refresh_token",
    };
    const res = await fetch(uri, {
      method: "POST",
      headers: {
        Authorization:
          "Basic " +
          Buffer.from(clientId + ":" + clientSecret).toString("base64"),
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: new URLSearchParams(body),
    });

    if (!res.ok) {
      //console.log(res.status, res.statusText); // remove
      return null;
    }

    const json = (await res.json()) as SpotifyRefreshTokenResponse;
    console.log("refresh_token: fetching response", json);

    return json;
  };

  getCurrentUser = async (token: string) => {
    console.log("user: fetching with credentials", this.options);
    const { apiDomain } = this.options;

    const uri = `https://${apiDomain}/v1/me`;
    const res = await fetch(uri, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    });

    if (!res.ok) {
      //console.log(res.status, res.statusText); // remove
      return null;
    }

    const json = (await res.json()) as SpotifyCurrentUserResponse;
    console.log("user: fetching response", json);

    return json;
  };

  getCurrentlyPlayingTrack = async (token: string) => {
    console.log("track: fetching with token", token);
    const { apiDomain } = this.options;

    const uri = `https://${apiDomain}/v1/me/player/currently-playing`;
    const res = await fetch(uri, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
    });

    if (!res.ok) {
      //console.log(res.status, res.statusText); // remove
      return null;
    } else if (res.status === 204) {
      return null;
    }

    const json = (await res.json()) as SpotifyCurrentlyPlayingResponse;
    console.log("track: fetching response", this.options);

    return json;
  };
}

export const spotify = new Spotify({
  authDomain: "accounts.spotify.com",
  apiDomain: "api.spotify.com",
  clientId: env.SPOTIFY_CLIENT_ID,
  clientSecret: env.SPOTIFY_CLIENT_SECRET,
  clientRedirectUri: env.SPOTIFY_CLIENT_REDIRECT_URI,
});
