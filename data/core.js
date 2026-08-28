export const coreDecks = { heroes: {}, villains: {}, environments: {} };

coreDecks.heroes.absoluteZero = {
  name: "Absolute Zero",
  image: "images/banners/core-hero-absolute-zero.webp",
  variants: [
    { set: "core", name: "Base", base: true },
    { set: "core", name: "First Appearance" },
    { set: "disp", name: "Frostbite" },
    { set: "disp", name: "Freedom Six", team: true },
  ],
};

coreDecks.heroes.argentAdept = {
  name: "Argent Adept",
  image: "images/banners/core-hero-argent-adept.webp",
  variants: [
    { set: "core", name: "Base", base: true },
    { set: "core", name: "First Appearance" },
    { set: "disp", name: "Ashen Heir" },
  ],
};

coreDecks.heroes.bunker = {
  name: "Bunker",
  image: "images/banners/core-hero-bunker.webp",
  variants: [
    { set: "core", name: "Base", base: true },
    { set: "core", name: "First Appearance" },
    { set: "rcr", name: "Stealth Suit" },
    { set: "disp", name: "Freedom Six", team: true },
  ],
};

coreDecks.heroes.captainCosmic = {
  name: "Captain Cosmic",
  image: "images/banners/core-hero-captain-cosmic.webp",
  variants: [
    { set: "core", name: "Base", base: true },
    { set: "core", name: "First Appearance" },
    { set: "disp", name: "Inversiverse" },
  ],
};

coreDecks.heroes.fanatic = {
  name: "Fanatic",
  image: "images/banners/core-hero-fanatic.webp",
  variants: [
    { set: "core", name: "Base", base: true },
    { set: "core", name: "First Appearance" },
    { set: "rcr", name: "Haunted" },
    { set: "disp", name: "Redeemer" },
  ],
};

coreDecks.heroes.haka = {
  name: "Haka",
  image: "images/banners/core-hero-haka.webp",
  variants: [
    { set: "core", name: "Base", base: true },
    { set: "core", name: "First Appearance" },
    { set: "rcr", name: "Werewolf" },
    { set: "disp", name: "Eternal" },
  ],
};

coreDecks.heroes.legacy = {
  name: "Legacy",
  image: "images/banners/core-hero-legacy.webp",
  variants: [
    { set: "core", name: "Base", base: true },
    { set: "core", name: "First Appearance" },
    { set: "disp", name: "America's Boldest" },
  ],
};

coreDecks.heroes.ra = {
  name: "Ra",
  image: "images/banners/core-hero-ra.webp",
  variants: [
    { set: "core", name: "Base", base: true },
    { set: "core", name: "First Appearance" },
    { set: "rcr", name: "Backdraft" },
    { set: "disp", name: "Horus of Two Horizons" },
  ],
};

coreDecks.heroes.tachyon = {
  name: "Tachyon",
  image: "images/banners/core-hero-tachyon.webp",
  variants: [
    { set: "core", name: "Base", base: true },
    { set: "core", name: "First Appearance" },
    { set: "disp", name: "Extreme" },
    { set: "disp", name: "Freedom Six", team: true },
  ],
};

coreDecks.heroes.tempest = {
  name: "Tempest",
  image: "images/banners/core-hero-tempest.webp",
  variants: [
    { set: "core", name: "Base", base: true },
    { set: "core", name: "First Appearance" },
    { set: "disp", name: "Shockwave" },
    { set: "disp", name: "Freedom Six", team: true },
  ],
};

coreDecks.heroes.unity = {
  name: "Unity",
  image: "images/banners/core-hero-unity.webp",
  variants: [
    { set: "core", name: "Base", base: true },
    { set: "core", name: "First Appearance" },
    { set: "rcr", name: "Scavenger" },
    { set: "disp", name: "Freedom Six", team: true },
  ],
};

coreDecks.heroes.wraith = {
  name: "Wraith",
  image: "images/banners/core-hero-wraith.webp",
  variants: [
    { set: "core", name: "Base", base: true },
    { set: "core", name: "First Appearance" },
    { set: "rcr", name: "Detective" },
    { set: "disp", name: "Freedom Six", team: true },
  ],
};

coreDecks.villains.akashBhuta = {
  name: "Akash'Buta",
  image: "images/banners/core-villain-akash-bhuta.png",
};

coreDecks.villains.baronBlade = {
  name: "Baron Blade",
  image: "images/banners/core-villain-baron-blade.png",
};

coreDecks.villains.citizenDawn = {
  name: "Citizen Dawn",
  image: "images/banners/core-villain-citizen-dawn.png",
};

coreDecks.villains.grandWarlordVoss = {
  name: "Grand Warlord Voss",
  image: "images/banners/core-villain-grand-warlord-voss.png",
};

coreDecks.villains.matriarch = {
  name: "Matriarch",
  image: "images/banners/core-villain-matriarch.png",
};

coreDecks.villains.omnitron = {
  name: "Omnitron",
  image: "images/banners/core-villain-omnitron.png",
};

coreDecks.environments.freedomTower = {
  name: "Freedom Tower",
  image: "images/banners/core-environment-freedom-tower.webp",
};

coreDecks.environments.insulaPrimalis = {
  name: "Insula Primalis",
  image: "images/banners/core-environment-insula-primalis.webp",
};

coreDecks.environments.magmaria = {
  name: "Magmaria",
  image: "images/banners/core-environment-magmaria.webp",
};

coreDecks.environments.megalopolis = {
  name: "Megalopolis",
  image: "images/banners/core-environment-megalopolis.webp",
};

coreDecks.environments.ruinsOfAtlantis = {
  name: "Ruins of Atlantis",
  image: "images/banners/core-environment-ruins-of-atlantis.webp",
};

coreDecks.environments.wagnerMarsBase = {
  name: "Wagner Mars Base",
  image: "images/banners/core-environment-wagner-mars-base.webp",
};

export default {
  name: "Core",
  id: "core",
  heroes: [
    coreDecks.heroes.absoluteZero,
    coreDecks.heroes.argentAdept,
    coreDecks.heroes.bunker,
    coreDecks.heroes.captainCosmic,
    coreDecks.heroes.fanatic,
    coreDecks.heroes.haka,
    coreDecks.heroes.legacy,
    coreDecks.heroes.ra,
    coreDecks.heroes.tachyon,
    coreDecks.heroes.tempest,
    coreDecks.heroes.unity,
    coreDecks.heroes.wraith,
  ],
  villains: [
    coreDecks.villains.akashBhuta,
    coreDecks.villains.baronBlade,
    coreDecks.villains.citizenDawn,
    coreDecks.villains.grandWarlordVoss,
    coreDecks.villains.matriarch,
    coreDecks.villains.omnitron,
  ],
  environments: [
    coreDecks.environments.freedomTower,
    coreDecks.environments.insulaPrimalis,
    coreDecks.environments.magmaria,
    coreDecks.environments.megalopolis,
    coreDecks.environments.ruinsOfAtlantis,
    coreDecks.environments.wagnerMarsBase,
  ],
};
