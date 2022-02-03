import expansionCore from "../data/core.js";
import { generate, pick, display } from "./util.js";

[
	...expansionCore.heroes,
	...expansionCore.villains,
	...expansionCore.environments,
].forEach(o => {
	const preload = new Image();
	preload.src = o.image;
});

document.getElementById("generate-button").addEventListener("click", () => generate({
	heroes: expansionCore.heroes,
	villains: expansionCore.villains,
	environments: expansionCore.environments,
}));

generate({
	heroes: expansionCore.heroes,
	villains: expansionCore.villains,
	environments: expansionCore.environments,
});
