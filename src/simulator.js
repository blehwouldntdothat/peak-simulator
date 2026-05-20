import { BIOME_ORDER } from "./data/biomes.js";
import { cast } from "./data/cast.js";
import { settings } from "./data/settings.js";

import { runDayPhase } from "./engine/dayPhase.js";
import { runNightPhase } from "./engine/nightPhase.js";
import { runCampfirePhase } from "./engine/campfirePhase.js";
import { applyStatueResurrection } from "./engine/statue.js";
import { computePlacements } from "./engine/placements.js";
import { renderEvents, renderSummary, showScreen } from "./ui.js";

export const simState = {
  biomeIndex: 0,
  biome: null,
  phase: "day",
  dayNumber: 1,
  log: []
};

function resolveBiome(index) {
  const slot = BIOME_ORDER[index];

  if (slot === "BIOME_2") {
    if (settings.biome2 === "random") {
      return Math.random() < 0.5 ? "tropics" : "roots";
    }
    return settings.biome2;
  }

  if (slot === "BIOME_3") {
    if (settings.biome3 === "random") {
      return Math.random() < 0.5 ? "alpine" : "mesa";
    }
    return settings.biome3;
  }

  return slot;
}

export function startSimulation() {
  simState.biomeIndex = 0;
  simState.biome = resolveBiome(0);
  simState.phase = "day";
  simState.dayNumber = 1;
  simState.log = [];

  // FIX: Generate the first day immediately
  runDayPhase(simState);
  simState.phase = "night";

  renderEvents(simState);
  showScreen("simulation-screen");
}

export function proceedSimulation() {
  const biome = simState.biome;

  if (biome === "peak") {
    const placements = computePlacements();
    renderSummary(placements);
    showScreen("summary-screen");
    return;
  }

  if (simState.phase === "night") {
    runNightPhase(simState);
    simState.phase = "campfire";
    renderEvents(simState);
    return;
  }

  if (simState.phase === "campfire") {
    runCampfirePhase(simState);

    applyStatueResurrection(simState);

    simState.biomeIndex++;
    simState.biome = resolveBiome(simState.biomeIndex);
    simState.phase = "day";
    simState.dayNumber++;

    runDayPhase(simState);
    simState.phase = "night";

    renderEvents(simState);
    return;
  }
}
