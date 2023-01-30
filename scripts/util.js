import { getContent } from "./content.js";

const generate = () => {
	const qty = document.querySelector("input[name='hero-count']:checked").value || 4;

	const content = getContent();

	if (
		content.heroes.length === 0
		|| content.villains.length === 0
		|| content.environments.length === 0
	) {
		// alert("Not enough content, please enable more sets.");
		document.getElementById("results").innerHTML = `
			<div class="not-enough-content">
				Not enough content, please open settings and enable additional
				sets.
			</div>
		`;
		return;
	}

	const picked = {
		heroes: pick({ list: content.heroes, qty }),
		villain: pick({ list: content.villains })[0],
		environment: pick({ list: content.environments })[0],
		qty,
	};

	display(picked);
};

const pick = ({ list, qty }) => {
	const copy = [...list];
	const results = [];
	qty ||= 1;

	while ( copy.length && results.length < qty ) {
		const index = Math.floor(Math.random() * copy.length);
		results.push(copy.splice(index, 1)[0]);
	}

	return results.sort((a,b) => a.name.localeCompare(b.name));
};

const getImg = item => {
	if ( item.image ) {
		return `<img src="${item.image}" alt="${item.name}" title="${item.name }">`;
	}

	return `<span class="no-image">${item.name}</span>`;
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
	pick,
	display,
};
