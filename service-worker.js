const cacheName = "2026-08-28.08";

const appFiles = [
  "data/core.js",
  "data/rcr.js",
  "data/disp.js",
  "images/background.jpg",
  "images/favicon.ico",
  "resources/KMKDSPK_.ttf",
  "scripts/app.js",
  "scripts/config.js",
  "scripts/const.js",
  "scripts/content.js",
  "scripts/generator.js",
  "scripts/sets.js",
  "scripts/storage.js",
  "scripts/util.js",
  "styles/style.css",
  "index.html",
];

const banners = [
  "images/banners/core-environment-freedom-tower.webp",
  "images/banners/core-environment-insula-primalis.webp",
  "images/banners/core-environment-magmaria.webp",
  "images/banners/core-environment-megalopolis.webp",
  "images/banners/core-environment-ruins-of-atlantis.webp",
  "images/banners/core-environment-wagner-mars-base.webp",
  "images/banners/core-hero-absolute-zero.webp",
  "images/banners/core-hero-argent-adept.webp",
  "images/banners/core-hero-bunker.webp",
  "images/banners/core-hero-captain-cosmic.webp",
  "images/banners/core-hero-fanatic.webp",
  "images/banners/core-hero-haka.webp",
  "images/banners/core-hero-legacy.webp",
  "images/banners/core-hero-ra.webp",
  "images/banners/core-hero-tachyon.webp",
  "images/banners/core-hero-tempest.webp",
  "images/banners/core-hero-unity.webp",
  "images/banners/core-hero-wraith.webp",
  "images/banners/core-villain-akash-bhuta.png",
  "images/banners/core-villain-baron-blade.png",
  "images/banners/core-villain-citizen-dawn.png",
  "images/banners/core-villain-grand-warlord-voss.png",
  "images/banners/core-villain-matriarch.png",
  "images/banners/core-villain-omnitron.png",
  "images/banners/disp-environment-aeternus.png",
  "images/banners/disp-environment-block.png",
  "images/banners/disp-environment-final-wasteland.png",
  "images/banners/disp-environment-silver-gulch-1883.png",
  "images/banners/disp-environment-tomb-of-anubis.png",
  "images/banners/disp-hero-chrono-ranger.png",
  "images/banners/disp-hero-darkstrife-painstake.png",
  "images/banners/disp-hero-knyfe.png",
  "images/banners/disp-hero-omnitron-x.png",
  "images/banners/disp-hero-parse.png",
  "images/banners/disp-hero-visionary.png",
  "images/banners/disp-villain-apostate.png",
  "images/banners/disp-villain-capitan.png",
  "images/banners/disp-villain-dreamer.png",
  "images/banners/disp-villain-ennead.png",
  "images/banners/disp-villain-grimm.png",
  "images/banners/disp-villain-iron-legacy.png",
  "images/banners/disp-villain-miss-information.png",
  "images/banners/disp-villain-necrosis.png",
  "images/banners/disp-villain-ruler-of-aeternus.png",
  "images/banners/rcr-environment-diamond-manor.png",
  "images/banners/rcr-environment-pike-industrial-complex.png",
  "images/banners/rcr-environment-realm-of-discord.png",
  "images/banners/rcr-environment-rook-city.png",
  "images/banners/rcr-environment-temple-of-zhu-long.png",
  "images/banners/rcr-hero-alpha.png",
  "images/banners/rcr-hero-expatriette.png",
  "images/banners/rcr-hero-harpy.png",
  "images/banners/rcr-hero-mister-fixer.png",
  "images/banners/rcr-hero-nightmist.png",
  "images/banners/rcr-hero-setback.png",
  "images/banners/rcr-villain-ambuscade.png",
  "images/banners/rcr-villain-apex.png",
  "images/banners/rcr-villain-fey-court-dagda.png",
  "images/banners/rcr-villain-fey-court-morrigan.png",
  "images/banners/rcr-villain-gloomweaver.png",
  "images/banners/rcr-villain-kismet.png",
  "images/banners/rcr-villain-organization.png",
  "images/banners/rcr-villain-plague-rat.png",
  "images/banners/rcr-villain-spite.png",
  "images/banners/rcr-villain-terrorform.png",
];

const getLogger = (evt) => {
  const getClient = clients.get(evt.clientId);

  return async (...args) => {
    const payload = JSON.stringify([`[${cacheName}]`, ...args]);

    getClient.then((client) =>
      client.postMessage({ payload, jsonEncoded: true }),
    );
  };
};

self.addEventListener("install", (e) => {
  const log = getLogger(e);
  log("Installed.");

  self.skipWaiting();

  e.waitUntil(
    (async () => {
      caches
        .keys()
        .then((keys) =>
          keys
            .filter((key) => key !== cacheName)
            .forEach((key) => caches.delete(key)),
        );

      const cache = await caches.open(cacheName);
      log("Caching content");
      await cache.addAll([...appFiles, ...banners]);
      log("Done with initial caching");
    })(),
  );
});

self.addEventListener("fetch", (e) => {
  const log = getLogger(e);
  e.respondWith(
    (async () => {
      const r = await caches.match(e.request);
      log(`Fetching resource: ${e.request.url}`);
      if (r) {
        return r;
      }
      try {
        const response = await fetch(e.request);
        const cache = await caches.open(cacheName);
        log(`Caching new resource: ${e.request.url}`);
        cache.put(e.request, response.clone());
        return response;
      } catch (ex) {
        log(`Problem fetching ${e.request.url}`, ex);
      }
    })(),
  );
});

self.addEventListener("activate", (e) => {
  const log = getLogger(e);
  log("Activated!");
  self.clients.claim();
});
