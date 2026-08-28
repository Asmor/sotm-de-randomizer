import { coreHeroes, rcrHeroes, dispHeroes } from "./heroes.js";

export const coreVil = {};

coreVil.akashBhuta = {
  name: "Akash'Buta",
  nemesis: coreHeroes.argentAdept,
  image: "images/banners/core-villain-akash-bhuta.png",
};

coreVil.baronBlade = {
  name: "Baron Blade",
  nemesis: coreHeroes.legacy,
  image: "images/banners/core-villain-baron-blade.png",
};

coreVil.citizenDawn = {
  name: "Citizen Dawn",
  nemesis: rcrHeroes.expatriette,
  image: "images/banners/core-villain-citizen-dawn.png",
};

coreVil.grandWarlordVoss = {
  name: "Grand Warlord Voss",
  nemesis: coreHeroes.tempest,
  image: "images/banners/core-villain-grand-warlord-voss.png",
};

coreVil.matriarch = {
  name: "Matriarch",
  nemesis: coreHeroes.tachyon,
  image: "images/banners/core-villain-matriarch.png",
};

coreVil.omnitron = {
  name: "Omnitron",
  nemesis: dispHeroes.omnitronX,
  image: "images/banners/core-villain-omnitron.png",
};

export const rcrVil = {};

rcrVil.ambuscade = {
  name: "Ambuscade",
  nemesis: coreHeroes.haka,
  image: "images/banners/rcr-villain-ambuscade.png",
};

rcrVil.apex = {
  name: "Apex",
  nemesis: rcrHeroes.alpha,
  image: "images/banners/rcr-villain-apex.png",
};

rcrVil.theFeyCourt = {
  name: "The Fey Court",
  nemesis: rcrHeroes.harpy,
  image: [
    "images/banners/rcr-villain-fey-court-dagda.png",
    "images/banners/rcr-villain-fey-court-morrigan.png",
  ],
};

rcrVil.gloomweaver = {
  name: "Gloomweaver",
  nemesis: rcrHeroes.nightmist,
  image: "images/banners/rcr-villain-gloomweaver.png",
};

rcrVil.kismet = {
  name: "Kismet",
  nemesis: rcrHeroes.setback,
  image: "images/banners/rcr-villain-kismet.png",
};

rcrVil.theOrganization = {
  name: "The Organization",
  nemesis: rcrHeroes.misterFixer,
  image: "images/banners/rcr-villain-organization.png",
};

rcrVil.plagueRat = {
  name: "Plague Rat",
  nemesis: dispHeroes.chronoRanger,
  image: "images/banners/rcr-villain-plague-rat.png",
};

rcrVil.spite = {
  name: "Spite",
  nemesis: coreHeroes.wraith,
  image: "images/banners/rcr-villain-spite.png",
};

rcrVil.terrorform = {
  name: "Terrorform",
  nemesis: null, // akash'thriya?
  image: "images/banners/rcr-villain-terrorform.png",
};

export const dispVil = {};

dispVil.apostate = {
  name: "Apostate",
  nemesis: coreHeroes.fanatic,
  image: "images/banners/disp-villain-apostate.png",
};

dispVil.laCapitan = {
  name: "La Capitan",
  nemesis: null, // la commodora?
  image: "images/banners/disp-villain-capitan.png",
};

dispVil.theDreamer = {
  name: "The Dreamer",
  nemesis: null, // no nemesis
  image: "images/banners/disp-villain-dreamer.png",
};

dispVil.theEnnead = {
  name: "The Ennead",
  nemesis: coreHeroes.ra,
  image: "images/banners/disp-villain-ennead.png",
};

dispVil.grimm = {
  name: "Grimm",
  nemesis: null, // rambler?
  image: "images/banners/disp-villain-grimm.png",
};

dispVil.ironLegacy = {
  name: "Iron Legacy",
  nemesis: null, // beacon / youngest legacy?
  image: "images/banners/disp-villain-iron-legacy.png",
};

dispVil.missInformation = {
  name: "Miss Information",
  nemesis: dispHeroes.parse,
  image: "images/banners/disp-villain-miss-information.png",
};

dispVil.necrosis = {
  name: "Necrosis",
  nemesis: null, // the naturalist?
  image: "images/banners/disp-villain-necrosis.png",
};

dispVil.theRulerOfAeternus = {
  name: "The Ruler of Æternus",
  nemesis: dispHeroes.darkstrifePainstake,
  image: "images/banners/disp-villain-ruler-of-aeternus.png",
};

[coreVil, rcrVil, dispVil].forEach((set) =>
  Object.entries(set).forEach(([key, item]) => (item.id = `vil.${key}`)),
);
