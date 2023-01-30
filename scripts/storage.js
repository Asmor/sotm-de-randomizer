const LOCAL_STORAGE_KEY = "sotm-de-config";

let memory = {};

let resolveThawed;
const thawed = new Promise(accept => resolveThawed = accept);

const freeze = () => {
	localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(memory));
};

const thaw = () => {
	memory = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) || "{}");
	resolveThawed();
};

const store = (key, val) => {
	memory[key] = val;
	freeze();
};

const retrieve = (key, _default) => memory[key] ?? _default;

addEventListener("load", thaw);

const getSetKey = set => `enable-set-${set.id ?? set}`;
const getOptionKey = option => `enable-option-${option}`;

export {
	store,
	retrieve,
	thawed,
	getSetKey,
	getOptionKey,
};
