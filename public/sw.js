if(!self.define){let e,s={};const i=(i,a)=>(i=new URL(i+".js",a).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(a,c)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let t={};const r=e=>i(e,n),o={module:{uri:n},exports:t,require:r};s[n]=Promise.all(a.map((e=>o[e]||r(e)))).then((e=>(c(...e),t)))}}define(["./workbox-1bb06f5e"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"d965d73cdc78061781344ecde088cda7"},{url:"/_next/static/chunks/100-dab047e0f2eb7e39.js",revision:"r7f8R6B4VogxSqy72WiEo"},{url:"/_next/static/chunks/173-e6605ff920b63d49.js",revision:"r7f8R6B4VogxSqy72WiEo"},{url:"/_next/static/chunks/395-c67e411a4afd0524.js",revision:"r7f8R6B4VogxSqy72WiEo"},{url:"/_next/static/chunks/4bd1b696-03aef1c14c7e64e5.js",revision:"r7f8R6B4VogxSqy72WiEo"},{url:"/_next/static/chunks/517-48d3a07f1bd6eee8.js",revision:"r7f8R6B4VogxSqy72WiEo"},{url:"/_next/static/chunks/712-62251b786549deda.js",revision:"r7f8R6B4VogxSqy72WiEo"},{url:"/_next/static/chunks/791-5ef37c8a48e3d351.js",revision:"r7f8R6B4VogxSqy72WiEo"},{url:"/_next/static/chunks/970-a4de1f7d583356ac.js",revision:"r7f8R6B4VogxSqy72WiEo"},{url:"/_next/static/chunks/app/(user)/(map)/map/page-1ae2e7cce66f727c.js",revision:"r7f8R6B4VogxSqy72WiEo"},{url:"/_next/static/chunks/app/(user)/(service)/(auth)/join/page-97e252e9ac0b7290.js",revision:"r7f8R6B4VogxSqy72WiEo"},{url:"/_next/static/chunks/app/(user)/(service)/(auth)/layout-63a2989691ba118e.js",revision:"r7f8R6B4VogxSqy72WiEo"},{url:"/_next/static/chunks/app/(user)/(service)/(auth)/login/page-823e1920e0d4a421.js",revision:"r7f8R6B4VogxSqy72WiEo"},{url:"/_next/static/chunks/app/(user)/(service)/(auth)/reset-password/page-312b471595e118e6.js",revision:"r7f8R6B4VogxSqy72WiEo"},{url:"/_next/static/chunks/app/(user)/(service)/feedback/%5Bid%5D/edit/page-d91f8687a0dc6074.js",revision:"r7f8R6B4VogxSqy72WiEo"},{url:"/_next/static/chunks/app/(user)/(service)/feedback/%5Bid%5D/page-20c7c0610c853a72.js",revision:"r7f8R6B4VogxSqy72WiEo"},{url:"/_next/static/chunks/app/(user)/(service)/feedback/layout-d522ed3c965c7eca.js",revision:"r7f8R6B4VogxSqy72WiEo"},{url:"/_next/static/chunks/app/(user)/(service)/feedback/page-da44c2b5df21c363.js",revision:"r7f8R6B4VogxSqy72WiEo"},{url:"/_next/static/chunks/app/(user)/(service)/feedback/write/page-051e6b8201836fd6.js",revision:"r7f8R6B4VogxSqy72WiEo"},{url:"/_next/static/chunks/app/(user)/(service)/layout-6a0fb9ee81f9f46b.js",revision:"r7f8R6B4VogxSqy72WiEo"},{url:"/_next/static/chunks/app/(user)/(service)/my-page/profile-edit/page-16051d85ff417fac.js",revision:"r7f8R6B4VogxSqy72WiEo"},{url:"/_next/static/chunks/app/(user)/(service)/my-page/profile/page-d9e2fc467d048f9c.js",revision:"r7f8R6B4VogxSqy72WiEo"},{url:"/_next/static/chunks/app/(user)/(service)/my-page/settings/page-1121d7259d6eddc9.js",revision:"r7f8R6B4VogxSqy72WiEo"},{url:"/_next/static/chunks/app/(user)/(service)/my-place/edit/page-7be002f3b8e6a4ff.js",revision:"r7f8R6B4VogxSqy72WiEo"},{url:"/_next/static/chunks/app/(user)/(service)/my-place/layout-dc5e07ff88ddfda8.js",revision:"r7f8R6B4VogxSqy72WiEo"},{url:"/_next/static/chunks/app/(user)/(service)/my-place/page-5c19d9f88ccd2ab0.js",revision:"r7f8R6B4VogxSqy72WiEo"},{url:"/_next/static/chunks/app/(user)/(service)/page-c5313a55b186bdb2.js",revision:"r7f8R6B4VogxSqy72WiEo"},{url:"/_next/static/chunks/app/(user)/(service)/postits/page-69853c885163c6ff.js",revision:"r7f8R6B4VogxSqy72WiEo"},{url:"/_next/static/chunks/app/(user)/(service)/terms/page-01d7d7b74aa74e9e.js",revision:"r7f8R6B4VogxSqy72WiEo"},{url:"/_next/static/chunks/app/(user)/(service)/users/page-a5a864b833686806.js",revision:"r7f8R6B4VogxSqy72WiEo"},{url:"/_next/static/chunks/app/(user)/layout-143df89d04528f95.js",revision:"r7f8R6B4VogxSqy72WiEo"},{url:"/_next/static/chunks/app/_not-found/page-eeb518b3ddd314d9.js",revision:"r7f8R6B4VogxSqy72WiEo"},{url:"/_next/static/chunks/app/admin/layout-6f015559b2d1b8e4.js",revision:"r7f8R6B4VogxSqy72WiEo"},{url:"/_next/static/chunks/app/admin/page-355847c6cfbc1d57.js",revision:"r7f8R6B4VogxSqy72WiEo"},{url:"/_next/static/chunks/app/admin/reports/page-69baf6604a7b4e45.js",revision:"r7f8R6B4VogxSqy72WiEo"},{url:"/_next/static/chunks/app/layout-cec53f2a2421cd5f.js",revision:"r7f8R6B4VogxSqy72WiEo"},{url:"/_next/static/chunks/framework-c1de09264d6d97f2.js",revision:"r7f8R6B4VogxSqy72WiEo"},{url:"/_next/static/chunks/main-77c5bae15900d09b.js",revision:"r7f8R6B4VogxSqy72WiEo"},{url:"/_next/static/chunks/main-app-63c32415129448c3.js",revision:"r7f8R6B4VogxSqy72WiEo"},{url:"/_next/static/chunks/pages/_app-d23763e3e6c904ff.js",revision:"r7f8R6B4VogxSqy72WiEo"},{url:"/_next/static/chunks/pages/_error-9b7125ad1a1e68fa.js",revision:"r7f8R6B4VogxSqy72WiEo"},{url:"/_next/static/chunks/polyfills-42372ed130431b0a.js",revision:"846118c33b2c0e922d7b3a7676f81f6f"},{url:"/_next/static/chunks/webpack-6aad2f4b43cc9e46.js",revision:"r7f8R6B4VogxSqy72WiEo"},{url:"/_next/static/css/a6f8d528e82a73c3.css",revision:"a6f8d528e82a73c3"},{url:"/_next/static/media/Camera.891e4cf0.png",revision:"3d7cbb604359eaf6eaa29cdd48e72a59"},{url:"/_next/static/media/DefaultProfile.cc195325.png",revision:"d654a23f069ad6ec149cab9e1a461b1f"},{url:"/_next/static/media/Google.5813d93b.svg",revision:"606687118c802442b0376a3ce19cb081"},{url:"/_next/static/media/Kakao.d6a00152.svg",revision:"147ee1cebbc6dac52692cb9404f509bc"},{url:"/_next/static/media/LoginBackground.f95de7f8.png",revision:"31311d3c1af39145626afd733a98a20f"},{url:"/_next/static/media/Logo Symbol White.7701be75.png",revision:"53c80e26097f3002f363001721f4fff5"},{url:"/_next/static/media/Logo Symbol.674ada6f.png",revision:"5c63843d6a12563dae81af390f0e6627"},{url:"/_next/static/media/Logo White.bb21c083.png",revision:"6576a0a3b4dbe072b6817a5bc99ee8b8"},{url:"/_next/static/media/Logo.4dfd2429.png",revision:"34208a26849f6c803a8e481333f76daf"},{url:"/_next/static/media/Logo.835d26ad.svg",revision:"147829170879e28d60167e1ce9e05f31"},{url:"/_next/static/media/Naver.47985de4.svg",revision:"47676ed2a0b5bd70c6fee74b39c60a01"},{url:"/_next/static/media/liked-feedback.bcc6e176.svg",revision:"114daf3057777fbf9994d39fda032959"},{url:"/_next/static/media/liked-postit.fa0f33e7.svg",revision:"ccf93c2861d4eda1c02015257db16d13"},{url:"/_next/static/media/my-feedback.07b06c78.svg",revision:"bb3e5b1eb87b19c48c126673edec387d"},{url:"/_next/static/media/my-postit.e1b0a59b.svg",revision:"3daad11a1824229ed845baa95f373661"},{url:"/_next/static/r7f8R6B4VogxSqy72WiEo/_buildManifest.js",revision:"03c1cca52891bc063c4040c4d1e17ebb"},{url:"/_next/static/r7f8R6B4VogxSqy72WiEo/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/icon-192x192-rounded.png",revision:"4ec205f1af21661ab33ed24cbb589bdb"},{url:"/icon-192x192.png",revision:"e648bcbeeac4b96cbdce08e3cda27a13"},{url:"/icon-512x512.png",revision:"6c4be9f570b4db253c90f1aca2261930"},{url:"/imgs/Camera.png",revision:"3d7cbb604359eaf6eaa29cdd48e72a59"},{url:"/imgs/DefaultProfile.png",revision:"d654a23f069ad6ec149cab9e1a461b1f"},{url:"/imgs/Google.svg",revision:"606687118c802442b0376a3ce19cb081"},{url:"/imgs/Kakao.svg",revision:"147ee1cebbc6dac52692cb9404f509bc"},{url:"/imgs/LoginBackground.png",revision:"31311d3c1af39145626afd733a98a20f"},{url:"/imgs/Logo Symbol White.png",revision:"53c80e26097f3002f363001721f4fff5"},{url:"/imgs/Logo Symbol.png",revision:"5c63843d6a12563dae81af390f0e6627"},{url:"/imgs/Logo White.png",revision:"6576a0a3b4dbe072b6817a5bc99ee8b8"},{url:"/imgs/Logo.png",revision:"34208a26849f6c803a8e481333f76daf"},{url:"/imgs/Logo.svg",revision:"147829170879e28d60167e1ce9e05f31"},{url:"/imgs/Naver.svg",revision:"47676ed2a0b5bd70c6fee74b39c60a01"},{url:"/imgs/current-marker.png",revision:"f63141c67146729ce206bdeffdcc8c55"},{url:"/imgs/liked-feedback.svg",revision:"114daf3057777fbf9994d39fda032959"},{url:"/imgs/liked-postit.svg",revision:"ccf93c2861d4eda1c02015257db16d13"},{url:"/imgs/my-feedback.svg",revision:"bb3e5b1eb87b19c48c126673edec387d"},{url:"/imgs/my-postit.svg",revision:"3daad11a1824229ed845baa95f373661"},{url:"/imgs/noisy-gradients.svg",revision:"92543d7b5ed7b5a2a67127525355eac9"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:i,state:a})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
