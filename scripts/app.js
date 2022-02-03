import expansionCore from "../data/core.js";
import { generate, pick, display } from "./util.js";

document.getElementById("generate-button").addEventListener("click", () => generate({
	heroes: expansionCore.heroes,
	villains: expansionCore.villains,
	environments: expansionCore.environments,
}));

generate({
	heroes: expansionCore.heroes,
	villains: expansionCore.villains,
	environments: expansionCore.environments,
})
