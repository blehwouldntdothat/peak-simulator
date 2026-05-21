export const rootsDayEvents = [
  (player, biome) => ({
    text: `${player.name} gets knocked off their feet by a beetle.`,
    image: player.image,
    extraImage: "images/hazards/Beetle.png",
    killed: false
  }),
  (player, biome) => ({
    text: `${player.name} gets knocked off their feet by a beetle, which sends them flying off the side of the mountain.`,
    image: player.image,
    extraImage: "images/hazards/Beetle.png",
    killed: true
  }),  
  (player, biome) => ({
    text: `${player.name} has fun bouncing on a bounce fungi.`,
    image: player.image,
    extraImage: "images/hazards/Bounce Fungi.png",
    killed: false
  }),
  (player, biome) => ({
    text: `${player.name} slips while jumping to a bounce fungi, which flings them off the fungi and off the edge of the mountain.`,
    image: player.image,
    extraImage: "images/hazards/Bounce Fungi.png",
    killed: true
  }),
  (player, biome) => ({
    text: `${player.name} crosses a bridge worriedly.`,
    image: player.image,
    extraImage: "images/hazards/Bridge Roots.png",
    killed: false
  }),
  (player, biome) => ({
    text: `${player.name} accidentally stnads on an explosive spore bomb, sending them flying.`,
    image: player.image,
    extraImage: "images/hazards/Explosive Spore Bomb.png",
    killed: true
  }),
  (player, biome) => ({
    text: `${player.name} gets wrapped up in a spider web.`,
    image: player.image,
    extraImage: "images/hazards/Spider.png",
    killed: false
  }),
  (player, biome) => ({
    text: `${player.name} gets wrapped up in a spider web. When eventually free, they freefall to their death.`,
    image: player.image,
    extraImage: "images/hazards/Spider.png",
    killed: true
  }),
  (player, biome) => ({
    text: `${player.name} stands on a spore bomb, which slowly poisons them.`,
    image: player.image,
    extraImage: "images/hazards/Spore Bomb.png",
    killed: true
  }),
  (player, biome) => ({
    text: `${player.name} gets caught in a spores cloud and keels over.`,
    image: player.image,
    extraImage: "images/hazards/SporesCloud.png",
    killed: true
  }),
  (player, biome) => ({
    text: `${player.name} climbs a redwood tree stump, only for it to be hollow. They fall flat on their face.`,
    image: player.image,
    extraImage: "images/hazards/Trunk.png",
    killed: false
  }),
  (player, biome) => ({
    text: `${player.name} anxiously climbs a vine, worried that it might snap.`,
    image: player.image,
    extraImage: "images/hazards/VinesRoots.png",
    killed: false
  }),
  (player, biome) => ({
    text: `While climbing a vine, a large gust of wind appears and blows ${player.name} into freefall.`,
    image: player.image,
    extraImage: "images/hazards/Wind.png",
    killed: true
  }),
  (player, biome) => ({
    text: `${player.name} almost gets blown off the side of the mountain from the wind.`,
    image: player.image,
    extraImage: "images/hazards/Wind.png",
    killed: false
  }),
  (player, biome) => ({
    text: `${player.name} gets blown off the side of the mountain from the wind.`,
    image: player.image,
    extraImage: "images/hazards/Wind.png",
    killed: true
  }),
  (player, biome) => ({
    text: `${player.name} rests in the water.`,
    image: player.image,
    extraImage: "images/hazards/Water.png",
    killed: false
  }),
  (player, biome) => ({
    text: `${player.name} accidentally walks into a waterfall, which knocks them down.`,
    image: player.image,
    extraImage: "images/hazards/Waterfall.png",
    killed: false
  }),
  (player, biome) => ({
    text: `${player.name} has a close encounter with a zombie of a previous scout. They manage to narrowly escape them.`,
    image: player.image,
    extraImage: "images/hazards/Zombie.png",
    killed: false
  }),
  (player, biome) => ({
    text: `${player.name} gets chased down by a zombie of a previous scout, but manages to dodge its lunge, sending it flying off the side of the mountain.`,
    image: player.image,
    extraImage: "images/hazards/Zombie.png",
    killed: false
  }),
  (player, biome) => ({
    text: `${player.name} is bitten by a zombie and is unable to cure themselves in time, succumbing to the spores.`,
    image: player.image,
    extraImage: "images/hazards/Zombie.png",
    killed: true
  }),
  (player, biome) => ({
    text: `${player.name} is bitten by a zombie, but manages to cure themselves in time.`,
    image: player.image,
    extraImage: "images/hazards/Zombie.png",
    killed: false
  }),
  (player, biome) => ({
    text: `${player.name} finds an antidote in luggage.`,
    image: player.image,
    extraImage: "images/items/Antidote.png",
    killed: false
  }),
  (player, biome) => ({
    text: `${player.name} finds a parasol in luggage.`,
    image: player.image,
    extraImage: "images/items/Parasol.png",
    killed: false
  }),
  (player, biome) => ({
    text: `${player.name} falls off the mountain. Thankfully, they were able to use a parasol to ensure a safe landing.`,
    image: player.image,
    extraImage: "images/items/Parasol.png",
    killed: false
  }),
  (player, biome) => ({
    text: `${player.name} watches a beetle roll, and subsequently fall off the cliffside.`,
    image: player.image,
    extraImage: "images/hazards/Beetle.png",
    killed: false
  }),
  (player, biome) => ({
    text: `${player.name} feels the forest closing in around them.`,
    image: player.image,
    extraImage: "images/hazard/BridgeRoots.png",
    killed: false
  }),
  (player, biome) => ({
    text: `${player.name} eats a red shroomberry. Will it kill them?`,
    image: player.image,
    extraImage: "images/items/Red_Shroomberry.png",
    killed: Math.random() < 0.1
  }),
  (player, biome) => ({
    text: `${player.name} eats a yellow shroomberry. Will it kill them?`,
    image: player.image,
    extraImage: "images/items/Yellow_Shroomberry.png",
    killed: Math.random() < 0.1
  }),
  (player, biome) => ({
    text: `${player.name} eats a green shroomberry. Will it kill them?`,
    image: player.image,
    extraImage: "images/items/Green_Shroomberry.png",
    killed: Math.random() < 0.1
  }),
  (player, biome) => ({
    text: `${player.name} eats a blue shroomberry. Will it kill them?`,
    image: player.image,
    extraImage: "images/items/Blue_Shroomberry.png",
    killed: Math.random() < 0.1
  }),
  (player, biome) => ({
    text: `${player.name} eats a purple shroomberry. Will it kill them?`,
    image: player.image,
    extraImage: "images/items/Purple_Shroomberry.png",
    killed: Math.random() < 0.1
  }),
  (player, biome) => ({
    text: `${player.name} eats a red shroomberry and farts.`,
    image: player.image,
    extraImage: "images/items/Red_Shroomberry.png",
    killed: false
  }),
  (player, biome) => ({
    text: `${player.name} discovers a medicinal root that they use to treat their injury.`,
    image: player.image,
    extraImage: "images/items/Medicinal_Root.png",
    killed: false
  }),
  (player, biome) => ({
    text: `${player.name} discovers a medicinal root that turns out to be a mandrake. They safely toss it away.`,
    image: player.image,
    extraImage: "images/items/Mandrake.png",
    killed: false
  }),
  (player, biome) => ({
    text: `${player.name} discovers a medicinal root that turns out to be a mandrake. They are unable to toss it away, and keel over.`,
    image: player.image,
    extraImage: "images/items/Mandrake.png",
    killed: true
  }),
  (player, biome) => ({
    text: `${player.name} happily eats a honeycomb that they found in a hollow redwood stump.`,
    image: player.image,
    extraImage: "images/items/Honeycomb.png",
    killed: false
  }),
];

