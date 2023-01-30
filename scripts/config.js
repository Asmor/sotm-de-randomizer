import { store, retrieve, thawed, getKey } from "./storage.js";
import allSets from "./sets.js";

const BODY_EXPANDED_CLASS = "config-panel__expanded";

const configPanel = document.createElement("div");
configPanel.classList.add("config-panel");

const configHeader = document.createElement("div");
configHeader.classList.add("config-panel--header");
configHeader.innerHTML = "Settings";
configHeader.addEventListener("click", () => configPanel.classList.toggle(BODY_EXPANDED_CLASS));

const configBody = document.createElement("div");
configBody.classList.add("config-panel--body");

const configShroud = document.createElement("div");
configShroud.classList.add("config-panel--shroud");
configShroud.addEventListener("click", () => configPanel.classList.remove(BODY_EXPANDED_CLASS));

configPanel.appendChild(configHeader);
configPanel.appendChild(configBody);
configPanel.appendChild(configShroud);

const init = () => {
	configBody.innerHTML = `<h2>Sets</h2>`;
	allSets.map(getSetToggle)
		.forEach(toggle => configBody.appendChild(toggle));


};

const getSetToggle = set => {
	const key = getKey(set);

	const label = document.createElement("label");
	label.classList.add("config-panel--toggle-line");

	const checkbox = document.createElement("input");
	checkbox.setAttribute("type", "checkbox");
	if ( retrieve(key) !== false ) {
		checkbox.setAttribute("checked", "checked");
	}

	const name = document.createElement("span");
	name.innerHTML = set.name;
	name.dataset.id = set.id;

	checkbox.addEventListener("change", evt => store(key, evt.target.checked));

	label.appendChild(checkbox);
	label.appendChild(name);

	return label;
};

thawed.then(init);

export default configPanel;
