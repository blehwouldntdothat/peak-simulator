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
  phase: "day",   // "day" | "night" | "campfire"
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

  // First screen: SHORE — DAY
  runDayPhase(simState);
  renderEvents(simState);
  showScreen("simulation-screen");
}

export function proceedSimulation() {
  const biome = simState.biome;

  // Peak is summary only
  if (biome === "peak") {
    const placements = computePlacements();
    renderSummary(placements);
    showScreen("summary-screen");
    return;
  }

  if (simState.phase === "day") {
    // Move to NIGHT
    simState.phase = "night";
    runNightPhase(simState);
    renderEvents(simState);
    return;
  }

  if (simState.phase === "night") {
    // Move to CAMPFIRE
    simState.phase = "campfire";
    runCampfirePhase(simState);
    renderEvents(simState);
    return;
  }

  if (simState.phase === "campfire") {
    // Statue + next biome
    applyStatueResurrection(simState);

    simState.biomeIndex++;
    simState.biome = resolveBiome(simState.biomeIndex);

    // If we reached PEAK, go straight to summary
    if (simState.biome === "peak") {
      const placements = computePlacements();
      renderSummary(placements);
      showScreen("summary-screen");
      return;
    }

    simState.phase = "day";
    simState.dayNumber++;
    runDayPhase(simState);
    renderEvents(simState);
    return;
  }
}
