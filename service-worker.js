self.addEventListener('install', ()=>{
    caches.open('cache-10a-pokepage'),
    then(e => {
        e.add('index.html');
        e.add('css/styles.css');
        e.add('css/poke.css');
    });

    self.addEventListener('fetch', (param) => {
        param.respondWith(
            caches.match(param.request)
        )
    });
});