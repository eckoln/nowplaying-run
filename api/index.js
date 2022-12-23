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

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

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
var import_react2 = require("@remix-run/react");

// src/styles/app.css
var app_default = "/build/_assets/app-YGN5SFVO.css";

// src/root.tsx
var import_jsx_runtime2 = require("react/jsx-runtime"), links = () => [
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
  charset: "utf-8",
  title: "Now Playing - The Minimalistic Overlay for Livestreams",
  viewport: "width=device-width,initial-scale=1",
  description: "Now Playing is an overlay service for livestreamers that serves up an overlay of the track you are listening to on Spotify.",
  keywords: "spotify now playing, spotify currently playing, now playing overlay, now playing"
});
function App() {
  return /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.Meta, {}),
      /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_react2.Links, {})
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("body", { className: "min-h-screen w-full antialiased", children: [
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
  }, []), !data || !data.is_playing ? /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", {}) : /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("a", { href: data.href, target: "_blank", rel: "noreferrer", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "relative inline-flex w-full max-w-[285px] flex-row items-center gap-x-4 overflow-hidden rounded-lg bg-black/95 py-1.5 px-3", children: [
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("figure", { className: "inset-0 z-10 h-full max-h-[64px] w-full max-w-[64px]", children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("img", { src: data.image, alt: "" }) }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("div", { className: "z-10 truncate text-green-500", children: [
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_ui.Heading, { as: "h5", size: "h5", children: data.name }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("p", { className: "text-sm text-gray-400", children: data.artists.map((artist) => artist).join(", ") })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsx)("div", { className: "absolute inset-0 z-0 hidden h-full w-full bg-black bg-opacity-50 backdrop-blur-md" })
  ] }) });
}

// src/routes/__root.tsx
var root_exports2 = {};
__export(root_exports2, {
  default: () => App3
});

// src/components/shared/ui/Link.tsx
var import_react6 = require("@remix-run/react"), import_jsx_runtime5 = require("react/jsx-runtime");
function Link({ to, external, ...props }) {
  let linkStyle = "font-bold text-green-400 transition-colors hover:text-green-600";
  return external ? /* @__PURE__ */ (0, import_jsx_runtime5.jsx)("a", { href: to, className: linkStyle, ...props }) : /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_react6.Link, { to, className: linkStyle, ...props });
}

// src/components/shared/Footer.tsx
var import_jsx_runtime6 = require("react/jsx-runtime");
function Footer() {
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("footer", { className: "bg-black", children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: "py-6", children: /* @__PURE__ */ (0, import_jsx_runtime6.jsx)("div", { className: "container", children: /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("div", { className: "flex flex-col items-center gap-y-2", children: [
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(Copyright, {}),
    /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(ContriBute, {})
  ] }) }) }) });
}
var Copyright = () => /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("p", { children: [
  "made by",
  " ",
  /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
    Link,
    {
      to: "https://twitter.com/eckoln",
      target: "_blank",
      rel: "noreferrer",
      external: !0,
      children: "@eckoln"
    }
  )
] }), ContriBute = () => /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)("p", { children: [
  /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(Link, { to: "/", children: "nowplaying.run" }),
  " is an open-source initiative.",
  " ",
  /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
    Link,
    {
      to: "https://github.com/eckoln/nowplaying-run",
      target: "_blank",
      rel: "noreferrer",
      external: !0,
      children: "Contribute!"
    }
  )
] });

// src/components/shared/Header.tsx
var import_react7 = require("@remix-run/react"), import_bs = require("react-icons/bs"), import_jsx_runtime7 = require("react/jsx-runtime");
function Header() {
  return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("header", { children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("nav", { className: "py-4", children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "container", children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "flex flex-row items-center justify-between", children: /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(
    import_react7.Link,
    {
      to: "/",
      className: "inline-flex items-center justify-center gap-x-2",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { className: "h-10 w-10", children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_bs.BsSoundwave, { className: "h-full w-full" }) }),
        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("span", { className: "hidden text-xl font-semibold tablet:block", children: "Now Playing" })
      ]
    }
  ) }) }) }) });
}

// src/routes/__root.tsx
var import_react8 = require("@remix-run/react"), import_jsx_runtime8 = require("react/jsx-runtime");
function App3() {
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)("div", { className: "h-full w-full bg-gradient-to-b from-green-600 via-neutral-900 to-black text-white", children: [
    /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(Header, {}),
    /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("main", { children: /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_react8.Outlet, {}) }),
    /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(Footer, {})
  ] });
}

