import content from "./content.js";

const generate = () => {
	const qty = document.querySelector("input[name='hero-count']:checked").value || 4;

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

const getImg = item => `<img src="${ item.image }" alt="${ item.name }">`;

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
