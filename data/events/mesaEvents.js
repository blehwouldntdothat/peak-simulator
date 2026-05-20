export const mesaDayEvents = [
  (player) => ({
    text: `${player.name} crosses exposed mesa ledges with sheer drops on either side.`,
    image: player.image,
    killed: false
  }),
  (player) => ({
    text: `${player.name} kicks loose a rock that tumbles far below.`,
    image: player.image,
    killed: false
  })
];

export const mesaNightEvents = [
  (player) => ({
    text: `${player.name} watches the stars from the flat mesa top, feeling very small.`,
    image: player.image,
    killed: false
  }),
  (player) => ({
    text: `${player.name} hears rocks shifting in the darkness nearby.`,
    image: player.image,
    killed: false
  })
];
