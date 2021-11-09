//create AppShell
const _cacheName = 'poke@v1-cache-10a_v2';
self.addEventListener('install', () => {
    console.log('install');

    caches.open('poke@v1-cache-10a_v2').
        then(e => {
            e.add('index.html');
            e.add('css/styles.css');
            e.add('css/poke.css');
        });
});

self.addEventListener('activate', () => {
    console.log('Se ha activado el serviceworker')
});

//En respuesta a la red
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.open('poke@v1-cache-10a_v2').then(function(cache) {
      return cache.match(event.request).then(function (response) {
        return response || fetch(event.request).then(function(response) {
          cache.put(event.request, response.clone());
          return response;
        });
      });
    })
  );
});
