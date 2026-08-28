export const rcrDecks = { heroes: {}, villains: {}, environments: {} };

rcrDecks.heroes.alpha = {
  name: "Alpha",
  image: "images/banners/rcr-hero-alpha.png",
  variants: [
    { set: "rcr", name: "Base", base: true },
    { set: "rcr", name: "First Appearance" },
    { set: "rcr", name: "Reporter" },
    { set: "rcr", name: "Alpha 2000" },
  ],
};

rcrDecks.heroes.expatriette = {
  name: "Expatriette",
  image: "images/banners/rcr-hero-expatriette.png",
  variants: [
    { set: "rcr", name: "Base", base: true },
    { set: "rcr", name: "First Appearance" },
    { set: "rcr", name: "Dark Watch", team: true },
    { set: "rcr", name: "Eclipse" },
  ],
};

rcrDecks.heroes.harpy = {
  name: "Harpy",
  image: "images/banners/rcr-hero-harpy.png",
  variants: [
    { set: "rcr", name: "Base", base: true },
    { set: "rcr", name: "First Appearance" },
    { set: "rcr", name: "Dark Watch", team: true },
    { set: "rcr", name: "Blood Raven" },
  ],
};

rcrDecks.heroes.misterFixer = {
  name: "Mister Fixer",
  image: "images/banners/rcr-hero-mister-fixer.png",
  variants: [
    { set: "rcr", name: "Base", base: true },
    { set: "rcr", name: "First Appearance" },
    { set: "rcr", name: "Dark Watch", team: true },
    { set: "rcr", name: "Blackfist" },
  ],
};

rcrDecks.heroes.nightmist = {
  name: "Nightmist",
  image: "images/banners/rcr-hero-nightmist.png",
  variants: [
    { set: "rcr", name: "Base", base: true },
    { set: "rcr", name: "First Appearance" },
    { set: "rcr", name: "Dark Watch", team: true },
    { set: "rcr", name: "Mentor" },
  ],
};

rcrDecks.heroes.setback = {
  name: "Setback",
  image: "images/banners/rcr-hero-setback.png",
  variants: [
    { set: "rcr", name: "Base", base: true },
    { set: "rcr", name: "First Appearance" },
    { set: "rcr", name: "Dark Watch", team: true },
    { set: "rcr", name: "Fey-Cursed" },
  ],
};

rcrDecks.villains.ambuscade = {
  name: "Ambuscade",
  image: "images/banners/rcr-villain-ambuscade.png",
};

rcrDecks.villains.apex = {
  name: "Apex",
  image: "images/banners/rcr-villain-apex.png",
};

rcrDecks.villains.theFeyCourt = {
  name: "The Fey Court",
  image: [
    "images/banners/rcr-villain-fey-court-dagda.png",
    "images/banners/rcr-villain-fey-court-morrigan.png",
  ],
};

rcrDecks.villains.gloomweaver = {
  name: "Gloomweaver",
  image: "images/banners/rcr-villain-gloomweaver.png",
};

rcrDecks.villains.kismet = {
  name: "Kismet",
  image: "images/banners/rcr-villain-kismet.png",
};

rcrDecks.villains.theOrganization = {
  name: "The Organization",
  image: "images/banners/rcr-villain-organization.png",
};

rcrDecks.villains.plagueRat = {
  name: "Plague Rat",
  image: "images/banners/rcr-villain-plague-rat.png",
};

rcrDecks.villains.spite = {
  name: "Spite",
  image: "images/banners/rcr-villain-spite.png",
};

rcrDecks.villains.terrorform = {
  name: "Terrorform",
  image: "images/banners/rcr-villain-terrorform.png",
};

rcrDecks.environments.diamondManor = {
  name: "Diamond Manor",
  image: "images/banners/rcr-environment-diamond-manor.png",
};

rcrDecks.environments.pikeIndustrialComplex = {
  name: "Pike Industrial Complex",
  image: "images/banners/rcr-environment-pike-industrial-complex.png",
};

rcrDecks.environments.realmOfDiscord = {
  name: "Realm of Discord",
  image: "images/banners/rcr-environment-realm-of-discord.png",
};

rcrDecks.environments.rookCity = {
  name: "Rook City",
  image: "images/banners/rcr-environment-rook-city.png",
};

rcrDecks.environments.templeOfZhuLong = {
  name: "Temple of Zhu Long",
  image: "images/banners/rcr-environment-temple-of-zhu-long.png",
};

export default {
  name: "Rook City Renegades",
  id: "rcr",
  heroes: [
    rcrDecks.heroes.alpha,
    rcrDecks.heroes.expatriette,
    rcrDecks.heroes.harpy,
    rcrDecks.heroes.misterFixer,
    rcrDecks.heroes.nightmist,
    rcrDecks.heroes.setback,
  ],
  villains: [
    rcrDecks.villains.ambuscade,
    rcrDecks.villains.apex,
    rcrDecks.villains.theFeyCourt,
    rcrDecks.villains.gloomweaver,
    rcrDecks.villains.kismet,
    rcrDecks.villains.theOrganization,
    rcrDecks.villains.plagueRat,
    rcrDecks.villains.spite,
    rcrDecks.villains.terrorform,
  ],
  environments: [
    rcrDecks.environments.diamondManor,
    rcrDecks.environments.pikeIndustrialComplex,
    rcrDecks.environments.realmOfDiscord,
    rcrDecks.environments.rookCity,
    rcrDecks.environments.templeOfZhuLong,
  ],
};
