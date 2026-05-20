export const alpineDayEvents = [
  (player, biome) => ({
    text: `${player.name} treats their wounds with a yellow winterberry.`,
    image: player.image,
    extraImage: "images/items/Yellow_Winterberry.png",
    killed: false
  }),

  (player, biome) => ({
    text: `${player.name} tumbles off the side of the mountain after coming onto contact with a napberry.`,
    image: player.image,
    extraImage: "images/items/Napberry.png",
    killed: true
  }),

  (player, biome) => ({
    text: `${player.name} passes out, but survives after saving their fall with a shelf fungus.`,
    image: player.image,
    extraImage: "images/items/Shelf_Fungus.png",
    killed: false
  }),

  (player, biome) => ({
    text: `${player.name} heals all remaining survivors with a remedy fungus.`,
    image: player.image,
    extraImage: "images/hazards/Remedy_Fungus.png",
    killed: true
  }),

  (player, biome) => ({
    text: `${player.name} from one side of a ditch to the other using a magic bean.`,
    image: player.image,
    extraImage: "images/hazards/Magic_Bean.png",
    killed: true
  }),
    
  (player, biome) => ({
    text: `${player.name} discovers a hot spring.`,
    image: player.image,
    extraImage: "images/hazards/Capybaras_Alpine.png",
    killed: false
  }),
    
  (player, biome) => ({
    text: `${player.name} becomes blinded by a flash bulb.`,
    image: player.image,
    extraImage: "images/hazards/Flash_Bulb.png",
    killed: false
  }),
    
  (player, biome) => ({
    text: `${player.name} becomes blinded by a flash bulb and walks off the edge of the mountain.`,
    image: player.image,
    extraImage: "images/hazards/Flash_Bulb.png",
    killed: true
  }),
    
  (player, biome) => ({
    text: `${player.name} gets sent flying by a geyser and falls to their death.`,
    image: player.image,
    extraImage: "images/hazards/Geyser.png",
    killed: true
  }),
    
  (player, biome) => ({
    text: `An icicle falls onto ${player.name}, killing them on impact.`,
    image: player.image,
    extraImage: "images/hazards/Icicle.png",
    killed: true
  }),
    
  (player, biome) => ({
    text: `${player.name} climbs a rusty piton and snaps it off, accidentally separating themselves from the rest of the group.`,
    image: player.image,
    extraImage: "images/hazards/Icicle.png",
    killed: false
  })
];

export const alpineNightEvents = [
  (player, biome) => ({
    text: `${player.name} treats their wounds with a yellow winterberry.`,
    image: player.image,
    extraImage: "images/items/Yellow_Winterberry.png",
    killed: false
  }),

  (player, biome) => ({
    text: `${player.name} tumbles off the side of the mountain after coming onto contact with a napberry.`,
    image: player.image,
    extraImage: "images/items/Napberry.png",
    killed: true
  }),

  (player, biome) => ({
    text: `${player.name} passes out, but survives after saving their fall with a shelf fungus.`,
    image: player.image,
    extraImage: "images/items/Shelf_Fungus.png",
    killed: false
  }),

  (player, biome) => ({
    text: `${player.name} heals all remaining survivors with a remedy fungus.`,
    image: player.image,
    extraImage: "images/hazards/Remedy_Fungus.png",
    killed: true
  }),

  (player, biome) => ({
    text: `${player.name} from one side of a ditch to the other using a magic bean.`,
    image: player.image,
    extraImage: "images/hazards/Magic_Bean.png",
    killed: true
  }),
    
  (player, biome) => ({
    text: `${player.name} discovers a hot spring.`,
    image: player.image,
    extraImage: "images/hazards/Capybaras_Alpine.png",
    killed: false
  }),
    
  (player, biome) => ({
    text: `${player.name} becomes blinded by a flash bulb.`,
    image: player.image,
    extraImage: "images/hazards/Flash_Bulb.png",
    killed: false
  }),
    
  (player, biome) => ({
    text: `${player.name} becomes blinded by a flash bulb and walks off the edge of the mountain.`,
    image: player.image,
    extraImage: "images/hazards/Flash_Bulb.png",
    killed: true
  }),
    
  (player, biome) => ({
    text: `${player.name} gets sent flying by a geyser and falls to their death.`,
    image: player.image,
    extraImage: "images/hazards/Geyser.png",
    killed: true
  }),
    
  (player, biome) => ({
    text: `An icicle falls onto ${player.name}, killing them on impact.`,
    image: player.image,
    extraImage: "images/hazards/Icicle.png",
    killed: true
  }),
    
  (player, biome) => ({
    text: `${player.name} climbs a rusty piton and snaps it off, accidentally separating themselves from the rest of the group.`,
    image: player.image,
    extraImage: "images/hazards/Icicle.png",
    killed: false
  })
];
