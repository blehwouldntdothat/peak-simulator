import { cast } from "../data/cast.js";

export function runCampfirePhase(state) {
  state.log = [];

  const alive = cast.filter(c => c.alive);
  const dead = cast.filter(c => !c.alive);

  state.log.push({
    text: `Alive: ${alive.length ? alive.map(a => a.name).join(", ") : "None"}`,
    image: alive[0]?.image || ""
  });

  state.log.push({
    text: `Dead: ${dead.length ? dead.map(d => d.name).join(", ") : "None"}`,
    image: dead[0]?.image || ""
  });
}
