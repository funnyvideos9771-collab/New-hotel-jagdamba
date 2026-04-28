const CACHE_NAME = 'jagdamba-v2';
const ASSETS = ['index.html', 'manifest.json', '1000172945.png'];
self.addEventListener('install', (e) => { e.waitUntil(caches.open(CACHE_NAME).then((c) => c.addAll(ASSETS))); });
self.addEventListener('fetch', (e) => { e.respondWith(fetch(e.request).catch(() => caches.match(e.request))); });
