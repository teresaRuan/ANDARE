let version = '1.0.0';
let cacheName = 'andare';
let filesToCache = [
  './dist/bundle.js',
  './dist/style.css',
  './views/index.html',
  './public/css/normalize.css',
  './public/css/global.css',
  './public/img/logo.png',
  './public/img/bg.png'
];

self.addEventListener('install', function(event) {
	event.waitUntil(
		caches.open(cacheName)
			     .then(function(cache) {
			     	return cache.addAll(filesToCache)
			     })
		)

})

self.addEventListener('activate', function(event) {

    event.waitUntil(
        caches.keys().then(function (cacheNames) {
            return Promise.all(cacheNames.map(function(key) {
                if (key !== cacheName) {
                    return caches.delete(key);
                }
            }))
        })
    )
});

self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request).then(function(response) {
            return response || fetch(event.request);
        } )
    )
});