import { generate } from "./generator.js";
import configPanel from "./config.js";
import { thawed } from "./storage.js";

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

// Still figuring out how to get it to handle new versions gracefully, so for
// now this is disabled
// if ( "serviceWorker" in navigator ) {
// 	addEventListener("load", () => navigator?.serviceWorker.register("service-worker.js").then(
// 			registration => {
// 				registration.onupdatefound = () => {
// 					alert("Found an update!");
// 				}
// 			}
// 	));
// }

