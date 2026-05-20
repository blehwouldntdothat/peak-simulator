export const rootsDayEvents = [
  (player) => ({
    text: `${player.name} trips over a massive root and barely catches themselves.`,
    image: player.image,
    killed: false
  }),
  (player) => ({
    text: `${player.name} uses the tangled roots as handholds to climb.`,
    image: player.image,
    killed: false
  })
];

export const rootsNightEvents = [
  (player) => ({
    text: `${player.name} feels the forest closing in around them.`,
    image: player.image,
    killed: false
  }),
  (player) => ({
    text: `${player.name} hears creaking branches and snaps awake.`,
    image: player.image,
    killed: false
  })
];

