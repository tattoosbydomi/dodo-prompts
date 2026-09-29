// sw.js — offline cache for the app shell.
// Network-first, so online users always get fresh files.
// Bump CACHE_VERSION when you add/rename files in ASSETS.
const CACHE_VERSION = "v3";
const CACHE_NAME = `prompt-builder-${CACHE_VERSION}`;

const ASSETS = [
  "./",
  "./index.html",
  "./manifest.json",
  "./theme.css",
  "./styles.css",
  "./dictionary.js",
  "./enums.js",
  "./structure.js",
  "./config.js",
  "./icons.js",
  "./ui.js",
  "./prompt.js",
  "./highlight.js",
  "./scroll.js",
  "./presets.js",
  "./app.js",
  "./icon-192.png",
  "./icon-512.png",
  "./fonts/fraunces-variable.woff2",
  "./fonts/fraunces-latin-ext.woff2",
  "./fonts/newsreader-variable.woff2",
  "./fonts/newsreader-latin-ext.woff2",
  "./fonts/newsreader-italic-variable.woff2",
  "./fonts/newsreader-italic-latin-ext.woff2"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(ASSETS))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(
        keys.filter((k) => k.startsWith("prompt-builder-") && k !== CACHE_NAME)
          .map((k) => caches.delete(k))
      ))
      .then(() => self.clients.claim())
  );
});

// Network first (fresh files when online), cache fallback (works offline)
self.addEventListener("fetch", (event) => {
  const req = event.request;
  if (req.method !== "GET" || new URL(req.url).origin !== self.location.origin) return;

  event.respondWith(
    fetch(req)
      .then((res) => {
        if (res.ok) {
          const copy = res.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(req, copy));
        }
        return res;
      })
      .catch(() => caches.match(req, { ignoreSearch: true }))
  );
});
