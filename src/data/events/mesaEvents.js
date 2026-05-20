export const mesaDayEvents = [
  (player, biome) => ({
    text: `${player.name} uses a scout cannon to fly through the canyon with ease.`,
    image: player.image,
    extraImage: "images/items/Scout_Cannon.png",
    killed: false
  }),
  (player, biome) => ({
    text: `${player.name} uses a scout cannon to fly through the canyon with ease. They fail and fall to their death.`,
    image: player.image,
    extraImage: "images/items/Scout_Cannon.png",
    killed: true
  }),
  (player, biome) => ({
    text: `${player.name} discovers an explorer luggage, which turns out to be an antlion in disguise. They die in the hands of the antlion.`,
    image: player.image,
    extraImage: "images/hazards/Antlion.png",
    killed: true
  }),
  (player, biome) => ({
    text: `${player.name} discovers an explorer luggage, which turns out to be an antlion in disguise.`,
    image: player.image,
    extraImage: "images/hazards/Antlion.png",
    killed: false
  }),
  (player, biome) => ({
    text: `${player.name} gets caught in the path of the tornado, flying straight into a cacti, killing them on impact.`,
    image: player.image,
    extraImage: "images/hazards/Cacti.png",
    killed: true
  }),
  (player, biome) => ({
    text: `${player.name} keels over after over-exposure to the glaring hot sun.`,
    image: player.image,
    extraImage: "images/hazards/Sun.png",
    killed: true
  }),
  (player, biome) => ({
    text: `${player.name} complains about the glaring hot sun.`,
    image: player.image,
    extraImage: "images/hazards/Sun.png",
    killed: false
  }),
  (player, biome) => ({
    text: `${player.name} goes missing after getting caught in the path of the tornado. They are never seen again.`,
    image: player.image,
    extraImage: "images/hazards/Tornado.png",
    killed: true
  }),
  (player, biome) => ({
    text: `${player.name} gets thrown halfway across the plateau after getting hit by a tumbleweed.`,
    image: player.image,
    extraImage: "images/hazards/Tumbleweed.png",
    killed: false
  }),
  (player, biome) => ({
    text: `${player.name} looks straight into the sun with a pair of binoculars and goes blind.`,
    image: player.image,
    extraImage: "images/items/Binoculars.png",
    killed: false
  }),
  (player, biome) => ({
    text: `${player.name} saves their fall with a parasol. They eventually find their way back to the other scouts.`,
    image: player.image,
    extraImage: "images/items/Parasol.png",
    killed: false
  }),
  (player, biome) => ({
    text: `${player.name} saves their fall with a parasol. They are never seen again.`,
    image: player.image,
    extraImage: "images/items/Parasol.png",
    killed: true
  }),
  (player, biome) => ({
    text: `${player.name} relaxes in the oasis.`,
    image: player.image,
    extraImage: "images/hazards/Oasis.png",
    killed: false
  }),
  (player, biome) => ({
    text: `${player.name} trips, falling head-first into the tomb entrance.`,
    image: player.image,
    extraImage: "images/hazards/Tomb Entry.png",
    killed: true
  }),
  (player, biome) => ({
    text: `${player.name} gets lost in a mineshaft.`,
    image: player.image,
    extraImage: "images/hazards/Mineshaft.png",
    killed: false
  }),
  (player, biome) => ({
    text: `${player.name} discovers many luggages in a mineshaft, and lets their greed take over.`,
    image: player.image,
    extraImage: "images/hazards/Mineshaft.png",
    killed: false
  }),
  (player, biome) => ({
    text: `${player.name} begins losing their mind because of the heat to the point they begin seeing hallucinations of luggage.`,
    image: player.image,
    extraImage: "images/hazards/MirageLuggage.png",
    killed: false
  }),
  (player, biome) => ({
    text: `${player.name} begins losing their mind because of the heat to the point they begin seeing hallucinations of an oasis.`,
    image: player.image,
    extraImage: "images/hazards/Oasis.png",
    killed: false
  }),
  (player, biome) => ({
    text: `${player.name} climbs a pickaxe left by a previous scout.`,
    image: player.image,
    extraImage: "images/hazards/Pickaxe.png",
    killed: false
  }),
  (player, biome) => ({
    text: `${player.name} hangs onto a flimsy pickaxe for one second too many, falling to their death.`,
    image: player.image,
    extraImage: "images/hazards/Pickaxe.png",
    killed: true
  }),
  (player, biome) => ({
    text: `${player.name} succumbs to their injuries after being poisoned by a scorpion.`,
    image: player.image,
    extraImage: "images/items/Scorpion.png",
    killed: true
  }), 
  (player, biome) => ({
    text: `${player.name} blows up.`,
    image: player.image,
    extraImage: "images/items/Dynamite.png",
    killed: true
  }),
  (player, biome) => ({
    text: `${player.name} opens a luggage to see dynamite, blowing up and leaving all other survivors in a state of shock.`,
    image: player.image,
    extraImage: "images/items/Dynamite.png",
    killed: true
  }),
  (player, biome) => ({
    text: `${player.name} eats a coconut.`,
    image: player.image,
    extraImage: "images/items/Coconut.png",
    killed: false
  }),
  (player, biome) => ({
    text: `${player.name} eats a yellow winterberry that they found on top of a capybara.`,
    image: player.image,
    extraImage: "images/items/Yellow_Winterberry.png",
    killed: false
  }),
  (player, biome) => ({
    text: `${player.name} bites into a gold prickleberry, which magically heals their injuries, but piercing themselves with thorns in the process.`,
    image: player.image,
    extraImage: "images/items/Gold_Prickleberry.png",
    killed: false
  }),
  (player, biome) => ({
    text: `${player.name} bites into a red prickleberry, piercing themselves with thorns in the process.`,
    image: player.image,
    extraImage: "images/items/Red_Prickleberry.png",
    killed: false
  }),
  (player, biome) => ({
    text: `${player.name} hides in the shade, away from the blazing hot sun.`,
    image: player.image,
    extraImage: "images/hazards/Sun.png",
    killed: false
  }),
  (player, biome) => ({
    text: `${player.name} takes some aloe vera for later.`,
    image: player.image,
    extraImage: "images/items/Aloe_Vera.png",
    killed: false
  }),
  (player, biome) => ({
    text: `${player.name} traverses sideways using a shelf fungus.`,
    image: player.image,
    extraImage: "images/items/Shelf_Fungus.png",
    killed: false
  }),
  (player, biome) => ({
    text: `${player.name} traverses sideways using a shelf fungus.`,
    image: player.image,
    extraImage: "images/items/Shelf_Fungus.png",
    killed: false
  }),
  (player, biome) => ({
    text: `${player.name} gets a cacti stuck to their head.`,
    image: player.image,
    extraImage: "images/items/Cactus.png",
    killed: false
  }),
  (player, biome) => ({
    text: `${player.name} finds a parasol in luggage.`,
    image: player.image,
    extraImage: "images/items/Parasol.png",
    killed: false
  }),
  (player, biome) => ({
    text: `${player.name} finds a bottle of sunscreen, which they use to run across the plateau and not burn in the sun.`,
    image: player.image,
    extraImage: "images/items/Sunscreen.png",
    killed: false
  })
];

