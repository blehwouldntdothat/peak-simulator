export const kilnDayEvents = [
    (player, biome) => ({
    text: `${player.name} miscalculated a jump, sending them into freefall.`,
    image: player.image,
    extraImage: "images/items/KilnBridge.png",
    killed: true
  }),
    (player, biome) => ({
    text: `${player.name} falls into the lava.`,
    image: player.image,
    extraImage: "images/hazards/Lava.png",
    killed: true
  }),
    (player, biome) => ({
    text: `${player.name} reveals a chain launcher that they had saved in their backpack.`,
    image: player.image,
    extraImage: "images/items/Chain_Launcher.png",
    killed: false
  }),
    (player, biome) => ({
    text: `${player.name} burns alive on a hot rock.`,
    image: player.image,
    extraImage: "images/items/Hot_Rocks.png",
    killed: true
  }),
    (player, biome) => ({
    text: `${player.name} places a piton to help themselves and their fellow scouts.`,
    image: player.image,
    extraImage: "images/items/Piton.png",
    killed: false
  }),
    (player, biome) => ({
    text: `${player.name} falls to their death after not having enough stamina to reach a piton.`,
    image: player.image,
    extraImage: "images/items/Piton.png",
    killed: true
  }),
    (player, biome) => ({
    text: `The rising lava catches up to ${player.name}, burning them alive.`,
    image: player.image,
    extraImage: "images/items/Lava.png",
    killed: true
  })
];

export const kilnNightEvents = [
    (player, biome) => ({
    text: `${player.name} miscalculated a jump, sending them into freefall.`,
    image: player.image,
    extraImage: "images/items/KilnBridge.png",
    killed: true
  }),
    (player, biome) => ({
    text: `${player.name} falls into the lava.`,
    image: player.image,
    extraImage: "images/items/Lava.png",
    killed: true
  }),
    (player, biome) => ({
    text: `${player.name} reveals a chain launcher that they had saved in their backpack.`,
    image: player.image,
    extraImage: "images/items/Chain_Launcher.png",
    killed: false
  }),
    (player, biome) => ({
    text: `${player.name} burns alive on a hot rock.`,
    image: player.image,
    extraImage: "images/items/Hot_Rocks.png",
    killed: true
  }),
    (player, biome) => ({
    text: `${player.name} places a piton to help themselves and their fellow scouts.`,
    image: player.image,
    extraImage: "images/items/Piton.png",
    killed: false
  }),
    (player, biome) => ({
    text: `${player.name} falls to their death after not having enough stamina to reach a piton.`,
    image: player.image,
    extraImage: "images/items/Piton.png",
    killed: true
  }),
    (player, biome) => ({
    text: `The rising lava catches up to ${player.name}, burning them alive.`,
    image: player.image,
    extraImage: "images/items/Lava.png",
    killed: true
  })
];

