export const shoreDayEvents = [
  (player, biome) => ({
    text: `${player.name} gets hit in the back with a Flying Disc.`,
    image: player.image,
    extraImage: "images/items/Flying_Disc.png",
    killed: false
  }),

  (player, biome) => ({
    text: `${player.name} explores the shore and begins collecting Conches.`,
    image: player.image,
    extraImage: "images/items/Conch.png",
    killed: false
  }),

  (player, biome) => ({
    text: `${player.name} hugs Bing Bong out of fear.`,
    image: player.image,
    extraImage: "images/items/Bing_Bong.png",
    killed: false
  }),

  (player, biome) => ({
    text: `${player.name} slips off the mountain after coming into contact with a jellyfish.`,
    image: player.image,
    extraImage: "images/hazards/Jellyfish.png",
    killed: true
  }),

  (player, biome) => ({
    text: `${player.name} is poisoned by an urchin and tumbles off the mountain.`,
    image: player.image,
    extraImage: "images/hazards/Urchin.png",
    killed: true
  }),
    
  (player, biome) => ({
    text: `${player.name} keels over after eating one too many green crispberries.`,
    image: player.image,
    extraImage: "images/items/Green_Crispberry.png",
    killed: true
  })
];

export const shoreNightEvents = [
  (player, biome) => ({
    text: `${player.name} gets hit in the back with a Flying Disc.`,
    image: player.image,
    extraImage: "images/items/Flying_Disc.png",
    killed: false
  }),

  (player, biome) => ({
    text: `${player.name} hugs Bing Bong out of fear.`,
    image: player.image,
    extraImage: "images/items/Bing_Bong.png",
    killed: false
  }),

  (player, biome) => ({
    text: `${player.name} slips off the mountain after coming into contact with a jellyfish.`,
    image: player.image,
    extraImage: "images/hazards/Jellyfish.png",
    killed: false
  }),

  (player, biome) => ({
    text: `${player.name} is poisoned by an urchin and tumbles off the mountain.`,
    image: player.image,
    extraImage: "images/hazards/Urchin.png",
    killed: true
  }),
    
  (player, biome) => ({
    text: `${player.name} keels over after eating one too many green crispberries.`,
    image: player.image,
    extraImage: "images/hazards/Green_Crispberry.png",
    killed: true
  })
];
