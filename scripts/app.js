import { generate } from "./util.js";

const infoPanel = document.querySelector(".info");
document.getElementById("generate-button").addEventListener("click", generate);
infoPanel.querySelector(".info-target").addEventListener("click", () => {
	infoPanel.classList.add("info__expanded");
});
infoPanel.querySelector(".info-close").addEventListener("click", () => {
	infoPanel.classList.remove("info__expanded");
});


generate();
