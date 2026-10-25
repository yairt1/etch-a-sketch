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

function randomColor() {
  const MAX_COLOR = 256;
  const randomValue = () => Math.floor(Math.random() * MAX_COLOR);

  return `rgb(${randomValue()} ${randomValue()} ${randomValue()})`;
}

container.addEventListener("mouseover", (event) => {
  if (event.target !== container) {
    event.target.style.backgroundColor = randomColor();
  }
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
