var CACHE_NAME = 'gamelist-cache';
var urlsToCache = [
  "/views/GameView.vue",
  "/views/HomeView.vue",
  "/views/BrowseView.vue",
  "/views/LoginView.vue",
  "/views/ProfileView.vue",
  "/components/FooterComponent.vue",
  "/components/NavBarComponent.vue",
  "/main.js",
  "/App.vue",
  "/data/games.json",
  "/data/users.json",
  "/assets/logo_black.png",
  "/assets/logo.png",
  "/assets/main.css",
  "/router/index.js",
];

self.addEventListener('install',
  function(event) {
    // Perform install steps
    event.waitUntil(
      caches.open(CACHE_NAME)
        .then(function(cache) {
          console.log('Opened cache');
          return cache.addAll(urlsToCache);
    })
  );
});