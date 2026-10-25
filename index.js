const GRID = 16;

const container = document.querySelector("#container");

function createGrid() {
  for (let i = 0; i < GRID * GRID; i++) {
    const square = document.createElement("div");
    square.classList.add("square");

    container.appendChild(square);
  }
}

createGrid();
