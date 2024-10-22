self.addEventListener('install', event => {
  console.log('Service Worker installed.');
  event.waitUntil(
    caches.open('static').then(cache => {
      cache.addAll(['/']);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
