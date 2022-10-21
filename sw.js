const cacheName = "image-editor-pwa";
const filesToCache = [
  "/",
  "index.html",
  "https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap",
  "https://fonts.gstatic.com/s/poppins/v20/pxiByp8kv8JHgFVrLEj6Z1xlFQ.woff2",
  "https://fonts.gstatic.com/s/poppins/v20/pxiByp8kv8JHgFVrLGT9Z1xlFQ.woff2",
  "https://fonts.gstatic.com/s/poppins/v20/pxiEyp8kv8JHgFVrJJfecg.woff2",
];

self.addEventListener("install", (e) =>
  e.waitUntil(
    caches.open(cacheName).then((cache) => cache.addAll(filesToCache))
  )
);

self.addEventListener("fetch", (e) =>
  e.respondWith(
    caches
      .match(e.request)
      .then((cachedResponse) => cachedResponse || fetch(e.request))
  )
);
