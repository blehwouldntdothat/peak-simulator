export const shoreDayEvents = [
  (player) => ({
    text: `${player.name} tests their footing on the wet rocks at the shore.`,
    image: player.image,
    killed: false
  }),
  (player) => ({
    text: `${player.name} slips on seaweed and nearly falls into the water.`,
    image: player.image,
    killed: false
  })
];

export const shoreNightEvents = [
  (player) => ({
    text: `${player.name} listens to the waves crashing in the dark.`,
    image: player.image,
    killed: false
  }),
  (player) => ({
    text: `${player.name} is startled by something moving in the tide pools.`,
    image: player.image,
    killed: false
  })
];

