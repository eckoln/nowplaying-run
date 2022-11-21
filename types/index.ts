import type { SpotifyApi } from "./spotify";

export interface SpotifyAccessTokenResponse {
  access_token: string;
  token_type: string;
  scope: string;
  expires_in: number;
  refresh_token: string;
}

export interface SpotifyRefreshTokenResponse {
  access_token: string;
  token_type: string;
  scope: string;
  expires_in: number;
}

export interface SpotifyCurrentUserResponse
  extends SpotifyApi.CurrentUsersProfileResponse {}

export interface SpotifyCurrentlyPlayingResponse
  extends SpotifyApi.CurrentlyPlayingObject {
  item: SpotifyApi.TrackObjectFull;
}

export interface SpotifyCurrentlyPlaying {
  is_playing: boolean;
  name: string;
  image: string;
  artists: Array<string>;
}
