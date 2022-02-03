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

const display = results => {
	const heroLines = results.heroes.map(
		hero => `<li class="box"><div class="art" style="background-image: url('${ hero.image }')"></div><span class="box-name">${ hero.name }</span></li>`
	).join("");

	document.body.style.backgroundImage = `url('${ results.environment.image }')`;

	document.getElementById("results").innerHTML = `
		<div class="page">
			<ul class="panel panel__heroes" count="${ results.qty }">${ heroLines }</ul>
			<div class="vs">Vs.</div>
			<div class="panel panel__villain">
				 <div class="box"><div class="art" style="background-image: url('${ results.villain.image }')"></div><span class="box-name">${ results.villain.name }</span></div>
			</div>
			<div class="panel panel__environment">At ${ results.environment.name }</div>
		</div>
	`;
};

export {
	generate,
	pick,
	display,
};
