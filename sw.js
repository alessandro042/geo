// Ejemplo rápido de un sw.js corregido para GitHub Pages
const CACHE_NAME = "geo-pwa-v1";
const urlsToCache = [
  "./",                 // En lugar de "/"
  "./index.html",
  "./app.js",
  "./manifest.webmanifest"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});