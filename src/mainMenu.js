import { cast, addCharacter, resetCast } from "./data/cast.js";
import { settings } from "./data/settings.js";
import { startSimulation } from "./simulator.js";
import { showScreen, renderCastList } from "./ui.js";

// DOM elements
const castNameInput = document.getElementById("cast-name");
const castImageInput = document.getElementById("cast-image");
const addCastBtn = document.getElementById("add-cast-btn");

const biome2Select = document.getElementById("biome2-select");
const biome3Select = document.getElementById("biome3-select");
const statueToggle = document.getElementById("statue-toggle");

const startSimBtn = document.getElementById("start-sim-btn");

// Add character
addCastBtn.addEventListener("click", () => {
  const name = castNameInput.value.trim();
  const file = castImageInput.files[0];

  if (!name || !file) {
    alert("Please enter a name and choose an image.");
    return;
  }

  const reader = new FileReader();
  reader.onload = () => {
    addCharacter(name, reader.result);
    renderCastList();
    castNameInput.value = "";
    castImageInput.value = "";
  };
  reader.readAsDataURL(file);
});

// Start simulation
startSimBtn.addEventListener("click", () => {
  if (cast.length === 0) {
    alert("Add at least one character.");
    return;
  }

  // Save settings
  settings.biome2 = biome2Select.value;
  settings.biome3 = biome3Select.value;
  settings.statueActive = statueToggle.checked;

  resetCast();
  startSimulation();
  showScreen("simulation-screen");
});

// Initial render
renderCastList();
