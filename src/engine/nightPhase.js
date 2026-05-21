import { getBiomeEvents } from "../data/events/globalEvents.js";
import { cast } from "../data/cast.js";

export function runNightPhase(state) {
  state.log = [];

  const events = getBiomeEvents(state.biome, "night");

  cast.forEach(player => {
    if (!player.alive) return;

    const event = events[Math.floor(Math.random() * events.length)];
    const result = event(player, state.biome);

    state.log.push({
      text: result.text,
      image: result.image,
      extraImage: result.extraImage || null,
      killed: result.killed
    });

    if (result.killed && player.alive) {
      player.alive = false;
      player.deathOrder =
        cast.filter(c => c.deathOrder !== null).length + 1;
    }
  });
}
