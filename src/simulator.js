import { runDayPhase } from "./phases/dayPhase.js";
import { runNightPhase } from "./phases/nightPhase.js";
import { runCampfirePhase } from "./phases/campfirePhase.js";
import { cast } from "./data/cast.js";
import { renderEvents, renderSummary } from "./ui.js";

export const state = {
  biome: "shore",
  phase: "day",
  log: [],
  statueEnabled: false
};

export function proceedSimulation() {

  // 1. TOTAL WIPEOUT CHECK — overrides everything
  if (cast.every(c => !c.alive)) {
    state.biome = "peak";
    state.phase = "summary";
    renderSummary(cast);
    return;
  }

  // 2. KILN SKIP CHECK — skip campfire entirely
  if (state.biome === "kiln" && state.phase === "night") {
    state.biome = "peak";
    state.phase = "summary";
    renderSummary(cast);
    return;
  }

  // 3. NORMAL PHASE FLOW
  if (state.phase === "day") {
    runDayPhase(state);
    state.phase = "night";
    renderEvents(state);
    return;
  }

  if (state.phase === "night") {
    runNightPhase(state);

    // If biome is NOT kiln → go to campfire
    if (state.biome !== "kiln") {
      state.phase = "campfire";
      renderEvents(state);
      return;
    }

    // If biome IS kiln → handled above
  }

  if (state.phase === "campfire") {
    runCampfirePhase(state);

    // After campfire → next biome
    state.biome = getNextBiome(state.biome);
    state.phase = "day";

    renderEvents(state);
    return;
  }

  if (state.phase === "summary") {
    renderSummary(cast);
  }
}

function getNextBiome(current) {
  const order = ["shore", "tropics", "roots", "alpine", "mesa", "caldera", "kiln", "peak"];
  const index = order.indexOf(current);
  return order[index + 1] || "peak";
}

