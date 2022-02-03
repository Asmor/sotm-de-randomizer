import expansionCore from "../data/core.js";

const heroes = [ ...expansionCore.heroes ];
const villains = [ ...expansionCore.villains ];
const environments = [ ...expansionCore.environments ];

// Preload all images so generation is snappy
[...heroes, ...villains, ...environments].forEach(o => {
	const preload = new Image();
	preload.src = o.image;
});

export default {
	heroes,
	villains,
	environments,
};