// src/routes/__root/auth/callback/spotify/index.tsx
var spotify_exports = {};
__export(spotify_exports, {
  loader: () => loader2
});
var import_node4 = require("@remix-run/node"), loader2 = async ({ request }) => {
  let code = new URL(request.url).searchParams.get("code"), accessToken = await spotify.getAccesToken(code), currentUser = await spotify.getCurrentUser(
    accessToken == null ? void 0 : accessToken.access_token
  ), getUser2 = await prisma.account.findUnique({
    where: { spotifyId: currentUser == null ? void 0 : currentUser.id }
  });
  if (getUser2)
    return await prisma.account.update({
      where: { id: getUser2.id },
      data: { refreshToken: accessToken == null ? void 0 : accessToken.refresh_token }
    }), (0, import_node4.redirect)("/?ref=" + getUser2.id);
  let createAccount = await prisma.account.create({
    data: {
      spotifyId: currentUser == null ? void 0 : currentUser.id,
      displayName: currentUser == null ? void 0 : currentUser.display_name,
      refreshToken: accessToken == null ? void 0 : accessToken.refresh_token
    }
  });
  return (0, import_node4.redirect)("/?ref=" + createAccount.id);
};

// src/routes/__root/index.tsx
var root_exports3 = {};
__export(root_exports3, {
  default: () => HomePage,
  getUser: () => getUser,
  loader: () => loader3
});

// src/components/shared/ui/Button.tsx
var import_react9 = require("@remix-run/react"), import_dist = require("@rocinante/ui/dist/"), import_jsx_runtime9 = require("react/jsx-runtime");
function Button({ to, external, ...props }) {
  let isLink = typeof to < "u", buttonComponent = /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_dist.Button, { ...props });
  return isLink && external ? /* @__PURE__ */ (0, import_jsx_runtime9.jsx)("a", { href: to, children: buttonComponent }) : isLink ? /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_react9.Link, { to, children: buttonComponent }) : buttonComponent;
}

// src/components/AuthHeroHomePage.tsx
var import_ui2 = require("@rocinante/ui"), import_jsx_runtime10 = require("react/jsx-runtime");
function AuthHeroHomePage({ data }) {
  let url2 = `${data.origin}/overlays/${data.ref}`;
  return /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("div", { className: "flex w-full flex-col items-center space-y-3 rounded-lg bg-green-400/25 p-6", children: [
    /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)(import_ui2.Heading, { as: "h3", size: "h3", children: [
      "Hello ",
      data.user.displayName,
      "!"
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
      Button,
      {
        variant: "primary",
        onClick: () => (console.log("clicked to overlay url"), navigator.clipboard.writeText(url2), alert("The URL has been copied!")),
        children: "Click to Copy"
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(import_ui2.Heading, { children: "OR" }),
    /* @__PURE__ */ (0, import_jsx_runtime10.jsx)("p", { className: "select-all", children: url2 }),
    /* @__PURE__ */ (0, import_jsx_runtime10.jsxs)("p", { className: "text-sm", children: [
      "You must now make a few adjustments.",
      " ",
      /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(Link, { to: "#how-to-use", children: "Click here" }),
      " and Follow the directives."
    ] })
  ] });
}

// src/components/GuestHeroHomePage.tsx
var import_ui3 = require("@rocinante/ui"), import_bs2 = require("react-icons/bs"), import_jsx_runtime11 = require("react/jsx-runtime");
function GuestHeroHomePage({ authorizeUrl }) {
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(import_jsx_runtime11.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "relative inline-flex w-full max-w-[285px] flex-row items-center gap-4 rounded-lg bg-black/95 p-3", children: [
      /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("figure", { className: "inline-block h-12 w-12 overflow-hidden rounded-lg", children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("img", { src: "/overlay-example-figure.png", alt: "" }) }),
      /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)("div", { className: "flex flex-col items-start", children: [
        /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(import_ui3.Heading, { as: "h5", size: "h5", className: "text-green-400", children: "Always Forever" }),
        /* @__PURE__ */ (0, import_jsx_runtime11.jsx)("p", { className: "text-sm text-gray-400", children: "Artist" })
      ] })
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
      Button,
      {
        variant: "ghost",
        to: authorizeUrl,
        endIcon: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(import_bs2.BsArrowRight, { className: "h-5 w-5" }),
        external: !0,
        children: "Let's create your overlay"
      }
    )
  ] });
}

