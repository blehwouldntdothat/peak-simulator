export const shoreDayEvents = [

  // Safe events
  (player, biome) => ({
    text: `${player.name} gets hit in the back with a Flying Disc.`,
    image: player.image,
    extraImage: "images/shore/Flying_Disc.png",
    killed: false
  }),

  (player, biome) => ({
    text: `${player.name} explores the shore and begins collecting Conches.`,
    image: player.image,
    extraImage: "images/shore/Conch.png",
    killed: false
  }),

  (player, biome) => ({
    text: `${player.name} hugs Bing Bong out of fear.`,
    image: player.image,
    extraImage: "images/shore/Bing_Bong.png",
    killed: false
  }),

  // Mild danger
  (player, biome) => ({
    text: `${player.name} slips off the mountain after coming into contact with a jellyfish.`,
    image: player.image,
    extraImage: "images/shore/Jellyfish.png",
    killed: false
  }),

  // Lethal event
  (player, biome) => ({
    text: `${player.name} is poisoned by an urchin and tumbles off the mountain.`,
    image: player.image,
    extraImage: "images/shore/Urchin.png",
    killed: true
  })
];

export const shoreNightEvents = [

  // Safe events
  (player, biome) => ({
    text: `${player.name} gets hit in the back with a Flying Disc.`,
    image: player.image,
    extraImage: "images/shore/Flying_Disc.png",
    killed: false
  }),

  (player, biome) => ({
    text: `${player.name} explores the shore and begins collecting Conches.`,
    image: player.image,
    extraImage: "images/shore/Conch.png",
    killed: false
  }),

  (player, biome) => ({
    text: `${player.name} hugs Bing Bong out of fear.`,
    image: player.image,
    extraImage: "images/shore/Bing_Bong.png",
    killed: false
  }),

  // Mild danger
  (player, biome) => ({
    text: `${player.name} slips off the mountain after coming into contact with a jellyfish.`,
    image: player.image,
    extraImage: "images/shore/Jellyfish.png",
    killed: false
  }),

  // Lethal event
  (player, biome) => ({
    text: `${player.name} is poisoned by an urchin and tumbles off the mountain.`,
    image: player.image,
    extraImage: "images/shore/Urchin.png",
    killed: true
  })
];

