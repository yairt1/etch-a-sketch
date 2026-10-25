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

function randomColor() {
  const MAX_COLOR = 256;
  const randomValue = () => Math.floor(Math.random() * MAX_COLOR);

  return `rgb(${randomValue()} ${randomValue()} ${randomValue()})`;
}

const squares = Array.from(document.querySelectorAll(".square"));

container.addEventListener("mouseover", (event) => {
  if (event.target !== container) {
    event.target.style.backgroundColor = randomColor();
  }
});
