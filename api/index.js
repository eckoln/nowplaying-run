"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// server.js
var server_exports = {};
__export(server_exports, {
  default: () => server_default
});
module.exports = __toCommonJS(server_exports);

// server-entry-module:@remix-run/dev/server-build
var server_build_exports = {};
__export(server_build_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  publicPath: () => publicPath,
  routes: () => routes
});

// src/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_stream = require("stream"), import_node = require("@remix-run/node"), import_react = require("@remix-run/react"), import_isbot = __toESM(require("isbot")), import_server = require("react-dom/server"), import_jsx_runtime = require("react/jsx-runtime"), ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return (0, import_isbot.default)(request.headers.get("user-agent")) ? handleBotRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  ) : handleBrowserRequest(
    request,
    responseStatusCode,
    responseHeaders,
    remixContext
  );
}
function handleBotRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let didError = !1, { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.RemixServer, { context: remixContext, url: request.url }),
      {
        onAllReady() {
          let body = new import_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: didError ? 500 : responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          didError = !0, console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}
function handleBrowserRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let didError = !1, { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.RemixServer, { context: remixContext, url: request.url }),
      {
        onShellReady() {
          let body = new import_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: didError ? 500 : responseStatusCode
            })
          ), pipe(body);
        },
        onShellError(err) {
          reject(err);
        },
        onError(error) {
          didError = !0, console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// src/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links,
  meta: () => meta
});

// src/styles/app.css
var app_default = "/build/_assets/app-HUFPYPNL.css";

// src/root.tsx
var import_react2 = require("@remix-run/react"), import_jsx_runtime2 = require("react/jsx-runtime"), links = () => [
  { rel: "stylesheet", href: app_default },
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous"
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700&display=swap"
  }
], meta = () => ({
  charSet: "utf-8",
  title: "Spotify Now Playing Overlay",
  viewport: "width=device-width,initial-scale=1"
});
function App() {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.Meta, {}),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.Links, {})
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("body", { className: "antialiased", children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.Outlet, {}),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.ScrollRestoration, {}),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.Scripts, {}),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.LiveReload, {})
    ] })
  ] });
}

// src/routes/__overlays.tsx
var overlays_exports = {};
__export(overlays_exports, {
  default: () => App2
});
var import_react3 = require("@remix-run/react"), import_jsx_runtime3 = require("react/jsx-runtime");
function App2() {
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)("main", { children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(import_react3.Outlet, {}) });
}

// src/routes/__overlays/overlays/$ref.tsx
var ref_exports = {};
__export(ref_exports, {
  default: () => Overlay,
  loader: () => loader
});

// src/utils/prisma.server.ts
var import_client = require("@prisma/client");

// src/utils/env.server.ts
var import_envsafe = require("envsafe"), env = (0, import_envsafe.envsafe)({
  NODE_ENV: (0, import_envsafe.str)({
    devDefault: "development",
    choices: ["development", "test", "production"]
  }),
  DATABASE_URL: (0, import_envsafe.url)(),
  SPOTIFY_CLIENT_ID: (0, import_envsafe.str)(),
  SPOTIFY_CLIENT_SECRET: (0, import_envsafe.str)(),
  SPOTIFY_CLIENT_REDIRECT_URI: (0, import_envsafe.url)()
});

// src/utils/prisma.server.ts
var prismaGlobal = global, prisma = prismaGlobal.prisma || new import_client.PrismaClient({
  log: env.NODE_ENV === "development" ? ["query", "error", "warn"] : ["error"]
});
env.NODE_ENV !== "production" && (prismaGlobal.prisma = prisma);

// src/utils/session.server.ts
var import_node2 = require("@remix-run/node"), { getSession, commitSession, destroySession } = (0, import_node2.createCookieSessionStorage)({
  cookie: {
    name: "__session",
    secrets: ["abc-123-bcz-321"],
    secure: !0
  }
});

