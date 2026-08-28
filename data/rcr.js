import { rcrHeroes } from "./heroes.js";
import { rcrVil } from "./villains.js";
import { rcrEnv } from "./environments.js";

const decks = {
  heroes: rcrHeroes,
  villains: rcrVil,
  environments: rcrEnv,
};

export default {
  name: "Rook City Renegades",
  id: "rcr",
  decks,
  heroes: [
    decks.heroes.alpha,
    decks.heroes.expatriette,
    decks.heroes.harpy,
    decks.heroes.misterFixer,
    decks.heroes.nightmist,
    decks.heroes.setback,
  ],
  villains: [
    decks.villains.ambuscade,
    decks.villains.apex,
    decks.villains.theFeyCourt,
    decks.villains.gloomweaver,
    decks.villains.kismet,
    decks.villains.theOrganization,
    decks.villains.plagueRat,
    decks.villains.spite,
    decks.villains.terrorform,
  ],
  environments: [
    decks.environments.diamondManor,
    decks.environments.pikeIndustrialComplex,
    decks.environments.realmOfDiscord,
    decks.environments.rookCity,
    decks.environments.templeOfZhuLong,
  ],
};
