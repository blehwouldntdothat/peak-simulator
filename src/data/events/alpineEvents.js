export const alpineDayEvents = [
  (player) => ({
    text: `${player.name} struggles through thin alpine air, each step heavier than the last.`,
    image: player.image,
    killed: false
  }),
  (player) => ({
    text: `${player.name} slips on ice but manages to regain balance.`,
    image: player.image,
    killed: false
  })
];

export const alpineNightEvents = [
  (player) => ({
    text: `${player.name} shivers in the alpine cold, teeth chattering.`,
    image: player.image,
    killed: false
  }),
  (player) => ({
    text: `${player.name} watches distant lightning dance across the peaks.`,
    image: player.image,
    killed: false
  })
];

