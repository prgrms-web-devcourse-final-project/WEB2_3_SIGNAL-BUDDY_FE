if(!self.define){let e,s={};const a=(a,n)=>(a=new URL(a+".js",n).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(n,i)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let c={};const r=e=>a(e,t),p={module:{uri:t},exports:c,require:r};s[t]=Promise.all(n.map((e=>p[e]||r(e)))).then((e=>(i(...e),c)))}}define(["./workbox-1bb06f5e"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"52b51fbf6e8e85a0d0221cf5c65824f6"},{url:"/_next/static/WLxpnKp8C61V25LxXZPhw/_buildManifest.js",revision:"7c9b9c507e64b00b585e607f1e744a53"},{url:"/_next/static/WLxpnKp8C61V25LxXZPhw/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/4bd1b696-1aaacd546f10f1e9.js",revision:"WLxpnKp8C61V25LxXZPhw"},{url:"/_next/static/chunks/517-d8569570ac336d69.js",revision:"WLxpnKp8C61V25LxXZPhw"},{url:"/_next/static/chunks/742-2b7f41d86b1cd3a1.js",revision:"WLxpnKp8C61V25LxXZPhw"},{url:"/_next/static/chunks/app/(user)/(map)/map/page-00bfc13f439005b8.js",revision:"WLxpnKp8C61V25LxXZPhw"},{url:"/_next/static/chunks/app/(user)/(service)/(auth)/join/page-84722b26a67519b4.js",revision:"WLxpnKp8C61V25LxXZPhw"},{url:"/_next/static/chunks/app/(user)/(service)/(auth)/layout-2da5115100541057.js",revision:"WLxpnKp8C61V25LxXZPhw"},{url:"/_next/static/chunks/app/(user)/(service)/(auth)/login/page-e7cc5a057f87ccd7.js",revision:"WLxpnKp8C61V25LxXZPhw"},{url:"/_next/static/chunks/app/(user)/(service)/feedback/%5Bid%5D/edit/page-6ff54df7424223b8.js",revision:"WLxpnKp8C61V25LxXZPhw"},{url:"/_next/static/chunks/app/(user)/(service)/feedback/%5Bid%5D/page-d59340ed6f70d543.js",revision:"WLxpnKp8C61V25LxXZPhw"},{url:"/_next/static/chunks/app/(user)/(service)/feedback/page-f2a18bf9ada996a5.js",revision:"WLxpnKp8C61V25LxXZPhw"},{url:"/_next/static/chunks/app/(user)/(service)/feedback/write/page-b01d148ce9e7cc33.js",revision:"WLxpnKp8C61V25LxXZPhw"},{url:"/_next/static/chunks/app/(user)/(service)/layout-464b69af99411290.js",revision:"WLxpnKp8C61V25LxXZPhw"},{url:"/_next/static/chunks/app/(user)/(service)/my-page/profile-edit/page-a98daa7d34545a19.js",revision:"WLxpnKp8C61V25LxXZPhw"},{url:"/_next/static/chunks/app/(user)/(service)/my-page/profile/page-ab26575075fac3ba.js",revision:"WLxpnKp8C61V25LxXZPhw"},{url:"/_next/static/chunks/app/(user)/(service)/my-page/settings/page-4f25447878929d26.js",revision:"WLxpnKp8C61V25LxXZPhw"},{url:"/_next/static/chunks/app/(user)/(service)/my-place/edit/page-18ea3afb2e91c319.js",revision:"WLxpnKp8C61V25LxXZPhw"},{url:"/_next/static/chunks/app/(user)/(service)/my-place/layout-3866b9374af7d77b.js",revision:"WLxpnKp8C61V25LxXZPhw"},{url:"/_next/static/chunks/app/(user)/(service)/my-place/page-70f17722343b1b71.js",revision:"WLxpnKp8C61V25LxXZPhw"},{url:"/_next/static/chunks/app/(user)/(service)/page-8d705aa22ab441af.js",revision:"WLxpnKp8C61V25LxXZPhw"},{url:"/_next/static/chunks/app/(user)/(service)/postits/page-479efdd75ddb60f6.js",revision:"WLxpnKp8C61V25LxXZPhw"},{url:"/_next/static/chunks/app/(user)/(service)/terms/page-bd6035af1c58390a.js",revision:"WLxpnKp8C61V25LxXZPhw"},{url:"/_next/static/chunks/app/(user)/(service)/users/page-38aed13533c58d6e.js",revision:"WLxpnKp8C61V25LxXZPhw"},{url:"/_next/static/chunks/app/(user)/layout-8fff4813425c1324.js",revision:"WLxpnKp8C61V25LxXZPhw"},{url:"/_next/static/chunks/app/_not-found/page-65773da5c1930d10.js",revision:"WLxpnKp8C61V25LxXZPhw"},{url:"/_next/static/chunks/app/admin/layout-564166859a594a03.js",revision:"WLxpnKp8C61V25LxXZPhw"},{url:"/_next/static/chunks/app/admin/page-24f31b4ee831436b.js",revision:"WLxpnKp8C61V25LxXZPhw"},{url:"/_next/static/chunks/app/admin/reports/page-244b24154cabe421.js",revision:"WLxpnKp8C61V25LxXZPhw"},{url:"/_next/static/chunks/app/layout-d05eeaed4b0dccbe.js",revision:"WLxpnKp8C61V25LxXZPhw"},{url:"/_next/static/chunks/framework-6b27c2b7aa38af2d.js",revision:"WLxpnKp8C61V25LxXZPhw"},{url:"/_next/static/chunks/main-73f9a6f27d1267d8.js",revision:"WLxpnKp8C61V25LxXZPhw"},{url:"/_next/static/chunks/main-app-2204cc695fc53ccd.js",revision:"WLxpnKp8C61V25LxXZPhw"},{url:"/_next/static/chunks/pages/_app-d23763e3e6c904ff.js",revision:"WLxpnKp8C61V25LxXZPhw"},{url:"/_next/static/chunks/pages/_error-9b7125ad1a1e68fa.js",revision:"WLxpnKp8C61V25LxXZPhw"},{url:"/_next/static/chunks/polyfills-42372ed130431b0a.js",revision:"846118c33b2c0e922d7b3a7676f81f6f"},{url:"/_next/static/chunks/webpack-60d835819e29e072.js",revision:"WLxpnKp8C61V25LxXZPhw"},{url:"/_next/static/css/64a74423dcb2ee93.css",revision:"64a74423dcb2ee93"},{url:"/_next/static/media/Logo Symbol.674ada6f.png",revision:"5c63843d6a12563dae81af390f0e6627"},{url:"/_next/static/media/Logo.4dfd2429.png",revision:"34208a26849f6c803a8e481333f76daf"},{url:"/_next/static/media/liked-feedback.bcc6e176.svg",revision:"114daf3057777fbf9994d39fda032959"},{url:"/_next/static/media/liked-postit.fa0f33e7.svg",revision:"ccf93c2861d4eda1c02015257db16d13"},{url:"/_next/static/media/my-feedback.07b06c78.svg",revision:"bb3e5b1eb87b19c48c126673edec387d"},{url:"/_next/static/media/my-postit.e1b0a59b.svg",revision:"3daad11a1824229ed845baa95f373661"},{url:"/icon-192x192.png",revision:"e648bcbeeac4b96cbdce08e3cda27a13"},{url:"/icon-512x512.png",revision:"6c4be9f570b4db253c90f1aca2261930"},{url:"/imgs/Logo Symbol.png",revision:"5c63843d6a12563dae81af390f0e6627"},{url:"/imgs/Logo.png",revision:"34208a26849f6c803a8e481333f76daf"},{url:"/imgs/liked-feedback.svg",revision:"114daf3057777fbf9994d39fda032959"},{url:"/imgs/liked-postit.svg",revision:"ccf93c2861d4eda1c02015257db16d13"},{url:"/imgs/my-feedback.svg",revision:"bb3e5b1eb87b19c48c126673edec387d"},{url:"/imgs/my-postit.svg",revision:"3daad11a1824229ed845baa95f373661"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:n})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
