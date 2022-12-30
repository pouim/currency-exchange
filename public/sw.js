/* eslint-disable no-undef */
// eslint-disable-next-line no-undef
importScripts("./assets/scripts/workbox/workbox-v6.3.0/workbox-sw.js");

workbox.setConfig({
  modulePathPrefix: "./assets/scripts/workbox/workbox-v6.3.0",
  debug: false, // Switch debug logging on/off here.
});

// Set up page cache
const pageCache = new workbox.strategies.StaleWhileRevalidate({
  cacheName: "page-cache",
  plugins: [
    new workbox.cacheableResponse.CacheableResponsePlugin({
      statuses: [200, 400],
    }),
  ],
});

workbox.recipes.warmStrategyCache({
  urls: ["/index.html", "/"],
  strategy: pageCache,
});

workbox.routing.registerRoute(
  ({ request }) => request.mode === "navigate",
  pageCache
);

// Set up asset cache
workbox.routing.registerRoute(
  ({ request }) => ["style", "script", "worker"].includes(request.destination),
  new workbox.strategies.StaleWhileRevalidate({
    cacheName: "asset-cache",
    plugins: [
      new workbox.cacheableResponse.CacheableResponsePlugin({
        statuses: [200, 400],
      }),
    ],
  })
);

// Set up offline fallback
workbox.recipes.offlineFallback({
  pageFallback: "/offline.html",
});
