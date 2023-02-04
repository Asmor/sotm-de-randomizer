import { generate } from "./generator.js";
import configPanel from "./config.js";
import { thawed } from "./storage.js";

// Still figuring out how to get it to handle new versions gracefully, so for
// now this is disabled
const ENABLE_OFFLINE = true;

const infoPanel = document.querySelector(".info");

document.getElementById("generate-button").addEventListener("click", generate);

infoPanel.querySelector(".info-target").addEventListener("click", () => {
	infoPanel.classList.add("info__expanded");
});

infoPanel.querySelector(".info-close").addEventListener("click", () => {
	infoPanel.classList.remove("info__expanded");
});

document.body.appendChild(configPanel);

thawed.then(generate);

if ( ENABLE_OFFLINE && "serviceWorker" in navigator ) {
	console.log("attempting to enable service worker")
	addEventListener("load", () => navigator?.serviceWorker.register("service-worker.js").then(
			registration => {
				registration.addEventListener("updatefound", (evt) => {
					console.log("Found an update to service worker!", evt);
					location.reload();
				});
			}
	));

	navigator.serviceWorker.addEventListener("message", evt => {
		let payload = evt.data.payload || evt.data;

		if ( evt.data.jsonEncoded ) {
			payload = JSON.parse(payload);
		}

		console.log("[Service worker]", ...payload);
	});
}
