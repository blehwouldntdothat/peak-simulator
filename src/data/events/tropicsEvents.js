export const tropicsDayEvents = [
  (player, biome) => ({
    text: `${player.name} finds a poison antidote.`,
    image: player.image,
    extraImage: "images/items/Antidote.png",
    killed: false
  }),
  (player, biome) => ({
    text: `${player.name} finds a lantern in a lost suitcase.`,
    image: player.image,
    extraImage: "images/items/Lantern.png",
    killed: false
  }),
  (player, biome) => ({
    text: `${player.name} finds a chain launcher in lost luggage.`,
    image: player.image,
    extraImage: "images/items/Chain Launcher.png",
    killed: false
  }),
  (player, biome) => ({
    text: `${player.name} finds a portable stove in a heavy suitcase.`,
    image: player.image,
    extraImage: "images/items/Portable_Stove.png",
    killed: false
  }),
  (player, biome) => ({
    text: `${player.name} admires the fireflies.`,
    image: player.image,
    extraImage: "images/hazards/Fireflies.png",
    killed: false
  }),
  (player, biome) => ({
    text: `${player.name} climbs the giant ivy to get to a higher position on the mountain.`,
    image: player.image,
    extraImage: "images/hazards/Giant Ivy.png",
    killed: false
  }),
  (player, biome) => ({
    text: `${player.name} falls to their death while climbing giant ivy.`,
    image: player.image,
    extraImage: "images/hazards/Giant Ivy.png",
    killed: true
  }),
  (player, biome) => ({
    text: `${player.name} falls into a lava tube.`,
    image: player.image,
    extraImage: "images/hazards/Lava Tube.png",
    killed: true
  }),
  (player, biome) => ({
    text: `${player.name} traverses through a patch of poison ivy, which gives them a horrible feeling.`,
    image: player.image,
    extraImage: "images/hazards/Poison Ivy.png",
    killed: false
  }),
  (player, biome) => ({
    text: `${player.name} accidentally triggers a poison spore bomb, giving themselves deep poisoning.`,
    image: player.image,
    extraImage: "images/hazards/Poison Spore Bombs.png",
    killed: true
  }),
  (player, biome) => ({
    text: `${player.name} complains about the rain.`,
    image: player.image,
    extraImage: "images/hazards/Rain.png",
    killed: false
  }),
  (player, biome) => ({
    text: `A wave of rain appears while ${player.name} climbs, making their climbing infinitely more difficult.`,
    image: player.image,
    extraImage: "images/hazards/Rain.png",
    killed: false
  }),
  (player, biome) => ({
    text: `A wave of rain appears while ${player.name} climbs. They eventually run out of stamina, and hit the ground extremely hard on their way down.`,
    image: player.image,
    extraImage: "images/hazards/Rain.png",
    killed: true
  }),
  (player, biome) => ({
    text: `A wave of rain appears while ${player.name} climbs a vine, making them slip off.`,
    image: player.image,
    extraImage: "images/hazards/VinesTropics.png",
    killed: true
  }),
  (player, biome) => ({
    text: `${player.name} anxiously climbs a vine, praying that it doesn't snap.`,
    image: player.image,
    extraImage: "images/hazards/VinesTropics.png",
    killed: false
  }),
  (player, biome) => ({
    text: `${player.name} is knocked down by a waterfall.`,
    image: player.image,
    extraImage: "images/hazards/WaterfallTropics.png",
    killed: false
  }),
  (player, biome) => ({
    text: `${player.name} gets sent flying after accidentally stepping on an explosive spore bomb.`,
    image: player.image,
    extraImage: "images/hazards/Explosive Spore Bomb.png",
    killed: true
  }),
  (player, biome) => ({
    text: `After walking through monstera plants, a tick attaches itself to ${player.name}.`,
    image: player.image,
    extraImage: "images/items/Tick.png",
    killed: false
  }),
  (player, biome) => ({
    text: `${player.name} knocks down a beehive, and runs around in circles as they wait for the bees to leave them alone.`,
    image: player.image,
    extraImage: "images/items/Beehive.png",
    killed: false
  }),
  (player, biome) => ({
    text: `${player.name} heals their injuries with a medicinal root.`,
    image: player.image,
    extraImage: "images/items/Medicinal_Root.png",
    killed: false
  }),
  (player, biome) => ({
    text: `${player.name} heals their injuries with a red clusterberry.`,
    image: player.image,
    extraImage: "images/items/Red_Clusterberry.png",
    killed: false
  }),
  (player, biome) => ({
    text: `${player.name} feels energetic after consuming a yellow clusterberry.`,
    image: player.image,
    extraImage: "images/items/Yellow_Clusterberry.png",
    killed: false
  }),
  (player, biome) => ({
    text: `${player.name} keels over after eating one too many green crispberry.`,
    image: player.image,
    extraImage: "images/items/Green_Crispberry.png",
    killed: true
  }),
  (player, biome) => ({
    text: `${player.name} stashes a bunch of red crispberries.`,
    image: player.image,
    extraImage: "images/items/Red_Crispberry.png",
    killed: false
  }),
  (player, biome) => ({
    text: `${player.name} feels energised after eating yellow crispberries.`,
    image: player.image,
    extraImage: "images/items/Yellow_Crispberry.png",
    killed: false
  }),
  (player, biome) => ({
    text: `${player.name} eats a coconut.`,
    image: player.image,
    extraImage: "images/items/Coconut.png",
    killed: false
  }),
  (player, biome) => ({
    text: `${player.name} gets hit in the head by a flying coconut.`,
    image: player.image,
    extraImage: "images/items/Half-Coconut.png",
    killed: false
  }),
  (player, biome) => ({
    text: `${player.name} sets their mouth on fire after eating a scorchberry.`,
    image: player.image,
    extraImage: "images/items/Scorchberry.png",
    killed: false
  }),
  (player, biome) => ({
    text: `${player.name} eats a yellow kingberry, despite its poisonous properties. This proves to be a mistake when they kick the bucket.`,
    image: player.image,
    extraImage: "images/items/Yellow_Kingberry.png",
    killed: true
  }),
  (player, biome) => ({
    text: `${player.name} eats a green kingberry, despite its poisonous properties.`,
    image: player.image,
    extraImage: "images/items/Green_Kingberry.png",
    killed: false
  }),
  (player, biome) => ({
    text: `${player.name} eats a pink berrynana, despite its poisonous properties.`,
    image: player.image,
    extraImage: "images/items/Pink_Berrynana.png",
    killed: false
  }),
  (player, biome) => ({
    text: `${player.name} eats a yellow berrynana.`,
    image: player.image,
    extraImage: "images/items/Yellow_Berrynana.png",
    killed: false
  }),
  (player, biome) => ({
    text: `${player.name} eats a blue berrynana.`,
    image: player.image,
    extraImage: "images/items/Blue_Berrynana.png",
    killed: false
  }),
  (player, biome) => ({
    text: `${player.name} eats a brown berrynana.`,
    image: player.image,
    extraImage: "images/items/Brown_Berrynana.png",
    killed: false
  }),
  (player, biome) => ({
    text: `${player.name} eats a black clusterberry.`,
    image: player.image,
    extraImage: "images/items/Black_Clusterberry.png",
    killed: false
  }),
  (player, biome) => ({
    text: `${player.name} eats a purple kingberry.`,
    image: player.image,
    extraImage: "images/items/Purple_Kingberry.png",
    killed: false
  }),
];

