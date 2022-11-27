import { envsafe, str, url } from "envsafe";

export const env = envsafe({
  NODE_ENV: str({
    devDefault: "development",
    choices: ["development", "test", "production"],
  }),
  DATABASE_URL: url(),
  SPOTIFY_CLIENT_ID: str(),
  SPOTIFY_CLIENT_SECRET: str(),
  SPOTIFY_CLIENT_REDIRECT_URI: url(),
});
