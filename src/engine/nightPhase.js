import { getBiomeEvents } from "../data/events/globalEvents.js";
import { cast } from "../data/cast.js";

export function runNightPhase(state) {
  const events = getBiomeEvents(state.biome, "night");

  // Reset log for this phase
  state.log = [];

  // Add header as an object (UI requires text + image)
  state.log.push({
    text: `--- NIGHT ${state.dayNumber} (${state.biome}) ---`,
    image: ""
  });

  cast.forEach(player => {
    if (!player.alive) return;

    const event = events[Math.floor(Math.random() * events.length)];
    const result = event(player, state.biome);

    // Push event as object
    state.log.push({
      text: result.text,
      image: result.image
    });

    // Handle death
    if (result.killed && player.alive) {
      player.alive = false;
      player.deathOrder =
        (player.deathOrder ?? 0) ||
        (cast.filter(c => c.deathOrder !== null).length + 1);
    }
  });
}
