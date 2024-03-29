const cacheName = "2023-05-30 10:05:31";
const cacheFiles = [
	"data/core.js",
	"data/rcr.js",
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
	"images/banners/core-villain-akash-bhuta.webp",
	"images/banners/core-villain-baron-blade.webp",
	"images/banners/core-villain-citizen-dawn.webp",
	"images/banners/core-villain-grand-warlord-voss.webp",
	"images/banners/core-villain-matriarch.webp",
	"images/banners/core-villain-omnitron.webp",
	"images/banners/core-environment-freedom-tower.webp",
	"images/banners/core-environment-insula-primalis.webp",
	"images/banners/core-environment-magmaria.webp",
	"images/banners/core-environment-megalopolis.webp",
	"images/banners/core-environment-ruins-of-atlantis.webp",
	"images/banners/core-environment-wagner-mars-base.webp",
	"images/banners/rcr-hero-alpha.png",
	"images/banners/rcr-hero-expatriette.png",
	"images/banners/rcr-hero-harpy.png",
	"images/banners/rcr-hero-mister-fixer.png",
	"images/banners/rcr-hero-nightmist.png",
	"images/banners/rcr-hero-setback.png",
	"images/banners/rcr-environment-realm-of-discord.png",
	"images/banners/rcr-environment-temple-of-zhu-long.png",
	"images/banners/rcr-environment-diamond-manor.png",
	"images/banners/rcr-environment-pike-industrial-complex.png",
	"images/banners/rcr-environment-rook-city.png",
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

const getLogger = evt => {
	const getClient = clients.get(evt.clientId);

	return async (...args) => {
		const payload = JSON.stringify([`[${cacheName}]`, ...args]);

		getClient.then(client => client.postMessage({ payload, jsonEncoded: true }));
	};
}


self.addEventListener("install", e => {
	const log = getLogger(e);
	log("Installed.");

	self.skipWaiting();

	e.waitUntil((async () => {
		caches.keys().then(
			keys => keys.filter(key => key !== cacheName)
				.forEach(key => caches.delete(key))
		);

		const cache = await caches.open(cacheName);
		log("Caching content");
		await cache.addAll(cacheFiles);
		log("Done with initial caching");
	})());
});

self.addEventListener("fetch", e => {
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
		})()
	);
});

self.addEventListener("activate", () => {
	const log = getLogger(e);
	log("Activated!");
	self.clients.claim();
});