// src/utils/spotify.server.ts
var Spotify = class {
  constructor(options) {
    this.createAuthorizeUrl = () => {
      let { authDomain, clientId, clientRedirectUri } = this.options, uri = `https://${authDomain}/authorize`, params = {
        client_id: clientId,
        response_type: "code",
        redirect_uri: clientRedirectUri,
        scope: "user-read-currently-playing",
        show_dialog: "true"
      };
      return uri + "?" + new URLSearchParams(params).toString();
    };
    this.getAccesToken = async (code) => {
      console.log("token: fetching with client credentials", this.options);
      let { authDomain, clientId, clientSecret, clientRedirectUri } = this.options, uri = `https://${authDomain}/api/token`, body = {
        code,
        redirect_uri: clientRedirectUri,
        grant_type: "authorization_code"
      }, res = await fetch(uri, {
        method: "POST",
        headers: {
          Authorization: "Basic " + Buffer.from(clientId + ":" + clientSecret).toString("base64"),
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: new URLSearchParams(body)
      });
      if (!res.ok)
        return null;
      let json3 = await res.json();
      return console.log("token: fetching response", json3), json3;
    };
    this.getRefreshToken = async (token) => {
      console.log(
        "refresh_token: fetching with client credentials",
        this.options
      );
      let { authDomain, clientId, clientSecret } = this.options, uri = `https://${authDomain}/api/token`, body = {
        refresh_token: token,
        grant_type: "refresh_token"
      }, res = await fetch(uri, {
        method: "POST",
        headers: {
          Authorization: "Basic " + Buffer.from(clientId + ":" + clientSecret).toString("base64"),
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: new URLSearchParams(body)
      });
      if (!res.ok)
        return null;
      let json3 = await res.json();
      return console.log("refresh_token: fetching response", json3), json3;
    };
    this.getCurrentUser = async (token) => {
      console.log("user: fetching with credentials", this.options);
      let { apiDomain } = this.options, uri = `https://${apiDomain}/v1/me`, res = await fetch(uri, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: "Bearer " + token
        }
      });
      if (!res.ok)
        return null;
      let json3 = await res.json();
      return console.log("user: fetching response", json3), json3;
    };
    this.getCurrentlyPlayingTrack = async (token) => {
      console.log("track: fetching with token", token);
      let { apiDomain } = this.options, uri = `https://${apiDomain}/v1/me/player/currently-playing`, res = await fetch(uri, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: "Bearer " + token
        }
      });
      if (res.ok) {
        if (res.status === 204)
          return null;
      } else
        return null;
      let json3 = await res.json();
      return console.log("track: fetching response", this.options), json3;
    };
    this.options = options;
  }
}, spotify = new Spotify({
  authDomain: "accounts.spotify.com",
  apiDomain: "api.spotify.com",
  clientId: env.SPOTIFY_CLIENT_ID,
  clientSecret: env.SPOTIFY_CLIENT_SECRET,
  clientRedirectUri: env.SPOTIFY_CLIENT_REDIRECT_URI
});

// src/routes/__overlays/overlays/$ref.tsx
var import_node3 = require("@remix-run/node"), import_react4 = require("@remix-run/react"), import_ui = require("@rocinante/ui"), import_react5 = require("react"), import_jsx_runtime4 = require("react/jsx-runtime");
async function loader({ request, params }) {
  let ref = params.ref, cookie = request.headers.get("Cookie"), session = await getSession(cookie);
  if (!session.has("id") || Date.now() > session.data.expires_at) {
    let findUser = await prisma.account.findUnique({ where: { id: ref } });
    if (!findUser)
      return (0, import_node3.json)({});
    let refreshToken = await spotify.getRefreshToken(findUser.refreshToken);
    return refreshToken ? (session.set("id", findUser.id), session.set("access_token", refreshToken.access_token), session.set("refresh_token", findUser.refreshToken), session.set(
      "expires_at",
      (Date.now() + refreshToken.expires_in * 1e3).toString()
    ), (0, import_node3.redirect)(request.url, {
      headers: {
        "Set-Cookie": await commitSession(session)
      }
    })) : (0, import_node3.json)({});
  }
  if (session.data.id !== ref)
    return (0, import_node3.redirect)(request.url, {
      headers: {
        "Set-Cookie": await destroySession(session)
      }
    });
  let track = await spotify.getCurrentlyPlayingTrack(
    session.data.access_token
  );
  return track ? (0, import_node3.json)({
    is_playing: track.is_playing,
    name: track.item.name,
    image: track.item.album.images[2].url,
    artists: track.item.artists.map((artist) => artist.name),
    href: track.item.external_urls.spotify
  }) : (0, import_node3.json)({});
}
function Overlay() {
  let params = (0, import_react4.useParams)(), fetcher = (0, import_react4.useFetcher)(), refetch = () => fetcher.load(`/overlays/${params.ref}`), data = fetcher.data;
  return (0, import_react5.useEffect)(() => {
    refetch();
    let interval = setInterval(() => {
      refetch();
    }, 3e3);
    return () => clearInterval(interval);
  }, []), !data || !data.is_playing ? /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { children: "You're not listening currently." }) : /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("a", { href: data.href, target: "_blank", rel: "noreferrer", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "inline-flex w-full max-w-[285px] flex-row items-center gap-x-4 bg-black pr-3", children: [
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("figure", { className: "inline h-16 w-16 shrink-0", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("img", { src: data.image, alt: "" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "z-10 truncate text-green-500", children: [
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_ui.Heading, { size: "h5", children: data.name }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("p", { className: "text-sm text-gray-400", children: data.artists.map((artist) => artist).join(", ") })
    ] })
  ] }) });
}

// src/routes/__root.tsx
var root_exports2 = {};
__export(root_exports2, {
  default: () => App3
});
var import_react6 = require("@remix-run/react"), import_jsx_runtime5 = require("react/jsx-runtime");
function App3() {
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("main", { className: "grid min-h-screen w-full place-items-center", children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_react6.Outlet, {}) });
}

