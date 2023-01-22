import createCells from "./createCells/createCells.js";
import createGrid from "./createGrid/createGrid.js";

document.addEventListener("DOMContentLoaded", () => {
  createGrid(30);
});

setTimeout(() => {
  createCells();
}, 1);
