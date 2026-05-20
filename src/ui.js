import { cast } from "./data/cast.js";
import { proceedSimulation, simState } from "./simulator.js";

const screens = {
  "main-menu": document.getElementById("main-menu"),
  "simulation-screen": document.getElementById("simulation-screen"),
  "summary-screen": document.getElementById("summary-screen")
};

const castListEl = document.getElementById("cast-list");
const eventContainer = document.getElementById("event-container");
const simTitle = document.getElementById("sim-title");
const proceedBtn = document.getElementById("proceed-btn");
const summaryContainer = document.getElementById("summary-container");
const returnMenuBtn = document.getElementById("return-menu-btn");

export function showScreen(id) {
  Object.values(screens).forEach(s => s.classList.remove("active"));
  screens[id].classList.add("active");
}

export function renderCastList() {
  castListEl.innerHTML = "";

  cast.forEach(player => {
    const div = document.createElement("div");
    div.className = "cast-card";

    div.innerHTML = `
      <img src="${player.image}" class="character-img" />
      <div class="name">${player.name}</div>
      <button class="remove-btn" data-id="${player.id}">Remove</button>
    `;

    castListEl.appendChild(div);
  });

  castListEl.querySelectorAll(".remove-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const id = btn.getAttribute("data-id");
      const index = cast.findIndex(c => c.id === id);
      if (index !== -1) cast.splice(index, 1);
      renderCastList();
    });
  });
}

export function renderEvents(state) {
  eventContainer.innerHTML = "";
  simTitle.textContent = `${state.biome.toUpperCase()} — ${state.phase.toUpperCase()}`;

  state.log.forEach(entry => {
    const card = document.createElement("div");
    card.className = "event-card";

    card.innerHTML = `
      <img src="${entry.image || ""}" />
      <div class="event-text">${entry.text}</div>
    `;

    eventContainer.appendChild(card);
  });
}

export function renderSummary(placements) {
  summaryContainer.innerHTML = "";

  placements.forEach(p => {
    const div = document.createElement("div");
    div.className = "summary-entry";

    const status = p.alive
      ? "Alive at Peak"
      : `Died (Order ${p.deathOrder})`;

    div.innerHTML = `
      <img src="${p.image}" />
      <div>
        <div class="summary-name">${p.name}</div>
        <div class="summary-status">${status}</div>
      </div>
    `;

    summaryContainer.appendChild(div);
  });
}

proceedBtn.addEventListener("click", () => {
  proceedSimulation();
});

returnMenuBtn.addEventListener("click", () => {
  showScreen("main-menu");
});

