export const calderaDayEvents = [
  (player) => ({
    text: `${player.name} navigates the unstable ground of the caldera, heat rising from below.`,
    image: player.image,
    killed: false
  }),
  (player) => ({
    text: `${player.name} edges around a steaming vent, coughing from the fumes.`,
    image: player.image,
    killed: false
  })
];

export const calderaNightEvents = [
  (player) => ({
    text: `${player.name} sees the glow of magma reflecting off the caldera walls.`,
    image: player.image,
    killed: false
  }),
  (player) => ({
    text: `${player.name} feels the ground rumble beneath them in the night.`,
    image: player.image,
    killed: false
  })
];
