import { cast } from "../data/cast.js";

export function runCampfirePhase(state) {
  state.log = [];

  // If everyone is dead → simulator will handle instant ending
  const allDead = cast.every(c => !c.alive);
  if (allDead) return;

  // Statue revival ONLY if enabled AND at least one dead
  if (state.statueEnabled && cast.some(c => !c.alive)) {
    cast.forEach(c => {
      c.alive = true;
      c.deathOrder = null;
    });

    state.log.push({
      text: "A loud rumble echoes from the ancient statue. All fallen scouts have been revived.",
      group: null
    });
  }

  const alive = cast.filter(c => c.alive);
  const dead = cast.filter(c => !c.alive);

  state.log.push({ text: "Alive:", group: alive });
  state.log.push({ text: "Dead:", group: dead });
}
