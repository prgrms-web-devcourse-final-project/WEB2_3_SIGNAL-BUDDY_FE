if (!self.define) {
  let e,
    s = {};
  const i = (i, a) => (
    (i = new URL(i + ".js", a).href),
    s[i] ||
      new Promise((s) => {
        if ("document" in self) {
          const e = document.createElement("script");
          (e.src = i), (e.onload = s), document.head.appendChild(e);
        } else (e = i), importScripts(i), s();
      }).then(() => {
        let e = s[i];
        if (!e) throw new Error(`Module ${i} didn’t register its module`);
        return e;
      })
  );
  self.define = (a, n) => {
    const c =
      e ||
      ("document" in self ? document.currentScript.src : "") ||
      location.href;
    if (s[c]) return;
    let t = {};
    const r = (e) => i(e, c),
      b = { module: { uri: c }, exports: t, require: r };
    s[c] = Promise.all(a.map((e) => b[e] || r(e))).then((e) => (n(...e), t));
  };
}
define(["./workbox-1bb06f5e"], function (e) {
  "use strict";
  importScripts(),
    self.skipWaiting(),
    e.clientsClaim(),
    e.precacheAndRoute(
      [
        {
          url: "/_next/app-build-manifest.json",
          revision: "0f0fa7203397c377fc023438261a41af",
        },
        {
          url: "/_next/static/chunks/1345-0d806de63df5e3b9.js",
          revision: "q_BbNDmpPAO15qqXWNSsY",
        },
        {
          url: "/_next/static/chunks/1517-37f76c450c167233.js",
          revision: "q_BbNDmpPAO15qqXWNSsY",
        },
        {
          url: "/_next/static/chunks/1806-2788bd1428145e1e.js",
          revision: "q_BbNDmpPAO15qqXWNSsY",
        },
        {
          url: "/_next/static/chunks/2259-03ae49aaa0a892c6.js",
          revision: "q_BbNDmpPAO15qqXWNSsY",
        },
        {
          url: "/_next/static/chunks/2651-624e42479f699fcc.js",
          revision: "q_BbNDmpPAO15qqXWNSsY",
        },
        {
          url: "/_next/static/chunks/2794-1fb43c43891ead01.js",
          revision: "q_BbNDmpPAO15qqXWNSsY",
        },
        {
          url: "/_next/static/chunks/3282-2d13759c2d10ab0b.js",
          revision: "q_BbNDmpPAO15qqXWNSsY",
        },
        {
          url: "/_next/static/chunks/3428-385e5d5b3d7a36fa.js",
          revision: "q_BbNDmpPAO15qqXWNSsY",
        },
        {
          url: "/_next/static/chunks/3839-11a5dd301c73d6f0.js",
          revision: "q_BbNDmpPAO15qqXWNSsY",
        },
        {
          url: "/_next/static/chunks/41ade5dc-60559bff3fe34711.js",
          revision: "q_BbNDmpPAO15qqXWNSsY",
        },
        {
          url: "/_next/static/chunks/4519-d4429e62aec1695c.js",
          revision: "q_BbNDmpPAO15qqXWNSsY",
        },
        {
          url: "/_next/static/chunks/4bd1b696-3babe5b48e865906.js",
          revision: "q_BbNDmpPAO15qqXWNSsY",
        },
        {
          url: "/_next/static/chunks/5292-c1131208ed1d4452.js",
          revision: "q_BbNDmpPAO15qqXWNSsY",
        },
        {
          url: "/_next/static/chunks/547-0e8ae243897f3461.js",
          revision: "q_BbNDmpPAO15qqXWNSsY",
        },
        {
          url: "/_next/static/chunks/5620-81efed07b23d87b3.js",
          revision: "q_BbNDmpPAO15qqXWNSsY",
        },
        {
          url: "/_next/static/chunks/602dbae6-717a1e32dbb7e419.js",
          revision: "q_BbNDmpPAO15qqXWNSsY",
        },
        {
          url: "/_next/static/chunks/6092-d7d34cf62370d308.js",
          revision: "q_BbNDmpPAO15qqXWNSsY",
        },
        {
          url: "/_next/static/chunks/6738-2d2360397791672a.js",
          revision: "q_BbNDmpPAO15qqXWNSsY",
        },
        {
          url: "/_next/static/chunks/696-221f5e1b822c1156.js",
          revision: "q_BbNDmpPAO15qqXWNSsY",
        },
        {
          url: "/_next/static/chunks/7527-41fa3c5eb246b63f.js",
          revision: "q_BbNDmpPAO15qqXWNSsY",
        },
        {
          url: "/_next/static/chunks/7577-8e78e9cf55543e3f.js",
          revision: "q_BbNDmpPAO15qqXWNSsY",
        },
        {
          url: "/_next/static/chunks/7677-2d226b07f7d9d8dd.js",
          revision: "q_BbNDmpPAO15qqXWNSsY",
        },
        {
          url: "/_next/static/chunks/7970-0492ff24402b2c8b.js",
          revision: "q_BbNDmpPAO15qqXWNSsY",
        },
        {
          url: "/_next/static/chunks/814-ff9c077d16c9526f.js",
          revision: "q_BbNDmpPAO15qqXWNSsY",
        },
        {
          url: "/_next/static/chunks/8173-f28c83dd1c27865a.js",
          revision: "q_BbNDmpPAO15qqXWNSsY",
        },
        {
          url: "/_next/static/chunks/8cc6faea-eebbd61cb5d0e6ce.js",
          revision: "q_BbNDmpPAO15qqXWNSsY",
        },
        {
          url: "/_next/static/chunks/app/(user)/(map)/layout-09a3bc3f576a1e83.js",
          revision: "q_BbNDmpPAO15qqXWNSsY",
        },
        {
          url: "/_next/static/chunks/app/(user)/(map)/map/%5B%5B...slug%5D%5D/page-35b63ce70894e7e5.js",
          revision: "q_BbNDmpPAO15qqXWNSsY",
        },
        {
          url: "/_next/static/chunks/app/(user)/(service)/(auth)/join/page-2a2524a43108f197.js",
          revision: "q_BbNDmpPAO15qqXWNSsY",
        },
        {
          url: "/_next/static/chunks/app/(user)/(service)/(auth)/layout-c7efb393160fa43c.js",
          revision: "q_BbNDmpPAO15qqXWNSsY",
        },
        {
          url: "/_next/static/chunks/app/(user)/(service)/(auth)/login/page-3a983fd8789c723e.js",
          revision: "q_BbNDmpPAO15qqXWNSsY",
        },
        {
          url: "/_next/static/chunks/app/(user)/(service)/(auth)/reset-password/reset/page-4c873fe0b104a4d2.js",
          revision: "q_BbNDmpPAO15qqXWNSsY",
        },
        {
          url: "/_next/static/chunks/app/(user)/(service)/(auth)/reset-password/verify/page-23260fc90b960cd1.js",
          revision: "q_BbNDmpPAO15qqXWNSsY",
        },
        {
          url: "/_next/static/chunks/app/(user)/(service)/feedback/%5Bid%5D/edit/page-b8fb44643a478591.js",
          revision: "q_BbNDmpPAO15qqXWNSsY",
        },
        {
          url: "/_next/static/chunks/app/(user)/(service)/feedback/%5Bid%5D/page-cce65e9081c90a48.js",
          revision: "q_BbNDmpPAO15qqXWNSsY",
        },
        {
          url: "/_next/static/chunks/app/(user)/(service)/feedback/layout-f9e10edd67debc3d.js",
          revision: "q_BbNDmpPAO15qqXWNSsY",
        },
        {
          url: "/_next/static/chunks/app/(user)/(service)/feedback/page-3b6c20065e374a8d.js",
          revision: "q_BbNDmpPAO15qqXWNSsY",
        },
        {
          url: "/_next/static/chunks/app/(user)/(service)/feedback/write/page-8c43d2e3c7f6ed42.js",
          revision: "q_BbNDmpPAO15qqXWNSsY",
        },
        {
          url: "/_next/static/chunks/app/(user)/(service)/layout-2f46f1aa2bc6de05.js",
          revision: "q_BbNDmpPAO15qqXWNSsY",
        },
        {
          url: "/_next/static/chunks/app/(user)/(service)/my-page/profile-edit/page-b7d9a92f0f9983e9.js",
          revision: "q_BbNDmpPAO15qqXWNSsY",
        },
        {
          url: "/_next/static/chunks/app/(user)/(service)/my-page/profile/page-dbd2d17c209099e7.js",
          revision: "q_BbNDmpPAO15qqXWNSsY",
        },
        {
          url: "/_next/static/chunks/app/(user)/(service)/my-page/settings/page-528c5d53cf7bee2b.js",
          revision: "q_BbNDmpPAO15qqXWNSsY",
        },
        {
          url: "/_next/static/chunks/app/(user)/(service)/my-place/edit/page-47d0f07c4206ab15.js",
          revision: "q_BbNDmpPAO15qqXWNSsY",
        },
        {
          url: "/_next/static/chunks/app/(user)/(service)/my-place/layout-90b001dc52d6c21b.js",
          revision: "q_BbNDmpPAO15qqXWNSsY",
        },
        {
          url: "/_next/static/chunks/app/(user)/(service)/my-place/page-62beceba88c1246e.js",
          revision: "q_BbNDmpPAO15qqXWNSsY",
        },
        {
          url: "/_next/static/chunks/app/(user)/(service)/page-1815d60479f87cec.js",
          revision: "q_BbNDmpPAO15qqXWNSsY",
        },
        {
          url: "/_next/static/chunks/app/(user)/(service)/postits/page-5980e2963208b2b0.js",
          revision: "q_BbNDmpPAO15qqXWNSsY",
        },
        {
          url: "/_next/static/chunks/app/(user)/(service)/terms/page-2fb70c9e72463225.js",
          revision: "q_BbNDmpPAO15qqXWNSsY",
        },
        {
          url: "/_next/static/chunks/app/(user)/(service)/users/page-cb23fcdbd86f186b.js",
          revision: "q_BbNDmpPAO15qqXWNSsY",
        },
        {
          url: "/_next/static/chunks/app/_not-found/page-4f26b4cfe99d52a0.js",
          revision: "q_BbNDmpPAO15qqXWNSsY",
        },
        {
          url: "/_next/static/chunks/app/admin/dashboard/page-2cf2a6bee6ea0e40.js",
          revision: "q_BbNDmpPAO15qqXWNSsY",
        },
        {
          url: "/_next/static/chunks/app/admin/feedback/page-4762b6a192506bb3.js",
          revision: "q_BbNDmpPAO15qqXWNSsY",
        },
        {
          url: "/_next/static/chunks/app/admin/layout-77f4f91fb40b7eb9.js",
          revision: "q_BbNDmpPAO15qqXWNSsY",
        },
        {
          url: "/_next/static/chunks/app/admin/page-3386ec45950eef62.js",
          revision: "q_BbNDmpPAO15qqXWNSsY",
        },
        {
          url: "/_next/static/chunks/app/admin/postits/page-a67e17a594b8b70d.js",
          revision: "q_BbNDmpPAO15qqXWNSsY",
        },
        {
          url: "/_next/static/chunks/app/admin/reports/page-dda549ef73914a35.js",
          revision: "q_BbNDmpPAO15qqXWNSsY",
        },
        {
          url: "/_next/static/chunks/app/admin/support/page-c86e14ea2e8794e0.js",
          revision: "q_BbNDmpPAO15qqXWNSsY",
        },
        {
          url: "/_next/static/chunks/app/admin/terms/page-4bbdb9fd3629aa63.js",
          revision: "q_BbNDmpPAO15qqXWNSsY",
        },
        {
          url: "/_next/static/chunks/app/admin/users/page-5a3c8f961e28719b.js",
          revision: "q_BbNDmpPAO15qqXWNSsY",
        },
        {
          url: "/_next/static/chunks/app/api/auth/%5B...nextauth%5D/route-9046faddfa82781e.js",
          revision: "q_BbNDmpPAO15qqXWNSsY",
        },
        {
          url: "/_next/static/chunks/app/layout-2ec8fd028565c763.js",
          revision: "q_BbNDmpPAO15qqXWNSsY",
        },
        {
          url: "/_next/static/chunks/d648eb28-8b8a33990c43b9e3.js",
          revision: "q_BbNDmpPAO15qqXWNSsY",
        },
        {
          url: "/_next/static/chunks/framework-c8065bab8b311d0e.js",
          revision: "q_BbNDmpPAO15qqXWNSsY",
        },
        {
          url: "/_next/static/chunks/main-aebb514162ba63ab.js",
          revision: "q_BbNDmpPAO15qqXWNSsY",
        },
        {
          url: "/_next/static/chunks/main-app-4b9b5d86b97e98aa.js",
          revision: "q_BbNDmpPAO15qqXWNSsY",
        },
        {
          url: "/_next/static/chunks/pages/_app-5f03510007f8ee45.js",
          revision: "q_BbNDmpPAO15qqXWNSsY",
        },
        {
          url: "/_next/static/chunks/pages/_error-8efa4fbf3acc0458.js",
          revision: "q_BbNDmpPAO15qqXWNSsY",
        },
        {
          url: "/_next/static/chunks/polyfills-42372ed130431b0a.js",
          revision: "846118c33b2c0e922d7b3a7676f81f6f",
        },
        {
          url: "/_next/static/chunks/webpack-a2f1ea47f5683cce.js",
          revision: "q_BbNDmpPAO15qqXWNSsY",
        },
        {
          url: "/_next/static/css/11663eb5ca3c6d95.css",
          revision: "11663eb5ca3c6d95",
        },
        {
          url: "/_next/static/css/d56b7e5ebdab712e.css",
          revision: "d56b7e5ebdab712e",
        },
        {
          url: "/_next/static/media/Delete.26aaa2f7.svg",
          revision: "979d6bc8d1ecd61d2ba112f823a3ad54",
        },
        {
          url: "/_next/static/media/Google.5813d93b.svg",
          revision: "606687118c802442b0376a3ce19cb081",
        },
        {
          url: "/_next/static/media/Kakao.d6a00152.svg",
          revision: "147ee1cebbc6dac52692cb9404f509bc",
        },
        {
          url: "/_next/static/media/LoginBackground.f95de7f8.png",
          revision: "31311d3c1af39145626afd733a98a20f",
        },
        {
          url: "/_next/static/media/Logo Symbol White.7701be75.png",
          revision: "53c80e26097f3002f363001721f4fff5",
        },
        {
          url: "/_next/static/media/Logo Symbol.674ada6f.png",
          revision: "5c63843d6a12563dae81af390f0e6627",
        },
        {
          url: "/_next/static/media/Logo White.bb21c083.png",
          revision: "6576a0a3b4dbe072b6817a5bc99ee8b8",
        },
        {
          url: "/_next/static/media/Logo.4dfd2429.png",
          revision: "34208a26849f6c803a8e481333f76daf",
        },
        {
          url: "/_next/static/media/Logo.835d26ad.svg",
          revision: "147829170879e28d60167e1ce9e05f31",
        },
        {
          url: "/_next/static/media/Naver.47985de4.svg",
          revision: "47676ed2a0b5bd70c6fee74b39c60a01",
        },
        {
          url: "/_next/static/media/eye-open.9a94efd0.svg",
          revision: "740d8ba0cf25c8806ea004eec77a5f55",
        },
        {
          url: "/_next/static/media/eye-slash.434afd74.svg",
          revision: "6f9c983a65a71633157415739b3eb982",
        },
        {
          url: "/_next/static/media/liked-feedback.bcc6e176.svg",
          revision: "114daf3057777fbf9994d39fda032959",
        },
        {
          url: "/_next/static/media/liked-postit.fa0f33e7.svg",
          revision: "ccf93c2861d4eda1c02015257db16d13",
        },
        {
          url: "/_next/static/media/logo-symbol-background-white.a2cb1de4.svg",
          revision: "6ff4b42190460a4c5a5c3f91dd4ec461",
        },
        {
          url: "/_next/static/media/my-feedback.07b06c78.svg",
          revision: "bb3e5b1eb87b19c48c126673edec387d",
        },
        {
          url: "/_next/static/media/my-postit.e1b0a59b.svg",
          revision: "3daad11a1824229ed845baa95f373661",
        },
        {
          url: "/_next/static/media/two-line-hamburger.ef29a615.svg",
          revision: "fe6d838fd2c3790e3e6f31d2506a84be",
        },
        {
          url: "/_next/static/q_BbNDmpPAO15qqXWNSsY/_buildManifest.js",
          revision: "4e451ee802e7d4872d5e4250550d0122",
        },
        {
          url: "/_next/static/q_BbNDmpPAO15qqXWNSsY/_ssgManifest.js",
          revision: "b6652df95db52feb4daf4eca35380933",
        },
        {
          url: "/firebase-messaging-sw.js",
          revision: "163a53838373a7ea8b690fd70a49606e",
        },
        {
          url: "/icon-192x192-rounded.png",
          revision: "4ec205f1af21661ab33ed24cbb589bdb",
        },
        {
          url: "/icon-192x192.png",
          revision: "e648bcbeeac4b96cbdce08e3cda27a13",
        },
        {
          url: "/icon-512x512.png",
          revision: "6c4be9f570b4db253c90f1aca2261930",
        },
        {
          url: "/imgs/Camera.png",
          revision: "3d7cbb604359eaf6eaa29cdd48e72a59",
        },
        {
          url: "/imgs/DefaultProfile.png",
          revision: "5f3e58ebb82144e999138b46eefaf462",
        },
        {
          url: "/imgs/Delete.svg",
          revision: "979d6bc8d1ecd61d2ba112f823a3ad54",
        },
        {
          url: "/imgs/Google.svg",
          revision: "606687118c802442b0376a3ce19cb081",
        },
        {
          url: "/imgs/Kakao.svg",
          revision: "147ee1cebbc6dac52692cb9404f509bc",
        },
        {
          url: "/imgs/LoginBackground.png",
          revision: "31311d3c1af39145626afd733a98a20f",
        },
        {
          url: "/imgs/Logo Symbol White.png",
          revision: "53c80e26097f3002f363001721f4fff5",
        },
        {
          url: "/imgs/Logo Symbol.png",
          revision: "5c63843d6a12563dae81af390f0e6627",
        },
        {
          url: "/imgs/Logo White.png",
          revision: "6576a0a3b4dbe072b6817a5bc99ee8b8",
        },
        { url: "/imgs/Logo.png", revision: "34208a26849f6c803a8e481333f76daf" },
        { url: "/imgs/Logo.svg", revision: "147829170879e28d60167e1ce9e05f31" },
        {
          url: "/imgs/Naver.svg",
          revision: "47676ed2a0b5bd70c6fee74b39c60a01",
        },
        {
          url: "/imgs/click-marker.png",
          revision: "eb49676e8c6da396b3501cf5787ffc81",
        },
        {
          url: "/imgs/click-poi-marker.png",
          revision: "e122694bbeea645b8f4e65d22912d69e",
        },
        {
          url: "/imgs/current-marker.png",
          revision: "f63141c67146729ce206bdeffdcc8c55",
        },
        {
          url: "/imgs/end-marker.png",
          revision: "7f387bd88a2dd3d9594e78427ab621e2",
        },
        {
          url: "/imgs/eye-open.svg",
          revision: "740d8ba0cf25c8806ea004eec77a5f55",
        },
        {
          url: "/imgs/eye-slash.svg",
          revision: "6f9c983a65a71633157415739b3eb982",
        },
        {
          url: "/imgs/liked-feedback.svg",
          revision: "114daf3057777fbf9994d39fda032959",
        },
        {
          url: "/imgs/liked-postit.svg",
          revision: "ccf93c2861d4eda1c02015257db16d13",
        },
        {
          url: "/imgs/logo-symbol-background-white.svg",
          revision: "6ff4b42190460a4c5a5c3f91dd4ec461",
        },
        {
          url: "/imgs/my-feedback.svg",
          revision: "bb3e5b1eb87b19c48c126673edec387d",
        },
        {
          url: "/imgs/my-postit.svg",
          revision: "3daad11a1824229ed845baa95f373661",
        },
        {
          url: "/imgs/nav-left.png",
          revision: "ece5e80fc5d6e0ecf3c2a9c77e06a993",
        },
        {
          url: "/imgs/nav-left.svg",
          revision: "c186576ae8fbaf6ca70f454c74a549df",
        },
        {
          url: "/imgs/nav-right.png",
          revision: "424bc71d096fcebbaebd5b5fd08bbcc1",
        },
        {
          url: "/imgs/nav-right.svg",
          revision: "fca2191eee2f64aa6010e1f62bc51585",
        },
        {
          url: "/imgs/nav-straight.png",
          revision: "7934cc37079fe4fd8c8c7995d6a1e01c",
        },
        {
          url: "/imgs/nav-straight.svg",
          revision: "1854d3fad2132a821cc615fd5154b2e5",
        },
        {
          url: "/imgs/nav-u-turn.png",
          revision: "7b0a53da410696d342f4b04a0690bbd8",
        },
        {
          url: "/imgs/nav-u-turn.svg",
          revision: "7b0a53da410696d342f4b04a0690bbd8",
        },
        {
          url: "/imgs/nav-walk.svg",
          revision: "ad8312d72f85ad3a9120cb883e200e90",
        },
        {
          url: "/imgs/noisy-gradients.svg",
          revision: "92543d7b5ed7b5a2a67127525355eac9",
        },
        {
          url: "/imgs/poi-marker.png",
          revision: "0420a62e7ef4d3187ad5936f2dc649b0",
        },
        {
          url: "/imgs/sm-logo.svg",
          revision: "54e8e91834e3b3fa4f6ec6dbc52990a8",
        },
        {
          url: "/imgs/start-marker.png",
          revision: "15ad4e7821bcad3287f07030312674e4",
        },
        {
          url: "/imgs/two-line-hamburger.svg",
          revision: "fe6d838fd2c3790e3e6f31d2506a84be",
        },
      ],
      { ignoreURLParametersMatching: [] },
    ),
    e.cleanupOutdatedCaches(),
    e.registerRoute(
      "/",
      new e.NetworkFirst({
        cacheName: "start-url",
        plugins: [
          {
            cacheWillUpdate: async ({
              request: e,
              response: s,
              event: i,
              state: a,
            }) =>
              s && "opaqueredirect" === s.type
                ? new Response(s.body, {
                    status: 200,
                    statusText: "OK",
                    headers: s.headers,
                  })
                : s,
          },
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,
      new e.CacheFirst({
        cacheName: "google-fonts-webfonts",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 31536e3 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,
      new e.StaleWhileRevalidate({
        cacheName: "google-fonts-stylesheets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-font-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 4, maxAgeSeconds: 604800 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-image-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /\/_next\/image\?url=.+$/i,
      new e.StaleWhileRevalidate({
        cacheName: "next-image",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 64, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /\.(?:mp3|wav|ogg)$/i,
      new e.CacheFirst({
        cacheName: "static-audio-assets",
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /\.(?:mp4)$/i,
      new e.CacheFirst({
        cacheName: "static-video-assets",
        plugins: [
          new e.RangeRequestsPlugin(),
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /\.(?:js)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-js-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /\.(?:css|less)$/i,
      new e.StaleWhileRevalidate({
        cacheName: "static-style-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /\/_next\/data\/.+\/.+\.json$/i,
      new e.StaleWhileRevalidate({
        cacheName: "next-data",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      /\.(?:json|xml|csv)$/i,
      new e.NetworkFirst({
        cacheName: "static-data-assets",
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        const s = e.pathname;
        return !s.startsWith("/api/auth/") && !!s.startsWith("/api/");
      },
      new e.NetworkFirst({
        cacheName: "apis",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 16, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      ({ url: e }) => {
        if (!(self.origin === e.origin)) return !1;
        return !e.pathname.startsWith("/api/");
      },
      new e.NetworkFirst({
        cacheName: "others",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 86400 }),
        ],
      }),
      "GET",
    ),
    e.registerRoute(
      ({ url: e }) => !(self.origin === e.origin),
      new e.NetworkFirst({
        cacheName: "cross-origin",
        networkTimeoutSeconds: 10,
        plugins: [
          new e.ExpirationPlugin({ maxEntries: 32, maxAgeSeconds: 3600 }),
        ],
      }),
      "GET",
    );
});
