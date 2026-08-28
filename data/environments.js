export const coreEnv = {};

coreEnv.freedomTower = {
  name: "Freedom Tower",
  image: "images/banners/core-environment-freedom-tower.webp",
};

coreEnv.insulaPrimalis = {
  name: "Insula Primalis",
  image: "images/banners/core-environment-insula-primalis.webp",
};

coreEnv.magmaria = {
  name: "Magmaria",
  image: "images/banners/core-environment-magmaria.webp",
};

coreEnv.megalopolis = {
  name: "Megalopolis",
  image: "images/banners/core-environment-megalopolis.webp",
};

coreEnv.ruinsOfAtlantis = {
  name: "Ruins of Atlantis",
  image: "images/banners/core-environment-ruins-of-atlantis.webp",
};

coreEnv.wagnerMarsBase = {
  name: "Wagner Mars Base",
  image: "images/banners/core-environment-wagner-mars-base.webp",
};

export const rcrEnv = {};

rcrEnv.diamondManor = {
  name: "Diamond Manor",
  image: "images/banners/rcr-environment-diamond-manor.png",
};

rcrEnv.pikeIndustrialComplex = {
  name: "Pike Industrial Complex",
  image: "images/banners/rcr-environment-pike-industrial-complex.png",
};

rcrEnv.realmOfDiscord = {
  name: "Realm of Discord",
  image: "images/banners/rcr-environment-realm-of-discord.png",
};

rcrEnv.rookCity = {
  name: "Rook City",
  image: "images/banners/rcr-environment-rook-city.png",
};

rcrEnv.templeOfZhuLong = {
  name: "Temple of Zhu Long",
  image: "images/banners/rcr-environment-temple-of-zhu-long.png",
};

export const dispEnv = {};

dispEnv.aeternus = {
  name: "Æternus",
  image: "images/banners/disp-environment-aeternus.png",
};

dispEnv.blockThe = {
  name: "Block, The",
  image: "images/banners/disp-environment-block.png",
};

dispEnv.finalWastelandThe = {
  name: "Final Wasteland, The",
  image: "images/banners/disp-environment-final-wasteland.png",
};

dispEnv.silverGulch1883 = {
  name: "Silver Gulch 1883",
  image: "images/banners/disp-environment-silver-gulch-1883.png",
};

dispEnv.tombOfAnubis = {
  name: "Tomb of Anubis",
  image: "images/banners/disp-environment-tomb-of-anubis.png",
};

[coreEnv, rcrEnv, dispEnv].forEach((set) =>
  Object.entries(set).forEach(([key, item]) => (item.id = `env.${key}`)),
);
