//create AppShell
const _cacheName = 'poke@v1-cache-10a_v2';
self.addEventListener('install', () => {
    console.log('install');

    caches.open('poke@v1-cache-10a_v2').
        then(e => {
            e.add('index.html');
            e.add('css/styles.css');
            e.add('css/poke.css');
            e.add('assets/img/poke.png');
            e.add('assets/img/pokebackground.png');
            e.add('assets/img/pokemon-pokeball.jpg');
            e.add('assets/img/searchPoke.png');
        });
});

self.addEventListener('activate', () => {
    console.log('Se ha activado el serviceworker')
});

const cacheFirst = (event) => {
 event.respondWith(
   caches.match(event.request).then((cacheResponse) => {
     return cacheResponse || fetch(event.request).then((networkResponse) => {
       return caches.open(currentCache).then((cache) => {
         cache.put(event.request, networkResponse.clone());
         return networkResponse;
       })
     })
   })
 )
};
