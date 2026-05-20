import { shoreDayEvents, shoreNightEvents } from "./shoreEvents.js";
import { tropicsDayEvents, tropicsNightEvents } from "./tropicsEvents.js";
import { rootsDayEvents, rootsNightEvents } from "./rootsEvents.js";
import { alpineDayEvents, alpineNightEvents } from "./alpineEvents.js";
import { mesaDayEvents, mesaNightEvents } from "./mesaEvents.js";
import { calderaDayEvents, calderaNightEvents } from "./calderaEvents.js";
import { kilnDayEvents, kilnNightEvents } from "./kilnEvents.js";

/* ---------------------------------------------------------
   GLOBAL EVENTS — apply to ALL biomes
   These now support extraImage + optional lethal events
--------------------------------------------------------- */

const globalDayEvents = [
  (player, biome) => ({
    text: `${player.name} finds a footprint from a scout of the past.`,
    image: player.image,
    extraImage: "images/global/Footprint.png",
    killed: false
  }),

  (player, biome) => ({
    text: `${player.name} strays too far away from their friends and has an unfortunate encounter with the Scoutmaster.`,
    image: player.image,
    extraImage: "images/global/Scoutmaster.png",
    killed: true
  }),

  (player, biome) => ({
    text: `${player.name} finds a First Aid Kit in a luggage and treats their wounds.`,
    image: player.image,
    extraImage: "images/global/First_Aid_Kit.png",
    killed: false
  }),
];

const globalNightEvents = [
  (player, biome) => ({
    text: `${player.name} guides their allies with a lantern.`,
    image: player.image,
    extraImage: "images/global/Lantern.png",
    killed: false
  }),
];

/* ---------------------------------------------------------
   BIOME EVENT ROUTER
--------------------------------------------------------- */

export function getBiomeEvents(biome, phase) {
  let biomeEvents = [];

  switch (biome) {
    case "shore":
      biomeEvents = phase === "day" ? shoreDayEvents : shoreNightEvents;
      break;
    case "tropics":
      biomeEvents = phase === "day" ? tropicsDayEvents : tropicsNightEvents;
      break;
    case "roots":
      biomeEvents = phase === "day" ? rootsDayEvents : rootsNightEvents;
      break;
    case "alpine":
      biomeEvents = phase === "day" ? alpineDayEvents : alpineNightEvents;
      break;
    case "mesa":
      biomeEvents = phase === "day" ? mesaDayEvents : mesaNightEvents;
      break;
    case "caldera":
      biomeEvents = phase === "day" ? calderaDayEvents : calderaNightEvents;
      break;
    case "kiln":
      biomeEvents = phase === "day" ? kilnDayEvents : kilnNightEvents;
      break;
    default:
      biomeEvents = [];
  }

  const globals = phase === "day" ? globalDayEvents : globalNightEvents;

  return [...biomeEvents, ...globals];
}
