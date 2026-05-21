import { cast } from "../data/cast.js";

export function runCampfirePhase(state) {
  state.log = [];

  const hadDead = cast.some(c => !c.alive);

  // Always revive if anyone is dead
  if (hadDead) {
    cast.forEach(c => {
      c.alive = true;
      c.deathOrder = null;
    });

    state.log.push({
      text: "A loud rumble tears through an ancient, mystical statue. All deceased scouts have been revived.",
      group: []
    });
  }

  const alive = cast.filter(c => c.alive);
  const dead = cast.filter(c => !c.alive);

  state.log.push({
    text: "Alive:",
    group: alive
  });

  state.log.push({
    text: "Dead:",
    group: dead
  });
}
