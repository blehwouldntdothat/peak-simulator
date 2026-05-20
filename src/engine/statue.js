import { cast } from "../data/cast.js";
import { settings } from "../data/settings.js";

export function applyStatueResurrection(state) {
  if (!settings.statueActive) return;
  if (state.biome === "kiln" || state.biome === "peak") return;

  cast.forEach(player => {
    if (!player.alive) {
      player.alive = true;
      player.deathOrder = null;
    }
  });

  state.log.push("The statue glows... all fallen climbers return.");
}
