import { shoreDayEvents, shoreNightEvents } from "./shoreEvents.js";
import { tropicsDayEvents, tropicsNightEvents } from "./tropicsEvents.js";
import { rootsDayEvents, rootsNightEvents } from "./rootsEvents.js";
import { alpineDayEvents, alpineNightEvents } from "./alpineEvents.js";
import { mesaDayEvents, mesaNightEvents } from "./mesaEvents.js";
import { calderaDayEvents, calderaNightEvents } from "./calderaEvents.js";
import { kilnDayEvents, kilnNightEvents } from "./kilnEvents.js";

const globalDayEvents = [
  (player, biome) => ({
    text: `${player.name} finds a footprint from a scout of the past.`,
    image: player.image,
    extraImage: "images/badge/Footprint.png",
    killed: false,
    blockedBiomes: ["caldera", "kiln"]
  }),
  (player, biome) => ({
    text: `${player.name} strays too far away from their friends and has an unfortunate encounter with the Scoutmaster.`,
    image: player.image,
    extraImage: "images/hazards/Scoutmaster.png",
    killed: false,
    blockedBiomes: []
  }),
  (player, biome) => ({
    text: `${player.name} finds a First Aid Kit in a luggage and treats their wounds.`,
    image: player.image,
    extraImage: "images/items/First_Aid_Kit.png",
    killed: false,
    blockedBiomes: []
  }),
  (player, biome) => ({
    text: `${player.name} guides their allies with a lantern.`,
    image: player.image,
    extraImage: "images/items/Lantern.png",
    killed: false,
    blockedBiomes: []
  }),
  (player, biome) => ({
    text: `${player.name} eats a button shroom.`,
    image: player.image,
    extraImage: "images/items/Button_Shroom.png",
    killed: false,
    blockedBiomes: ["roots", "alpine", "caldera", "kiln"]
  }),
  (player, biome) => ({
    text: `${player.name} eats a bugle shroom.`,
    image: player.image,
    extraImage: "images/items/Bugle_Shroom.png",
    killed: false,
    blockedBiomes: ["roots", "alpine", "caldera", "kiln"]
  }),
  (player, biome) => ({
    text: `${player.name} eats a cluster shroom.`,
    image: player.image,
    extraImage: "images/items/Cluster_Shroom.png",
    killed: false,
    blockedBiomes: ["roots", "alpine", "caldera", "kiln"]
  }),
  (player, biome) => ({
    text: `${player.name} eats a chubby shroom.`,
    image: player.image,
    extraImage: "images/items/Chubby_Shroom.png",
    killed: false,
    blockedBiomes: ["roots", "alpine", "caldera", "kiln"]
  }),
  (player, biome) => ({
    text: `${player.name} eats a button shroom. It turns out to be poisonous and they die.`,
    image: player.image,
    extraImage: "images/items/Button_Shroom_(Poisonous).png",
    killed: true,
    blockedBiomes: ["roots", "alpine", "caldera", "kiln"]
  }),
  (player, biome) => ({
    text: `${player.name} eats a bugle shroom. It turns out to be poisonous and they die.`,
    image: player.image,
    extraImage: "images/items/Bugle_Shroom_(Poisonous).png",
    killed: true,
    blockedBiomes: ["roots", "alpine", "caldera", "kiln"]
  }),
  (player, biome) => ({
    text: `${player.name} eats a cluster shroom. It turns out to be poisonous and they die.`,
    image: player.image,
    extraImage: "images/items/Cluster_Shroom_(Poisonous).png",
    killed: true,
    blockedBiomes: ["roots", "alpine", "caldera", "kiln"]
  }),
  (player, biome) => ({
    text: `${player.name} finds a shelf fungus and uses it to make a long jump possible.`,
    image: player.image,
    extraImage: "images/items/Shelf_Fungus.png",
    killed: false,
    blockedBiomes: ["caldera", "kiln"]
  }),
  (player, biome) => ({
    text: `${player.name} passes out. Thankfully, their shelf fungus caught them, and they returned to consciousness eventually.`,
    image: player.image,
    extraImage: "images/items/Shelf_Fungus.png",
    killed: false,
    blockedBiomes: ["caldera", "kiln"]
  }),
  (player, biome) => ({
    text: `${player.name} finds a remedy fungus and uses it to heal themselves and their allies.`,
    image: player.image,
    extraImage: "images/items/Remedy_Fungus.png",
    killed: false,
    blockedBiomes: ["caldera", "kiln"]
  }),
  (player, biome) => ({
    text: `${player.name} finds a magic bean.`,
    image: player.image,
    extraImage: "images/items/Magic_Bean.png",
    killed: false,
    blockedBiomes: ["caldera", "kiln"]
  }),
  (player, biome) => ({
    text: `${player.name} uses a magic bean to travel upwards.`,
    image: player.image,
    extraImage: "images/items/Magic_Bean.png",
    killed: false,
    blockedBiomes: ["caldera"]
  }),
];