export const mesaNightEvents = [
  (player, biome) => ({
    text: `${player.name} uses a scout cannon to fly through the canyon with ease.`,
    image: player.image,
    extraImage: "images/items/Scout_Cannon.png",
    killed: false
  }),
  (player, biome) => ({
    text: `${player.name} uses a scout cannon to fly through the canyon with ease. They fail and fall to their death.`,
    image: player.image,
    extraImage: "images/items/Scout_Cannon.png",
    killed: true
  }),
  (player, biome) => ({
    text: `${player.name} discovers an explorer luggage, which turns out to be an antlion in disguise. They die in the hands of the antlion.`,
    image: player.image,
    extraImage: "images/hazards/Antlion.png",
    killed: true
  }),
  (player, biome) => ({
    text: `${player.name} discovers an explorer luggage, which turns out to be an antlion in disguise.`,
    image: player.image,
    extraImage: "images/hazards/Antlion.png",
    killed: false
  }),
  (player, biome) => ({
    text: `${player.name} gets caught in the path of the tornado, flying straight into a cacti, killing them on impact.`,
    image: player.image,
    extraImage: "images/hazards/Cacti.png",
    killed: true
  }),
  (player, biome) => ({
    text: `${player.name} keels over after over-exposure to the glaring hot sun.`,
    image: player.image,
    extraImage: "images/hazards/Sun.png",
    killed: true
  }),
  (player, biome) => ({
    text: `${player.name} complains about the glaring hot sun.`,
    image: player.image,
    extraImage: "images/hazards/Sun.png",
    killed: false
  }),
  (player, biome) => ({
    text: `${player.name} goes missing after getting caught in the path of the tornado. They are never seen again.`,
    image: player.image,
    extraImage: "images/hazards/Tornado.png",
    killed: true
  }),
  (player, biome) => ({
    text: `${player.name} gets thrown halfway across the plateau after getting hit by a tumbleweed.`,
    image: player.image,
    extraImage: "images/hazards/Tumbleweed.png",
    killed: false
  }),
  (player, biome) => ({
    text: `${player.name} looks straight into the sun with a pair of binoculars and goes blind.`,
    image: player.image,
    extraImage: "images/items/Binoculars.png",
    killed: false
  }),
  (player, biome) => ({
    text: `${player.name} saves their fall with a parasol. They eventually find their way back to the other scouts.`,
    image: player.image,
    extraImage: "images/items/Parasol.png",
    killed: false
  }),
  (player, biome) => ({
    text: `${player.name} saves their fall with a parasol. They are never seen again.`,
    image: player.image,
    extraImage: "images/items/Parasol.png",
    killed: true
  }),
  (player, biome) => ({
    text: `${player.name} relaxes in the oasis.`,
    image: player.image,
    extraImage: "images/hazards/Oasis.png",
    killed: false
  }),
  (player, biome) => ({
    text: `${player.name} trips, falling head-first into the tomb entrance.`,
    image: player.image,
    extraImage: "images/hazards/Tomb Entry.png",
    killed: true
  }),
  (player, biome) => ({
    text: `${player.name} gets lost in a mineshaft.`,
    image: player.image,
    extraImage: "images/hazards/Mineshaft.png",
    killed: false
  }),
  (player, biome) => ({
    text: `${player.name} discovers many luggages in a mineshaft, and lets their greed take over.`,
    image: player.image,
    extraImage: "images/hazards/Mineshaft.png",
    killed: false
  }),
  (player, biome) => ({
    text: `${player.name} begins losing their mind because of the heat to the point they begin seeing hallucinations of luggage.`,
    image: player.image,
    extraImage: "images/hazards/MirageLuggage.png",
    killed: false
  }),
  (player, biome) => ({
    text: `${player.name} begins losing their mind because of the heat to the point they begin seeing hallucinations of an oasis.`,
    image: player.image,
    extraImage: "images/hazards/Oasis.png",
    killed: false
  }),
  (player, biome) => ({
    text: `${player.name} climbs a pickaxe left by a previous scout.`,
    image: player.image,
    extraImage: "images/hazards/Pickaxe.png",
    killed: false
  }),
  (player, biome) => ({
    text: `${player.name} hangs onto a flimsy pickaxe for one second too many, falling to their death.`,
    image: player.image,
    extraImage: "images/hazards/Pickaxe.png",
    killed: true
  }),
  (player, biome) => ({
    text: `${player.name} succumbs to their injuries after being poisoned by a scorpion.`,
    image: player.image,
    extraImage: "images/items/Scorpion.png",
    killed: true
  }), 
  (player, biome) => ({
    text: `${player.name} blows up.`,
    image: player.image,
    extraImage: "images/items/Dynamite.png",
    killed: true
  }),
  (player, biome) => ({
    text: `${player.name} opens a luggage to see dynamite, blowing up and leaving all other survivors in a state of shock.`,
    image: player.image,
    extraImage: "images/items/Dynamite.png",
    killed: true
  }),
  (player, biome) => ({
    text: `${player.name} eats a coconut.`,
    image: player.image,
    extraImage: "images/items/Coconut.png",
    killed: false
  }),
  (player, biome) => ({
    text: `${player.name} eats a yellow winterberry that they found on top of a capybara.`,
    image: player.image,
    extraImage: "images/items/Yellow_Winterberry.png",
    killed: false
  }),
  (player, biome) => ({
    text: `${player.name} bites into a gold prickleberry, which magically heals their injuries, but piercing themselves with thorns in the process.`,
    image: player.image,
    extraImage: "images/items/Gold_Prickleberry.png",
    killed: false
  }),
  (player, biome) => ({
    text: `${player.name} bites into a red prickleberry, piercing themselves with thorns in the process.`,
    image: player.image,
    extraImage: "images/items/Red_Prickleberry.png",
    killed: false
  }),
  (player, biome) => ({
    text: `${player.name} hides in the shade, away from the blazing hot sun.`,
    image: player.image,
    extraImage: "images/hazards/Sun.png",
    killed: false
  }),
  (player, biome) => ({
    text: `${player.name} takes some aloe vera for later.`,
    image: player.image,
    extraImage: "images/items/Aloe_Vera.png",
    killed: false
  }),
  (player, biome) => ({
    text: `${player.name} traverses sideways using a shelf fungus.`,
    image: player.image,
    extraImage: "images/items/Shelf_Fungus.png",
    killed: false
  }),
  (player, biome) => ({
    text: `${player.name} traverses sideways using a shelf fungus.`,
    image: player.image,
    extraImage: "images/items/Shelf_Fungus.png",
    killed: false
  }),
  (player, biome) => ({
    text: `${player.name} gets a cacti stuck to their head.`,
    image: player.image,
    extraImage: "images/items/Cactus.png",
    killed: false
  }),
  (player, biome) => ({
    text: `${player.name} finds a parasol in luggage.`,
    image: player.image,
    extraImage: "images/items/Parasol.png",
    killed: false
  }),
  (player, biome) => ({
    text: `${player.name} finds a bottle of sunscreen, which they use to run across the plateau and not burn in the sun.`,
    image: player.image,
    extraImage: "images/items/Sunscreen.png",
    killed: false
  })
];
