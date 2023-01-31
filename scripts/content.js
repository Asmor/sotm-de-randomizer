import { DEFAULT_ENABLE_SETS, DEFAULT_VARIANT_SETTING, VARIANT_SETTING_KEY } from "./const.js";
import allSets from "./sets.js";
import { getSetKey, retrieve } from "./storage.js";
import { copy } from "./util.js";

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
	const enabledSets = allSets.reduce((acc, set) => {
		acc[set.id] = retrieve(getSetKey(set), DEFAULT_ENABLE_SETS);
		return acc;
	}, {});
	const variantsEnabled = retrieve(VARIANT_SETTING_KEY, DEFAULT_VARIANT_SETTING);

	const availableSets = allSets.filter(set => enabledSets[set.id]);

	const availableContent = {
		heroes: copy(availableSets.flatMap(set => set.heroes)),
		villains: copy(availableSets.flatMap(set => set.villains)),
		environments: copy(availableSets.flatMap(set => set.environments)),
	};

	availableContent.heroes.forEach(hero => hero.variants = hero.variants.filter(
		variant => {
			if ( variant.base ) {
				return true;
			}

			return variantsEnabled && enabledSets[variant.set];
		}
	));

	return availableContent;
};

export {
	getContent,
};
