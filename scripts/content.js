import allSets from "./sets.js";
import { getKey, retrieve } from "./storage.js";

const heroes = allSets.flatMap(set => set.heroes);
const villains = allSets.flatMap(set => set.villains);
const environments = allSets.flatMap(set => set.environments);

// Preload all images so generation is snappy
[...heroes, ...villains, ...environments].forEach(o => {
	if ( !o.image ) {
		return;
	}
	const preload = new Image();
	preload.src = o.image;
});

const getContent = () => {
	const availableSets = allSets.filter(set => {
		const key = getKey(set);
		return retrieve(key) !== false;
	});

	return {
		heroes: availableSets.flatMap(set => set.heroes),
		villains: availableSets.flatMap(set => set.villains),
		environments: availableSets.flatMap(set => set.environments),
	};
};

export {
	getContent,
};
