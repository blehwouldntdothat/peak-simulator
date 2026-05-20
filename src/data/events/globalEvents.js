import { shoreDayEvents, shoreNightEvents } from "./shoreEvents.js";
import { tropicsDayEvents, tropicsNightEvents } from "./tropicsEvents.js";
import { rootsDayEvents, rootsNightEvents } from "./rootsEvents.js";
import { alpineDayEvents, alpineNightEvents } from "./alpineEvents.js";
import { mesaDayEvents, mesaNightEvents } from "./mesaEvents.js";
import { calderaDayEvents, calderaNightEvents } from "./calderaEvents.js";
import { kilnDayEvents, kilnNightEvents } from "./kilnEvents.js";

const globalDayEvents = [
  (player, biome) => ({
    text: `${player.name} takes a moment to admire the view in the ${biome}.`,
    image: player.image,
    killed: false
  }),
  (player, biome) => ({
    text: `${player.name} quietly conserves energy, saying little.`,
    image: player.image,
    killed: false
  })
];

const globalNightEvents = [
  (player, biome) => ({
    text: `${player.name} struggles to sleep in the ${biome} night.`,
    image: player.image,
    killed: false
  }),
  (player, biome) => ({
    text: `${player.name} stares into the darkness, thinking about the climb.`,
    image: player.image,
    killed: false
  })
];

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

