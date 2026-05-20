function lethalText(player) {
  return {
    text: `${player.name} misjudges a jump in the Kiln and disappears into the smoke.`,
    image: player.image,
    killed: true
  };
}

export const kilnDayEvents = [
  (player) => ({
    text: `${player.name} climbs through choking ash in the Kiln.`,
    image: player.image,
    killed: false
  }),
  lethalText
];

export const kilnNightEvents = [
  (player) => ({
    text: `${player.name} can barely see through the glowing haze of the Kiln.`,
    image: player.image,
    killed: false
  }),
  lethalText
];
