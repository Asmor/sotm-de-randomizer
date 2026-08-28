import { dispHeroes } from "./heroes.js";
import { dispVil } from "./villains.js";
import { dispEnv } from "./environments.js";

const decks = {
  heroes: dispHeroes,
  villains: dispVil,
  environments: dispEnv,
};

export default {
  name: "Disparation",
  id: "disp",
  decks,
  heroes: [
    decks.heroes.chronoRanger,
    decks.heroes.darkstrifePainstake,
    decks.heroes.knyfe,
    decks.heroes.omnitronX,
    decks.heroes.parse,
    decks.heroes.theVisionary,
  ],
  villains: [
    decks.villains.apostate,
    decks.villains.laCapitan,
    decks.villains.theDreamer,
    decks.villains.theEnnead,
    decks.villains.grimm,
    decks.villains.ironLegacy,
    decks.villains.missInformation,
    decks.villains.necrosis,
    decks.villains.theRulerOfAeternus,
  ],
  environments: [
    decks.environments.aeternus,
    decks.environments.blockThe,
    decks.environments.finalWastelandThe,
    decks.environments.silverGulch1883,
    decks.environments.tombOfAnubis,
  ],
};
