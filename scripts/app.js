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
