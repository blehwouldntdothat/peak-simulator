export const tropicsDayEvents = [
  (player) => ({
    text: `${player.name} hacks through dense tropical foliage, drenched in sweat.`,
    image: player.image,
    killed: false
  }),
  (player) => ({
    text: `${player.name} is swarmed by insects and loses focus on the path.`,
    image: player.image,
    killed: false
  })
];

export const tropicsNightEvents = [
  (player) => ({
    text: `${player.name} lies awake listening to the chorus of tropical creatures.`,
    image: player.image,
    killed: false
  }),
  (player) => ({
    text: `${player.name} nearly steps on something venomous in the dark.`,
    image: player.image,
    killed: false
  })
];
