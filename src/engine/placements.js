import { cast } from "../data/cast.js";

export function computePlacements() {
  const alive = cast.filter(c => c.alive);
  const dead = cast.filter(c => !c.alive);

  alive.sort((a, b) => a.name.localeCompare(b.name));
  dead.sort((a, b) => a.deathOrder - b.deathOrder);

  return [...alive, ...dead];
}


