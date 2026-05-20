import { getBiomeEvents } from "../data/events/globalEvents.js";
import { cast } from "../data/cast.js";

export function runNightPhase(state) {
  const events = getBiomeEvents(state.biome, "night");

  state.log.push(`--- NIGHT ${state.day} (${state.biome}) ---`);

  cast.forEach(player => {
    if (!player.alive) return;

    const event = events[Math.floor(Math.random() * events.length)];
    const result = event(player);

    state.log.push(result.text);

    if (result.killed) {
      player.alive = false;
      player.deathOrder = ++state.deathCounter;
    }
  });
}
