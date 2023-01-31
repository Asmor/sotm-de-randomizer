import { getContent } from "./content.js";

const generate = () => {
	const qty = document.querySelector("input[name='hero-count']:checked").value || 4;

	const content = getContent();

	if (
		content.heroes.length === 0
		|| content.villains.length === 0
		|| content.environments.length === 0
	) {
		document.getElementById("results").innerHTML = `
			<div class="not-enough-content">
				Not enough content, please open settings and enable additional
				sets.
			</div>
		`;
		return;
	}

	const picked = {
		heroes: pickQty({ list: content.heroes, qty }),
		villain: pickOne(content.villains),
		environment: pickOne(content.environments),
		qty,
	};

	display(picked);
};

const pickQty = ({ list, qty }) => {
	const copy = [...list];
	const results = [];
	qty ||= 1;

	while ( copy.length && results.length < qty ) {
		const index = Math.floor(Math.random() * copy.length);
		results.push(copy.splice(index, 1)[0]);
	}

	return results.sort((a,b) => a.name.localeCompare(b.name));
};

const pickOne = list => pickQty({ list, qty: 1 })[0];

const getImg = item => {
	let image = `<span class="no-image">${item.name}</span>`;

	if ( item.image ) {
		image = `<img
			class="hero-panel--image"
			src="${item.image}"
			alt="${item.name}"
			title="${item.name }"
		>`;
	}

	let variant = "";

	if ( item.variants ) {
		const chosenVariant = pickOne(item.variants);
		if ( !chosenVariant.base ) {
			variant = `
				<span class="hero-panel--variant">
					Variant: ${chosenVariant.name }
				</span>
			`;
		}
	}

	return `<div class="hero-panel">
		${image}
		${variant}
	</div>`;
};

const display = results => {
	const heroLines = results.heroes.map(getImg).join("");

	document.getElementById("results").innerHTML = `
		<div class="page">
			<div class="panel panel__heroes">
				<div class="section section__heroes">${ heroLines }</div>
			</div>
			<div class="panel panel__other">
				<div class="section section__villain">${ getImg(results.villain) }</div>
				<div class="section section__environment">${ getImg(results.environment) }</div>
			</div>
		</div>
	`;
};

export {
	generate,
};
