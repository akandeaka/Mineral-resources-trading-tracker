const CACHE = 'mrt-v2';
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  'https://cdn.jsdelivr.net/npm/chart.js@4.4.0/dist/chart.umd.min.js'
];

self.addEventListener('install', e => {
  self.skipWaiting();
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)));
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  // Skip non-GET requests (POST, etc.)
  if (e.request.method !== 'GET') return;

  // Skip Firebase API calls — they must go to network
  const url = e.request.url;
  if (url.includes('firestore.googleapis.com') ||
      url.includes('identitytoolkit.googleapis.com') ||
      url.includes('firebase') ||
      url.includes('gstatic.com/firebasejs')) {
    return;
  }

  e.respondWith(
    caches.match(e.request).then(cached => {
      return cached || fetch(e.request).then(res => {
        // Cache only same-origin or CDN assets (not opaque responses)
        if (res && res.status === 200 && res.type !== 'opaque') {
          const copy = res.clone();
          caches.open(CACHE).then(c => c.put(e.request, copy));
        }
        return res;
      }).catch(() => caches.match('./index.html'));
    })
  );
});