// src/components/HeroHomePage.tsx
var import_ui4 = require("@rocinante/ui"), import_jsx_runtime12 = require("react/jsx-runtime");
function HeroHomePage({ data }) {
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("section", { children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", { className: "py-8 tablet:py-24", children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", { className: "mx-auto w-full laptop:max-w-2xl", children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("div", { className: "container", children: /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("div", { className: "flex flex-col items-center justify-center space-y-6 text-center", children: [
    /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_ui4.Heading, { as: "h1", size: "h1", children: "The Minimalistic Overlay for Livestreams" }),
    /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)("p", { className: "text-gray-300", children: [
      /* @__PURE__ */ (0, import_jsx_runtime12.jsx)("span", { className: "font-semibold", children: "Now Playing" }),
      ' is an overlay service for livestreamers that serves up an overlay of the track you are listening to on Spotify and adds it to OBS Studio, XSplit, and similar broadcasting tools as a "browser" source. It is simple to set up and completely free to use.'
    ] }),
    data.ref ? /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(AuthHeroHomePage, { data }) : /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(GuestHeroHomePage, { authorizeUrl: data.authorizeUrl })
  ] }) }) }) }) });
}

// src/components/HowToUseHomePage.tsx
var import_ui5 = require("@rocinante/ui"), import_jsx_runtime13 = require("react/jsx-runtime");
function HowToUseHomePage() {
  return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("section", { id: "how-to-use", children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", { className: "mx-auto w-full py-24 laptop:max-w-2xl", children: /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("div", { className: "container", children: /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { className: "space-y-10", children: [
    /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("h1", { className: "text-2xl font-bold leading-snug", children: "How to use?" }),
    /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)(List, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
        ListItem,
        {
          heading: "Step 1: Copy the overlay url",
          description: "Copy the link we gave you after you signed in."
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
        ListItem,
        {
          heading: "Step 2: Open your broadcasting tool",
          description: "Open your broadcasting tool and add a new browser source. Paste the overlay link into the URL field."
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
        ListItem,
        {
          heading: "Step 3: Set up the sizes",
          description: "Width: 285, Height: 76. The dimensions should be set to 285x76."
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
        ListItem,
        {
          heading: "Step 4: And done!",
          description: "The songs you've been listening to will now appear immediately in the source you've added."
        }
      )
    ] })
  ] }) }) }) });
}
var List = ({ children }) => /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("ul", { className: "space-y-8", children }), ListItem = ({
  heading,
  description
}) => /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime13.jsxs)("div", { children: [
  /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(import_ui5.Heading, { as: "h6", children: heading }),
  /* @__PURE__ */ (0, import_jsx_runtime13.jsx)("p", { className: "text-gray-400", children: description })
] }) });

// src/routes/__root/index.tsx
var import_node5 = require("@remix-run/node"), import_react10 = require("@remix-run/react"), import_jsx_runtime14 = require("react/jsx-runtime"), getUser = async (ref) => await prisma.account.findUnique({ where: { id: ref } });
async function loader3({ request }) {
  let url2 = new URL(request.url), ref = url2.searchParams.get("ref"), user = ref ? await getUser(ref) : null;
  return ref && !user ? (0, import_node5.redirect)("/") : (0, import_node5.json)({
    user,
    origin: url2.origin,
    ref: url2.searchParams.get("ref"),
    authorizeUrl: spotify.createAuthorizeUrl()
  });
}
function HomePage() {
  let data = (0, import_react10.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_runtime14.jsxs)(import_jsx_runtime14.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(HeroHomePage, { data }),
    /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(HowToUseHomePage, {})
  ] });
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { version: "0fa596a7", entry: { module: "/build/entry.client-QTKK27JY.js", imports: ["/build/_shared/chunk-SLPSZVQY.js", "/build/_shared/chunk-G5WX4PPA.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-VSSXXUFI.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/__overlays": { id: "routes/__overlays", parentId: "root", path: void 0, index: void 0, caseSensitive: void 0, module: "/build/routes/__overlays-3CHOXZ6K.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/__overlays/overlays/$ref": { id: "routes/__overlays/overlays/$ref", parentId: "routes/__overlays", path: "overlays/:ref", index: void 0, caseSensitive: void 0, module: "/build/routes/__overlays/overlays/$ref-YWR3DFYS.js", imports: ["/build/_shared/chunk-U2ADSXYW.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/__root": { id: "routes/__root", parentId: "root", path: void 0, index: void 0, caseSensitive: void 0, module: "/build/routes/__root-BVGB2YSB.js", imports: ["/build/_shared/chunk-DNZF2PVB.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/__root/auth/callback/spotify/index": { id: "routes/__root/auth/callback/spotify/index", parentId: "routes/__root", path: "auth/callback/spotify", index: !0, caseSensitive: void 0, module: "/build/routes/__root/auth/callback/spotify/index-LRRWIURK.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/__root/index": { id: "routes/__root/index", parentId: "routes/__root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/__root/index-N7MCNJP2.js", imports: ["/build/_shared/chunk-U2ADSXYW.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, url: "/build/manifest-0FA596A7.js" };

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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  future,
  publicPath,
  routes
});