export const tropicsNightEvents = [
  (player, biome) => ({
    text: `${player.name} finds a poison antidote.`,
    image: player.image,
    extraImage: "images/items/Antidote.png",
    killed: false
  }),
  (player, biome) => ({
    text: `${player.name} finds a lantern in a lost suitcase.`,
    image: player.image,
    extraImage: "images/items/Lantern.png",
    killed: false
  }),
  (player, biome) => ({
    text: `${player.name} finds a chain launcher in lost luggage.`,
    image: player.image,
    extraImage: "images/items/Chain Launcher.png",
    killed: false
  }),
  (player, biome) => ({
    text: `${player.name} finds a portable stove in a heavy suitcase.`,
    image: player.image,
    extraImage: "images/items/Portable_Stove.png",
    killed: false
  }),
  (player, biome) => ({
    text: `${player.name} admires the fireflies.`,
    image: player.image,
    extraImage: "images/hazards/Fireflies.png",
    killed: false
  }),
  (player, biome) => ({
    text: `${player.name} climbs the giant ivy to get to a higher position on the mountain.`,
    image: player.image,
    extraImage: "images/hazards/Giant Ivy.png",
    killed: false
  }),
  (player, biome) => ({
    text: `${player.name} falls to their death while climbing giant ivy.`,
    image: player.image,
    extraImage: "images/hazards/Giant Ivy.png",
    killed: true
  }),
  (player, biome) => ({
    text: `${player.name} falls into a lava tube.`,
    image: player.image,
    extraImage: "images/hazards/Lava Tube.png",
    killed: true
  }),
  (player, biome) => ({
    text: `${player.name} traverses through a patch of poison ivy, which gives them a horrible feeling.`,
    image: player.image,
    extraImage: "images/hazards/Poison Ivy.png",
    killed: false
  }),
  (player, biome) => ({
    text: `${player.name} accidentally triggers a poison spore bomb, giving themselves deep poisoning.`,
    image: player.image,
    extraImage: "images/hazards/Poison Spore Bombs.png",
    killed: true
  }),
  (player, biome) => ({
    text: `${player.name} complains about the rain.`,
    image: player.image,
    extraImage: "images/hazards/Rain.png",
    killed: false
  }),
  (player, biome) => ({
    text: `A wave of rain appears while ${player.name} climbs, making their climbing infinitely more difficult.`,
    image: player.image,
    extraImage: "images/hazards/Rain.png",
    killed: false
  }),
  (player, biome) => ({
    text: `A wave of rain appears while ${player.name} climbs. They eventually run out of stamina, and hit the ground extremely hard on their way down.`,
    image: player.image,
    extraImage: "images/hazards/Rain.png",
    killed: true
  }),
  (player, biome) => ({
    text: `A wave of rain appears while ${player.name} climbs a vine, making them slip off.`,
    image: player.image,
    extraImage: "images/hazards/VinesTropics.png",
    killed: true
  }),
  (player, biome) => ({
    text: `${player.name} anxiously climbs a vine, praying that it doesn't snap.`,
    image: player.image,
    extraImage: "images/hazards/VinesTropics.png",
    killed: false
  }),
  (player, biome) => ({
    text: `${player.name} is knocked down by a waterfall.`,
    image: player.image,
    extraImage: "images/hazards/WaterfallTropics.png",
    killed: false
  }),
  (player, biome) => ({
    text: `${player.name} gets sent flying after accidentally stepping on an explosive spore bomb.`,
    image: player.image,
    extraImage: "images/hazards/Explosive Spore Bomb.png",
    killed: true
  }),
  (player, biome) => ({
    text: `After walking through monstera plants, a tick attaches itself to ${player.name}.`,
    image: player.image,
    extraImage: "images/items/Tick.png",
    killed: false
  }),
  (player, biome) => ({
    text: `${player.name} knocks down a beehive, and runs around in circles as they wait for the bees to leave them alone.`,
    image: player.image,
    extraImage: "images/items/Beehive.png",
    killed: false
  }),
  (player, biome) => ({
    text: `${player.name} heals their injuries with a medicinal root.`,
    image: player.image,
    extraImage: "images/items/Medicinal_Root.png",
    killed: false
  }),
  (player, biome) => ({
    text: `${player.name} heals their injuries with a red clusterberry.`,
    image: player.image,
    extraImage: "images/items/Red_Clusterberry.png",
    killed: false
  }),
  (player, biome) => ({
    text: `${player.name} feels energetic after consuming a yellow clusterberry.`,
    image: player.image,
    extraImage: "images/items/Yellow_Clusterberry.png",
    killed: false
  }),
  (player, biome) => ({
    text: `${player.name} keels over after eating one too many green crispberry.`,
    image: player.image,
    extraImage: "images/items/Green_Crispberry.png",
    killed: true
  }),
  (player, biome) => ({
    text: `${player.name} stashes a bunch of red crispberries.`,
    image: player.image,
    extraImage: "images/items/Red_Crispberry.png",
    killed: false
  }),
  (player, biome) => ({
    text: `${player.name} feels energised after eating yellow crispberries.`,
    image: player.image,
    extraImage: "images/items/Yellow_Crispberry.png",
    killed: false
  }),
  (player, biome) => ({
    text: `${player.name} eats a coconut.`,
    image: player.image,
    extraImage: "images/items/Coconut.png",
    killed: false
  }),
  (player, biome) => ({
    text: `${player.name} gets hit in the head by a flying coconut.`,
    image: player.image,
    extraImage: "images/items/Half-Coconut.png",
    killed: false
  }),
  (player, biome) => ({
    text: `${player.name} sets their mouth on fire after eating a scorchberry.`,
    image: player.image,
    extraImage: "images/items/Scorchberry.png",
    killed: false
  }),
  (player, biome) => ({
    text: `${player.name} eats a yellow kingberry, despite its poisonous properties. This proves to be a mistake when they kick the bucket.`,
    image: player.image,
    extraImage: "images/items/Yellow_Kingberry.png",
    killed: true
  }),
  (player, biome) => ({
    text: `${player.name} eats a green kingberry, despite its poisonous properties.`,
    image: player.image,
    extraImage: "images/items/Green_Kingberry.png",
    killed: false
  }),
  (player, biome) => ({
    text: `${player.name} eats a pink berrynana, despite its poisonous properties.`,
    image: player.image,
    extraImage: "images/items/Pink_Berrynana.png",
    killed: false
  }),
  (player, biome) => ({
    text: `${player.name} eats a yellow berrynana.`,
    image: player.image,
    extraImage: "images/items/Yellow_Berrynana.png",
    killed: false
  }),
  (player, biome) => ({
    text: `${player.name} eats a blue berrynana.`,
    image: player.image,
    extraImage: "images/items/Blue_Berrynana.png",
    killed: false
  }),
  (player, biome) => ({
    text: `${player.name} eats a brown berrynana.`,
    image: player.image,
    extraImage: "images/items/Brown_Berrynana.png",
    killed: false
  }),
  (player, biome) => ({
    text: `${player.name} eats a black clusterberry.`,
    image: player.image,
    extraImage: "images/items/Black_Clusterberry.png",
    killed: false
  }),
  (player, biome) => ({
    text: `${player.name} eats a purple kingberry.`,
    image: player.image,
    extraImage: "images/items/Purple_Kingberry.png",
    killed: false
  }),
];
