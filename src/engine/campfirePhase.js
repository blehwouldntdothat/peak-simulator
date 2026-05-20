import { cast } from "../data/cast.js";

export function runCampfirePhase(state) {
  // Reset log for this phase
  state.log = [];

  // Header (must be an object)
  state.log.push({
    text: `--- CAMPFIRE SUMMARY (${state.biome}) ---`,
    image: ""
  });

  const alive = cast.filter(c => c.alive);
  const dead = cast.filter(c => !c.alive);

  // Alive summary
  state.log.push({
    text: `Alive: ${alive.length ? alive.map(a => a.name).join(", ") : "None"}`,
    image: alive[0]?.image || ""
  });

  // Dead summary
  state.log.push({
    text: `Dead: ${dead.length ? dead.map(d => d.name).join(", ") : "None"}`,
    image: dead[0]?.image || ""
  });
}
