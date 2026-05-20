import { cast } from "../data/cast.js";

export function runCampfirePhase(state) {
  state.log.push(`--- CAMPFIRE SUMMARY (${state.biome}) ---`);

  const alive = cast.filter(c => c.alive);
  const dead = cast.filter(c => !c.alive);

  state.log.push(`Alive: ${alive.map(a => a.name).join(", ")}`);
  state.log.push(`Dead: ${dead.map(d => d.name).join(", ")}`);
}

