export const calderaDayEvents = [
  (player, biome) => ({
    text: `${player.name} bursts into flames after the rock they were standing on erupts.`,
    image: player.image,
    extraImage: "images/hazards/Eruption.png",
    killed: true
  }),
  (player, biome) => ({
    text: `${player.name} falls into the lava.`,
    image: player.image,
    extraImage: "images/hazards/Lava.png",
    killed: true
  }),
  (player, biome) => ({
    text: `${player.name} drops a scout effigy into the lava, losing it forever.`,
    image: player.image,
    extraImage: "images/items/Scout_Effigy.png",
    killed: false
  }),
  (player, biome) => ({
    text: `${player.name} finds a bird nest and keeps the big eggs to themselves.`,
    image: player.image,
    extraImage: "images/items/Big_Egg.png",
    killed: false
  }),
  (player, biome) => ({
    text: `${player.name} cracks a big egg, hatching an egg.`,
    image: player.image,
    extraImage: "images/items/Egg.png",
    killed: false
  }),
  (player, biome) => ({
    text: `${player.name} cracks a big egg, miraculously hatching a cooked bird.`,
    image: player.image,
    extraImage: "images/items/Cooked_Bird.png",
    killed: false
  }),
  (player, biome) => ({
    text: `${player.name} mitigates their heat with a sports drink.`,
    image: player.image,
    extraImage: "images/items/Sports_Drink.png",
    killed: false
  }),
  (player, biome) => ({
    text: `${player.name} falls off the side of the temple and hits their head on a rock when falling.`,
    image: player.image,
    extraImage: "images/hazards/Temple.png",
    killed: true
  }),
  (player, biome) => ({
    text: `${player.name} falls off a chain.`,
    image: player.image,
    extraImage: "images/hazards/Chain.png",
    killed: true
  }),
  (player, biome) => ({
    text: `${player.name} falls off a chain, and it sent into freefall after banging their head on a large rock.`,
    image: player.image,
    extraImage: "images/hazards/Chain.png",
    killed: true
  })
];

export const calderaNightEvents = [
  (player, biome) => ({
    text: `${player.name} bursts into flames after the rock they were standing on erupts.`,
    image: player.image,
    extraImage: "images/hazards/Eruption.png",
    killed: true
  }),
  (player, biome) => ({
    text: `${player.name} falls into the lava.`,
    image: player.image,
    extraImage: "images/hazards/Lava.png",
    killed: true
  }),
  (player, biome) => ({
    text: `${player.name} drops a scout effigy into the lava, losing it forever.`,
    image: player.image,
    extraImage: "images/items/Scout_Effigy.png",
    killed: false
  }),
  (player, biome) => ({
    text: `${player.name} finds a bird nest and keeps the big eggs to themselves.`,
    image: player.image,
    extraImage: "images/items/Big_Egg.png",
    killed: false
  }),
  (player, biome) => ({
    text: `${player.name} cracks a big egg, hatching an egg.`,
    image: player.image,
    extraImage: "images/items/Egg.png",
    killed: false
  }),
  (player, biome) => ({
    text: `${player.name} cracks a big egg, miraculously hatching a cooked bird.`,
    image: player.image,
    extraImage: "images/items/Cooked_Bird.png",
    killed: false
  }),
  (player, biome) => ({
    text: `${player.name} mitigates their heat with a sports drink.`,
    image: player.image,
    extraImage: "images/items/Sports_Drink.png",
    killed: false
  }),
  (player, biome) => ({
    text: `${player.name} falls off the side of the temple and hits their head on a rock when falling.`,
    image: player.image,
    extraImage: "images/hazards/Temple.png",
    killed: true
  }),
  (player, biome) => ({
    text: `${player.name} falls off a chain.`,
    image: player.image,
    extraImage: "images/hazards/Chain.png",
    killed: true
  }),
  (player, biome) => ({
    text: `${player.name} falls off a chain, and it sent into freefall after banging their head on a large rock.`,
    image: player.image,
    extraImage: "images/hazards/Chain.png",
    killed: true
  })
];