export const rootsNightEvents = [
  (player, biome) => ({
    text: `${player.name} gets knocked off their feet by a beetle.`,
    image: player.image,
    extraImage: "images/hazards/Beetle.png",
    killed: false
  }),
  (player, biome) => ({
    text: `${player.name} gets knocked off their feet by a beetle, which sends them flying off the side of the mountain.`,
    image: player.image,
    extraImage: "images/hazards/Beetle.png",
    killed: true
  }),  
  (player, biome) => ({
    text: `${player.name} has fun bouncing on a bounce fungi.`,
    image: player.image,
    extraImage: "images/hazards/Bounce Fungi.png",
    killed: false
  }),
  (player, biome) => ({
    text: `${player.name} slips while jumping to a bounce fungi, which flings them off the fungi and off the edge of the mountain.`,
    image: player.image,
    extraImage: "images/hazards/Bounce Fungi.png",
    killed: true
  }),
  (player, biome) => ({
    text: `${player.name} crosses a bridge worriedly.`,
    image: player.image,
    extraImage: "images/hazards/Bridge Roots.png",
    killed: false
  }),
  (player, biome) => ({
    text: `${player.name} accidentally stnads on an explosive spore bomb, sending them flying.`,
    image: player.image,
    extraImage: "images/hazards/Explosive Spore Bomb.png",
    killed: true
  }),
  (player, biome) => ({
    text: `${player.name} gets wrapped up in a spider web.`,
    image: player.image,
    extraImage: "images/hazards/Spider.png",
    killed: false
  }),
  (player, biome) => ({
    text: `${player.name} gets wrapped up in a spider web. When eventually free, they freefall to their death.`,
    image: player.image,
    extraImage: "images/hazards/Spider.png",
    killed: true
  }),
  (player, biome) => ({
    text: `${player.name} stands on a spore bomb, which slowly poisons them.`,
    image: player.image,
    extraImage: "images/hazards/Spore Bomb.png",
    killed: true
  }),
  (player, biome) => ({
    text: `${player.name} gets caught in a spores cloud and keels over.`,
    image: player.image,
    extraImage: "images/hazards/SporesCloud.png",
    killed: true
  }),
  (player, biome) => ({
    text: `${player.name} climbs a redwood tree stump, only for it to be hollow. They fall flat on their face.`,
    image: player.image,
    extraImage: "images/hazards/Trunk.png",
    killed: false
  }),
  (player, biome) => ({
    text: `${player.name} anxiously climbs a vine, worried that it might snap.`,
    image: player.image,
    extraImage: "images/hazards/VinesRoots.png",
    killed: false
  }),
  (player, biome) => ({
    text: `While climbing a vine, a large gust of wind appears and blows ${player.name} into freefall.`,
    image: player.image,
    extraImage: "images/hazards/Wind.png",
    killed: true
  }),
  (player, biome) => ({
    text: `${player.name} almost gets blown off the side of the mountain from the wind.`,
    image: player.image,
    extraImage: "images/hazards/Wind.png",
    killed: false
  }),
  (player, biome) => ({
    text: `${player.name} gets blown off the side of the mountain from the wind.`,
    image: player.image,
    extraImage: "images/hazards/Wind.png",
    killed: true
  }),
  (player, biome) => ({
    text: `${player.name} rests in the water.`,
    image: player.image,
    extraImage: "images/hazards/Water.png",
    killed: false
  }),
  (player, biome) => ({
    text: `${player.name} accidentally walks into a waterfall, which knocks them down.`,
    image: player.image,
    extraImage: "images/hazards/Waterfall.png",
    killed: false
  }),
  (player, biome) => ({
    text: `${player.name} has a close encounter with a zombie of a previous scout. They manage to narrowly escape them.`,
    image: player.image,
    extraImage: "images/hazards/Zombie.png",
    killed: false
  }),
  (player, biome) => ({
    text: `${player.name} gets chased down by a zombie of a previous scout, but manages to dodge its lunge, sending it flying off the side of the mountain.`,
    image: player.image,
    extraImage: "images/hazards/Zombie.png",
    killed: false
  }),
  (player, biome) => ({
    text: `${player.name} is bitten by a zombie and is unable to cure themselves in time, succumbing to the spores.`,
    image: player.image,
    extraImage: "images/hazards/Zombie.png",
    killed: true
  }),
  (player, biome) => ({
    text: `${player.name} is bitten by a zombie, but manages to cure themselves in time.`,
    image: player.image,
    extraImage: "images/hazards/Zombie.png",
    killed: false
  }),
  (player, biome) => ({
    text: `${player.name} finds an antidote in luggage.`,
    image: player.image,
    extraImage: "images/items/Antidote.png",
    killed: false
  }),
  (player, biome) => ({
    text: `${player.name} finds a parasol in luggage.`,
    image: player.image,
    extraImage: "images/items/Parasol.png",
    killed: false
  }),
  (player, biome) => ({
    text: `${player.name} falls off the mountain. Thankfully, they were able to use a parasol to ensure a safe landing.`,
    image: player.image,
    extraImage: "images/items/Parasol.png",
    killed: false
  }),
  (player, biome) => ({
    text: `${player.name} watches a beetle roll, and subsequently fall off the cliffside.`,
    image: player.image,
    extraImage: "images/hazards/Beetle.png",
    killed: false
  }),
  (player, biome) => ({
    text: `${player.name} feels the forest closing in around them.`,
    image: player.image,
    extraImage: "images/hazard/BridgeRoots.png",
    killed: false
  }),
  (player, biome) => ({
    text: `${player.name} eats a red shroomberry. Will it kill them?`,
    image: player.image,
    extraImage: "images/items/Red_Shroomberry.png",
    killed: Math.random() < 0.1
  }),
  (player, biome) => ({
    text: `${player.name} eats a yellow shroomberry. Will it kill them?`,
    image: player.image,
    extraImage: "images/items/Yellow_Shroomberry.png",
    killed: Math.random() < 0.1
  }),
  (player, biome) => ({
    text: `${player.name} eats a green shroomberry. Will it kill them?`,
    image: player.image,
    extraImage: "images/items/Green_Shroomberry.png",
    killed: Math.random() < 0.1
  }),
  (player, biome) => ({
    text: `${player.name} eats a blue shroomberry. Will it kill them?`,
    image: player.image,
    extraImage: "images/items/Blue_Shroomberry.png",
    killed: Math.random() < 0.1
  }),
  (player, biome) => ({
    text: `${player.name} eats a purple shroomberry. Will it kill them?`,
    image: player.image,
    extraImage: "images/items/Purple_Shroomberry.png",
    killed: Math.random() < 0.1
  }),
  (player, biome) => ({
    text: `${player.name} eats a red shroomberry and farts.`,
    image: player.image,
    extraImage: "images/items/Red_Shroomberry.png",
    killed: false
  }),
  (player, biome) => ({
    text: `${player.name} discovers a medicinal root that they use to treat their injury.`,
    image: player.image,
    extraImage: "images/items/Medicinal_Root.png",
    killed: false
  }),
  (player, biome) => ({
    text: `${player.name} discovers a medicinal root that turns out to be a mandrake. They safely toss it away.`,
    image: player.image,
    extraImage: "images/items/Mandrake.png",
    killed: false
  }),
  (player, biome) => ({
    text: `${player.name} discovers a medicinal root that turns out to be a mandrake. They are unable to toss it away, and keel over.`,
    image: player.image,
    extraImage: "images/items/Mandrake.png",
    killed: true
  }),
  (player, biome) => ({
    text: `${player.name} happily eats a honeycomb that they found in a hollow redwood stump.`,
    image: player.image,
    extraImage: "images/items/Honeycomb.png",
    killed: false
  }),
];
