const MIN_GRID = 1;
const MAX_GRID = 100;

const container = document.querySelector("#container");
const resizeButton = document.querySelector("#resize-button");

function createGrid(grid = 16) {
  container.innerHTML = "";

  container.style.setProperty("--grid-size", grid);

  for (let i = 0; i < grid * grid; i++) {
    const square = document.createElement("div");
    square.classList.add("square");

    container.appendChild(square);
  }
}

function randomColor(opacity) {
  const MAX_COLOR = 256;
  const randomValue = () => Math.floor(Math.random() * MAX_COLOR);

  return `rgba(${randomValue()}, ${randomValue()}, ${randomValue()}, ${opacity})`;
}

container.addEventListener("mouseover", (event) => {
  const square = event.target;

  if (!square.classList.contains("square")) {
    return;
  }

  let opacity = +square.dataset.opacity || 0;
  opacity = Math.min(opacity + 0.1, 1);

  square.dataset.opacity = opacity.toFixed(1);

  square.style.backgroundColor = randomColor(opacity);
});

function resizeGrid() {
  let grid = +prompt(
    "Enter new dimensions for the grid (number between 1-100):",
  );

  while (grid < MIN_GRID || grid > MAX_GRID || Number.isNaN(grid)) {
    grid = +prompt("Invalid dimensions, enter a number between 1-100:");
  }

  grid = Math.floor(grid);

  createGrid(grid);
}

resizeButton.addEventListener("click", resizeGrid);

createGrid();
