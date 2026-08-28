export const rcrDecks = {
  heroes: {
    alpha: {
      name: "Alpha",
      image: "images/banners/rcr-hero-alpha.png",
      variants: [
        { set: "rcr", name: "Base", base: true },
        { set: "rcr", name: "First Appearance" },
        { set: "rcr", name: "Reporter" },
        { set: "rcr", name: "Alpha 2000" },
      ],
    },
    expatriette: {
      name: "Expatriette",
      image: "images/banners/rcr-hero-expatriette.png",
      variants: [
        { set: "rcr", name: "Base", base: true },
        { set: "rcr", name: "First Appearance" },
        { set: "rcr", name: "Dark Watch", team: true },
        { set: "rcr", name: "Eclipse" },
      ],
    },
    harpy: {
      name: "Harpy",
      image: "images/banners/rcr-hero-harpy.png",
      variants: [
        { set: "rcr", name: "Base", base: true },
        { set: "rcr", name: "First Appearance" },
        { set: "rcr", name: "Dark Watch", team: true },
        { set: "rcr", name: "Blood Raven" },
      ],
    },
    misterFixer: {
      name: "Mister Fixer",
      image: "images/banners/rcr-hero-mister-fixer.png",
      variants: [
        { set: "rcr", name: "Base", base: true },
        { set: "rcr", name: "First Appearance" },
        { set: "rcr", name: "Dark Watch", team: true },
        { set: "rcr", name: "Blackfist" },
      ],
    },
    nightmist: {
      name: "Nightmist",
      image: "images/banners/rcr-hero-nightmist.png",
      variants: [
        { set: "rcr", name: "Base", base: true },
        { set: "rcr", name: "First Appearance" },
        { set: "rcr", name: "Dark Watch", team: true },
        { set: "rcr", name: "Mentor" },
      ],
    },
    setback: {
      name: "Setback",
      image: "images/banners/rcr-hero-setback.png",
      variants: [
        { set: "rcr", name: "Base", base: true },
        { set: "rcr", name: "First Appearance" },
        { set: "rcr", name: "Dark Watch", team: true },
        { set: "rcr", name: "Fey-Cursed" },
      ],
    },
  },
  villains: {
    ambuscade: {
      name: "Ambuscade",
      image: "images/banners/rcr-villain-ambuscade.png",
    },
    apex: {
      name: "Apex",
      image: "images/banners/rcr-villain-apex.png",
    },
    theFeyCourt: {
      name: "The Fey Court",
      image: [
        "images/banners/rcr-villain-fey-court-dagda.png",
        "images/banners/rcr-villain-fey-court-morrigan.png",
      ],
    },
    gloomweaver: {
      name: "Gloomweaver",
      image: "images/banners/rcr-villain-gloomweaver.png",
    },
    kismet: {
      name: "Kismet",
      image: "images/banners/rcr-villain-kismet.png",
    },
    theOrganization: {
      name: "The Organization",
      image: "images/banners/rcr-villain-organization.png",
    },
    plagueRat: {
      name: "Plague Rat",
      image: "images/banners/rcr-villain-plague-rat.png",
    },
    spite: {
      name: "Spite",
      image: "images/banners/rcr-villain-spite.png",
    },
    terrorform: {
      name: "Terrorform",
      image: "images/banners/rcr-villain-terrorform.png",
    },
  },
  environments: {
    diamondManor: {
      name: "Diamond Manor",
      image: "images/banners/rcr-environment-diamond-manor.png",
    },
    pikeIndustrialComplex: {
      name: "Pike Industrial Complex",
      image: "images/banners/rcr-environment-pike-industrial-complex.png",
    },
    realmOfDiscord: {
      name: "Realm of Discord",
      image: "images/banners/rcr-environment-realm-of-discord.png",
    },
    rookCity: {
      name: "Rook City",
      image: "images/banners/rcr-environment-rook-city.png",
    },
    templeOfZhuLong: {
      name: "Temple of Zhu Long",
      image: "images/banners/rcr-environment-temple-of-zhu-long.png",
    },
  },
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