// src/routes/__root/auth/callback/spotify/index.tsx
var spotify_exports = {};
__export(spotify_exports, {
  loader: () => loader2
});
var import_node4 = require("@remix-run/node"), loader2 = async ({ request }) => {
  let code = new URL(request.url).searchParams.get("code"), accessToken = await spotify.getAccesToken(code), currentUser = await spotify.getCurrentUser(
    accessToken == null ? void 0 : accessToken.access_token
  ), getUser = await prisma.account.findUnique({
    where: { spotifyId: currentUser == null ? void 0 : currentUser.id }
  });
  if (getUser)
    return await prisma.account.update({
      where: { id: getUser.id },
      data: { refreshToken: accessToken == null ? void 0 : accessToken.refresh_token }
    }), (0, import_node4.redirect)("/overlays/" + getUser.id);
  let createAccount = await prisma.account.create({
    data: {
      spotifyId: currentUser == null ? void 0 : currentUser.id,
      displayName: currentUser == null ? void 0 : currentUser.display_name,
      refreshToken: accessToken == null ? void 0 : accessToken.refresh_token
    }
  });
  return (0, import_node4.redirect)("/overlays/" + createAccount.id);
};

// src/routes/__root/index.tsx
var root_exports3 = {};
__export(root_exports3, {
  default: () => HomePage,
  loader: () => loader3
});
var import_node5 = require("@remix-run/node"), import_react7 = require("@remix-run/react"), import_ui2 = require("@rocinante/ui"), import_bs = require("react-icons/bs"), import_jsx_runtime6 = require("react/jsx-runtime");
async function loader3() {
  return (0, import_node5.json)({
    authorizeUrl: spotify.createAuthorizeUrl()
  });
}
function HomePage() {
  let data = (0, import_react7.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "flex flex-col gap-y-2 text-center", children: [
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_ui2.Heading, { size: "h4", children: "Welcome!" }),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
      import_ui2.Button,
      {
        as: "a",
        href: data.authorizeUrl,
        startIcon: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_bs.BsSpotify, { className: "h-5 w-5" }),
        children: "Sign in with Spotify"
      }
    )
  ] });
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { version: "d2049cd2", entry: { module: "/build/entry.client-7OZ5ICJV.js", imports: ["/build/_shared/chunk-7FUTNX6O.js", "/build/_shared/chunk-Q3IECNXJ.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-66KSBDWZ.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/__overlays": { id: "routes/__overlays", parentId: "root", path: void 0, index: void 0, caseSensitive: void 0, module: "/build/routes/__overlays-SXIM2C43.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/__overlays/overlays/$ref": { id: "routes/__overlays/overlays/$ref", parentId: "routes/__overlays", path: "overlays/:ref", index: void 0, caseSensitive: void 0, module: "/build/routes/__overlays/overlays/$ref-7IJ67ERN.js", imports: ["/build/_shared/chunk-2OWCVVPS.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/__root": { id: "routes/__root", parentId: "root", path: void 0, index: void 0, caseSensitive: void 0, module: "/build/routes/__root-YOWM4CUS.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/__root/auth/callback/spotify/index": { id: "routes/__root/auth/callback/spotify/index", parentId: "routes/__root", path: "auth/callback/spotify", index: !0, caseSensitive: void 0, module: "/build/routes/__root/auth/callback/spotify/index-725XYEXL.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/__root/index": { id: "routes/__root/index", parentId: "routes/__root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/__root/index-CEVTWTTR.js", imports: ["/build/_shared/chunk-2OWCVVPS.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, url: "/build/manifest-D2049CD2.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public\\build", future = { v2_meta: !1 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/__overlays": {
    id: "routes/__overlays",
    parentId: "root",
    path: void 0,
    index: void 0,
    caseSensitive: void 0,
    module: overlays_exports
  },
  "routes/__overlays/overlays/$ref": {
    id: "routes/__overlays/overlays/$ref",
    parentId: "routes/__overlays",
    path: "overlays/:ref",
    index: void 0,
    caseSensitive: void 0,
    module: ref_exports
  },
  "routes/__root": {
    id: "routes/__root",
    parentId: "root",
    path: void 0,
    index: void 0,
    caseSensitive: void 0,
    module: root_exports2
  },
  "routes/__root/auth/callback/spotify/index": {
    id: "routes/__root/auth/callback/spotify/index",
    parentId: "routes/__root",
    path: "auth/callback/spotify",
    index: !0,
    caseSensitive: void 0,
    module: spotify_exports
  },
  "routes/__root/index": {
    id: "routes/__root/index",
    parentId: "routes/__root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: root_exports3
  }
};

// server.js
var import_vercel = require("@remix-run/vercel"), server_default = (0, import_vercel.createRequestHandler)({ build: server_build_exports, mode: "production" });
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
