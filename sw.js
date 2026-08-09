// Service Worker for "For Shifa ❤️"
// Handles offline caching + enables "Add to Home Screen" / PWA install.

const CACHE_NAME = "for-shifa-v1";

const APP_SHELL = [
  "./",
  "./index.html",
  "./manifest.json",
  "./assets/icons/icon-192.png",
  "./assets/icons/icon-512.png",
  "./assets/icons/icon-512-maskable.png",
  "./assets/icons/apple-touch-icon.png",
  "./assets/icons/favicon.ico",
  "./assets/icons/favicon-32.png",
  "./assets/icons/favicon-16.png",
  "./assets/photos/gallery-1.jpg",
  "./assets/photos/gallery-2.jpg",
  "./assets/photos/gallery-3.jpg",
  "./assets/photos/gallery-4.jpg",
  "./assets/photos/gallery-5.jpg",
  "./assets/photos/gallery-6.jpg"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(APP_SHELL).catch(() => {
        // If any single asset fails (e.g. path mismatch), don't block install.
        return Promise.resolve();
      });
    })
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((key) => key !== CACHE_NAME)
          .map((key) => caches.delete(key))
      )
    )
  );
  self.clients.claim();
});

// Cache-first for same-origin app-shell assets, network-first fallback for everything else
// (keeps QR code images / fonts / external calls always fresh).
self.addEventListener("fetch", (event) => {
  const req = event.request;

  if (req.method !== "GET") return;

  const url = new URL(req.url);
  const isSameOrigin = url.origin === self.location.origin;

  if (!isSameOrigin) {
    // Let cross-origin requests (Google Fonts, QR API, WhatsApp) pass through normally.
    return;
  }

  event.respondWith(
    caches.match(req).then((cached) => {
      if (cached) return cached;
      return fetch(req)
        .then((res) => {
          const resClone = res.clone();
          caches.open(CACHE_NAME).then((cache) => cache.put(req, resClone));
          return res;
        })
        .catch(() => cached);
    })
  );
});