const globalNightEvents = [
  (player, biome) => ({
    text: `${player.name} finds a footprint from a scout of the past.`,
    image: player.image,
    extraImage: "images/badge/Footprint.png",
    killed: false,
    blockedBiomes: ["caldera", "kiln"]
  }),
  (player, biome) => ({
    text: `${player.name} strays too far away from their friends and has an unfortunate encounter with the Scoutmaster.`,
    image: player.image,
    extraImage: "images/hazards/Scoutmaster.png",
    killed: false,
    blockedBiomes: []
  }),
  (player, biome) => ({
    text: `${player.name} finds a First Aid Kit in a luggage and treats their wounds.`,
    image: player.image,
    extraImage: "images/items/First_Aid_Kit.png",
    killed: false,
    blockedBiomes: []
  }),
  (player, biome) => ({
    text: `${player.name} guides their allies with a lantern.`,
    image: player.image,
    extraImage: "images/items/Lantern.png",
    killed: false,
    blockedBiomes: []
  }),
  (player, biome) => ({
    text: `${player.name} eats a button shroom.`,
    image: player.image,
    extraImage: "images/items/Button_Shroom.png",
    killed: false,
    blockedBiomes: ["roots", "alpine", "caldera", "kiln"]
  }),
  (player, biome) => ({
    text: `${player.name} eats a bugle shroom.`,
    image: player.image,
    extraImage: "images/items/Bugle_Shroom.png",
    killed: false,
    blockedBiomes: ["roots", "alpine", "caldera", "kiln"]
  }),
  (player, biome) => ({
    text: `${player.name} eats a cluster shroom.`,
    image: player.image,
    extraImage: "images/items/Cluster_Shroom.png",
    killed: false,
    blockedBiomes: ["roots", "alpine", "caldera", "kiln"]
  }),
  (player, biome) => ({
    text: `${player.name} eats a chubby shroom.`,
    image: player.image,
    extraImage: "images/items/Chubby_Shroom.png",
    killed: false,
    blockedBiomes: ["roots", "alpine", "caldera", "kiln"]
  }),
  (player, biome) => ({
    text: `${player.name} eats a button shroom. It turns out to be poisonous and they die.`,
    image: player.image,
    extraImage: "images/items/Button_Shroom_(Poisonous).png",
    killed: true,
    blockedBiomes: ["roots", "alpine", "caldera", "kiln"]
  }),
  (player, biome) => ({
    text: `${player.name} eats a bugle shroom. It turns out to be poisonous and they die.`,
    image: player.image,
    extraImage: "images/items/Bugle_Shroom_(Poisonous).png",
    killed: true,
    blockedBiomes: ["roots", "alpine", "caldera", "kiln"]
  }),
  (player, biome) => ({
    text: `${player.name} eats a cluster shroom. It turns out to be poisonous and they die.`,
    image: player.image,
    extraImage: "images/items/Cluster_Shroom_(Poisonous).png",
    killed: true,
    blockedBiomes: ["roots", "alpine", "caldera", "kiln"]
  }),
  (player, biome) => ({
    text: `${player.name} finds a shelf fungus and uses it to make a long jump possible.`,
    image: player.image,
    extraImage: "images/items/Shelf_Fungus.png",
    killed: false,
    blockedBiomes: ["caldera", "kiln"]
  }),
  (player, biome) => ({
    text: `${player.name} passes out. Thankfully, their shelf fungus caught them, and they returned to consciousness eventually.`,
    image: player.image,
    extraImage: "images/items/Shelf_Fungus.png",
    killed: false,
    blockedBiomes: ["caldera", "kiln"]
  }),
  (player, biome) => ({
    text: `${player.name} finds a remedy fungus and uses it to heal themselves and their allies.`,
    image: player.image,
    extraImage: "images/items/Remedy_Fungus.png",
    killed: false,
    blockedBiomes: ["caldera", "kiln"]
  }),
  (player, biome) => ({
    text: `${player.name} finds a magic bean.`,
    image: player.image,
    extraImage: "images/items/Magic_Bean.png",
    killed: false,
    blockedBiomes: ["caldera", "kiln"]
  }),
  (player, biome) => ({
    text: `${player.name} uses a magic bean to travel upwards.`,
    image: player.image,
    extraImage: "images/items/Magic_Bean.png",
    killed: false,
    blockedBiomes: ["caldera"]
  }),
];

/* ---------------------------------------------------------
   BIOME EVENT ROUTER — now filters globals by blockedBiomes
--------------------------------------------------------- */

export function getBiomeEvents(biome, phase) {
  let biomeEvents = [];

  switch (biome) {
    case "shore": biomeEvents = phase === "day" ? shoreDayEvents : shoreNightEvents; break;
    case "tropics": biomeEvents = phase === "day" ? tropicsDayEvents : tropicsNightEvents; break;
    case "roots": biomeEvents = phase === "day" ? rootsDayEvents : rootsNightEvents; break;
    case "alpine": biomeEvents = phase === "day" ? alpineDayEvents : alpineNightEvents; break;
    case "mesa": biomeEvents = phase === "day" ? mesaDayEvents : mesaNightEvents; break;
    case "caldera": biomeEvents = phase === "day" ? calderaDayEvents : calderaNightEvents; break;
    case "kiln": biomeEvents = phase === "day" ? kilnDayEvents : kilnNightEvents; break;
  }

  const globalsRaw = phase === "day" ? globalDayEvents : globalNightEvents;

  const globals = globalsRaw.filter(ev => {
    return !ev(player, biome).blockedBiomes?.includes(biome);
  });

  return [...biomeEvents, ...globals];
}
