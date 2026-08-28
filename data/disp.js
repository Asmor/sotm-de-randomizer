export const dispDecks = { heroes: {}, villains: {}, environments: {} };

dispDecks.heroes.chronoRanger = {
  name: "Chrono-Ranger",
  image: "images/banners/disp-hero-chrono-ranger.png",
  variants: [
    { set: "disp", name: "Base", base: true },
    { set: "disp", name: "First Appearance" },
    { set: "disp", name: "Tengu-Hunter" },
    { set: "disp", name: "Wind-Walker" },
  ],
};

dispDecks.heroes.darkstrifePainstake = {
  name: "Darkstrife & Painstake",
  image: "images/banners/disp-hero-darkstrife-painstake.png",
  variants: [
    { set: "disp", name: "Base", base: true },
    { set: "disp", name: "First Appearance" },
    { set: "disp", name: "Soulseeker" },
    { set: "disp", name: "The Prince & The Betrayer" },
  ],
};

dispDecks.heroes.knyfe = {
  name: "KNYFE",
  image: "images/banners/disp-hero-knyfe.png",
  variants: [
    { set: "disp", name: "Base", base: true },
    { set: "disp", name: "First Appearance" },
    { set: "disp", name: "Fighting Spirit" },
    { set: "disp", name: "Rogue Agent" },
  ],
};

dispDecks.heroes.omnitronX = {
  name: "Omnitron-X",
  image: "images/banners/disp-hero-omnitron-x.png",
  variants: [
    { set: "disp", name: "Base", base: true },
    { set: "disp", name: "First Appearance" },
    { set: "disp", name: "Omnii-Chan" },
    { set: "disp", name: "Omnitron U" },
  ],
};

dispDecks.heroes.parse = {
  name: "Parse",
  image: "images/banners/disp-hero-parse.png",
  variants: [
    { set: "disp", name: "Base", base: true },
    { set: "disp", name: "First Appearance" },
    { set: "disp", name: "Spacefarer" },
    { set: "disp", name: "Terminarch" },
  ],
};

dispDecks.heroes.theVisionary = {
  name: "The Visionary",
  image: "images/banners/disp-hero-visionary.png",
  variants: [
    { set: "disp", name: "Base", base: true },
    { set: "disp", name: "First Appearance" },
    { set: "disp", name: "Dark Visionary" },
    { set: "disp", name: "The Fishionary" },
  ],
};

dispDecks.villains.apostate = {
  name: "Apostate",
  image: "images/banners/disp-villain-apostate.png",
};

dispDecks.villains.laCapitan = {
  name: "La Capitan",
  image: "images/banners/disp-villain-capitan.png",
};

dispDecks.villains.theDreamer = {
  name: "The Dreamer",
  image: "images/banners/disp-villain-dreamer.png",
};

dispDecks.villains.theEnnead = {
  name: "The Ennead",
  image: "images/banners/disp-villain-ennead.png",
};

dispDecks.villains.grimm = {
  name: "Grimm",
  image: "images/banners/disp-villain-grimm.png",
};

dispDecks.villains.ironLegacy = {
  name: "Iron Legacy",
  image: "images/banners/disp-villain-iron-legacy.png",
};

dispDecks.villains.missInformation = {
  name: "Miss Information",
  image: "images/banners/disp-villain-miss-information.png",
};

dispDecks.villains.necrosis = {
  name: "Necrosis",
  image: "images/banners/disp-villain-necrosis.png",
};

dispDecks.villains.theRulerOfAeternus = {
  name: "The Ruler of Æternus",
  image: "images/banners/disp-villain-ruler-of-aeternus.png",
};

dispDecks.environments.aeternus = {
  name: "Æternus",
  image: "images/banners/disp-environment-aeternus.png",
};

dispDecks.environments.blockThe = {
  name: "Block, The",
  image: "images/banners/disp-environment-block.png",
};

dispDecks.environments.finalWastelandThe = {
  name: "Final Wasteland, The",
  image: "images/banners/disp-environment-final-wasteland.png",
};

dispDecks.environments.silverGulch1883 = {
  name: "Silver Gulch 1883",
  image: "images/banners/disp-environment-silver-gulch-1883.png",
};

dispDecks.environments.tombOfAnubis = {
  name: "Tomb of Anubis",
  image: "images/banners/disp-environment-tomb-of-anubis.png",
};

export default {
  name: "Disparation",
  id: "disp",
  heroes: [
    dispDecks.heroes.chronoRanger,
    dispDecks.heroes.darkstrifePainstake,
    dispDecks.heroes.knyfe,
    dispDecks.heroes.omnitronX,
    dispDecks.heroes.parse,
    dispDecks.heroes.theVisionary,
  ],
  villains: [
    dispDecks.villains.apostate,
    dispDecks.villains.laCapitan,
    dispDecks.villains.theDreamer,
    dispDecks.villains.theEnnead,
    dispDecks.villains.grimm,
    dispDecks.villains.ironLegacy,
    dispDecks.villains.missInformation,
    dispDecks.villains.necrosis,
    dispDecks.villains.theRulerOfAeternus,
  ],
  environments: [
    dispDecks.environments.aeternus,
    dispDecks.environments.blockThe,
    dispDecks.environments.finalWastelandThe,
    dispDecks.environments.silverGulch1883,
    dispDecks.environments.tombOfAnubis,
  ],
};
