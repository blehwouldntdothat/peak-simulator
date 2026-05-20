import { cast } from "../data/cast.js";

export function runCampfirePhase(state) {
  state.log = [];

  const alive = cast.filter(c => c.alive);
  const dead = cast.filter(c => !c.alive);

  state.log.push({
    text: "Alive:",
    image: "",
    group: alive
  });

  state.log.push({
    text: "Dead:",
    image: "",
    group: dead
  });
}
