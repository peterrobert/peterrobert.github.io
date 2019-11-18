const cacheName = 'v1';
const cacheAssets = [
  '/',
  '/css/style.css',
  '/js/main.js',
  '/js/jquery.min.js',
  '/js/jquery-migrate-3.0.1.min.js',
  '/js/popper.min.js',
  '/js/bootstrap.min.js',
  '/js/jquery.easing.1.3.js',
  '/js/jquery.waypoints.min.js',
  '/js/jquery.stellar.min.js',
  '/js/owl.carousel.min.js',
  '/js/jquery.magnific-popup.min.js',
  '/js/aos.js',
  '/js/jquery.animateNumber.min.js',
  '/js/scrollax.min.js',
  '/css/open-iconic-bootstrap.min.css',
  '/css/animate.css',
  '/css/owl.carousel.min.css',
  '/css/owl.theme.default.min.css',
  '/css/magnific-popup.css',
  '/css/aos.css',
  '/css/ionicons.min.css',
  '/css/flaticon.css',
  '/css/icomoon.css',
  '/images/partner-1.png',
  '/images/partner-2.png',
  '/images/about.jpg',
  '/images/work-1.jpg',
  '/images/work-2.jpg',
  '/images/work-3.jpg',
  '/images/work-4.jpg',
  '/images/work-5.jpg',
  '/images/partner-3.png',
  '/images/partner-4.png',
  '/images/partner-5.png',
  '/images/work-6.jpg',
  '/site.webmanifest',
  '/favicon-32x32.png',
  '/favicon-16x16.png',
  '/fonts/ionicons/fonts/ionicons.eot?v=1.5.2',
  '/fonts/ionicons/fonts/ionicons.svg?v=1.5.2',
  '/fonts/ionicons/fonts/ionicons.ttf?v=1.5.2',
  '/fonts/ionicons/fonts/ionicons.woff?v=1.5.2',
  '/fonts/ionicons/fonts/ionicons.woff2?v=1.5.2',
  '/toastr.min.css',
  '/toastr.min.js'

]

self.addEventListener("install", (e) => {
  // this is where i will do the caching of the files
  e.waitUntil(
    caches.open(cacheName).then(function (cache) {
      console.log("caching");
      cache.addAll(cacheAssets);
    })
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (e) => {
  //activating the service worker
  e.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cache => {
          if (cache !== cacheName) {
            return caches.delete(cache);
          }
        })
      )
    })
  )
})

self.addEventListener('fetch', (e) => {

  e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
  
});