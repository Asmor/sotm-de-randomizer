const generate = ({ heroes, villains, environments }) => {
	const qty = document.getElementById("hero-count").value || 4;
	const picked = {
		heroes: pick({ list: heroes, qty }),
		villain: pick({ list: villains })[0],
		environment: pick({ list: environments })[0],
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
		hero => `<li class="box" style="background-image: url('${ hero.image }')">${ hero.name }</li>`
	).join("");

	document.body.style.backgroundImage = `url('${ results.environment.image }')`;

	document.getElementById("results").innerHTML = `
		<div class="page">
			<ul class="panel panel__heroes">${ heroLines }</ul>
			<div class="vs">Vs.</div>
			<div class="panel panel__villain">
				 <div class="box" style="background-image: url('${ results.villain.image }')"><span>${ results.villain.name }</span></div>
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
