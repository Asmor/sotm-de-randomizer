import { coreHeroes } from "./heroes.js";
import { coreVil } from "./villains.js";
import { coreEnv } from "./environments.js";

const decks = {
  heroes: coreHeroes,
  villains: coreVil,
  environments: coreEnv,
};

export default {
  name: "Core",
  id: "core",
  decks,
  heroes: [
    decks.heroes.absoluteZero,
    decks.heroes.argentAdept,
    decks.heroes.bunker,
    decks.heroes.captainCosmic,
    decks.heroes.fanatic,
    decks.heroes.haka,
    decks.heroes.legacy,
    decks.heroes.ra,
    decks.heroes.tachyon,
    decks.heroes.tempest,
    decks.heroes.unity,
    decks.heroes.wraith,
  ],
  villains: [
    decks.villains.akashBhuta,
    decks.villains.baronBlade,
    decks.villains.citizenDawn,
    decks.villains.grandWarlordVoss,
    decks.villains.matriarch,
    decks.villains.omnitron,
  ],
  environments: [
    decks.environments.freedomTower,
    decks.environments.insulaPrimalis,
    decks.environments.magmaria,
    decks.environments.megalopolis,
    decks.environments.ruinsOfAtlantis,
    decks.environments.wagnerMarsBase,
  ],
};
