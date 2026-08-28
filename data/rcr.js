export default {
  name: "Rook City Renegades",
  id: "rcr",
  heroes: [
    {
      name: "Alpha",
      image: "images/banners/rcr-hero-alpha.png",
      variants: [
        { set: "rcr", name: "Base", base: true },
        { set: "rcr", name: "First Appearance" },
        { set: "rcr", name: "Reporter" },
        { set: "rcr", name: "Alpha 2000" },
      ],
    },
    {
      name: "Expatriette",
      image: "images/banners/rcr-hero-expatriette.png",
      variants: [
        { set: "rcr", name: "Base", base: true },
        { set: "rcr", name: "First Appearance" },
        { set: "rcr", name: "Dark Watch", team: true },
        { set: "rcr", name: "Eclipse" },
      ],
    },
    {
      name: "Harpy",
      image: "images/banners/rcr-hero-harpy.png",
      variants: [
        { set: "rcr", name: "Base", base: true },
        { set: "rcr", name: "First Appearance" },
        { set: "rcr", name: "Dark Watch", team: true },
        { set: "rcr", name: "Blood Raven" },
      ],
    },
    {
      name: "Mister Fixer",
      image: "images/banners/rcr-hero-mister-fixer.png",
      variants: [
        { set: "rcr", name: "Base", base: true },
        { set: "rcr", name: "First Appearance" },
        { set: "rcr", name: "Dark Watch", team: true },
        { set: "rcr", name: "Blackfist" },
      ],
    },
    {
      name: "Nightmist",
      image: "images/banners/rcr-hero-nightmist.png",
      variants: [
        { set: "rcr", name: "Base", base: true },
        { set: "rcr", name: "First Appearance" },
        { set: "rcr", name: "Dark Watch", team: true },
        { set: "rcr", name: "Mentor" },
      ],
    },
    {
      name: "Setback",
      image: "images/banners/rcr-hero-setback.png",
      variants: [
        { set: "rcr", name: "Base", base: true },
        { set: "rcr", name: "First Appearance" },
        { set: "rcr", name: "Dark Watch", team: true },
        { set: "rcr", name: "Fey-Cursed" },
      ],
    },
  ],
  villains: [
    { name: "Ambuscade", image: "images/banners/rcr-villain-ambuscade.png" },
    { name: "Apex", image: "images/banners/rcr-villain-apex.png" },
    {
      name: "The Fey Court",
      image: [
        "images/banners/rcr-villain-fey-court-dagda.png",
        "images/banners/rcr-villain-fey-court-morrigan.png",
      ],
    },
    {
      name: "Gloomweaver",
      image: "images/banners/rcr-villain-gloomweaver.png",
    },
    { name: "Kismet", image: "images/banners/rcr-villain-kismet.png" },
    {
      name: "The Organization",
      image: "images/banners/rcr-villain-organization.png",
    },
    { name: "Plague Rat", image: "images/banners/rcr-villain-plague-rat.png" },
    { name: "Spite", image: "images/banners/rcr-villain-spite.png" },
    { name: "Terrorform", image: "images/banners/rcr-villain-terrorform.png" },
  ],
  environments: [
    {
      name: "Diamond Manor",
      image: "images/banners/rcr-environment-diamond-manor.png",
    },
    {
      name: "Pike Industrial Complex",
      image: "images/banners/rcr-environment-pike-industrial-complex.png",
    },
    {
      name: "Realm of Discord",
      image: "images/banners/rcr-environment-realm-of-discord.png",
    },
    {
      name: "Rook City",
      image: "images/banners/rcr-environment-rook-city.png",
    },
    {
      name: "Temple of Zhu Long",
      image: "images/banners/rcr-environment-temple-of-zhu-long.png",
    },
  ],
};
