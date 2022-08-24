// Do not change the code below.
const main = document.querySelector("main");
for (let i = 0; i < 100; i++) {
  const div = document.createElement("div");
  div.classList.add("cell");
  main.append(div);
}

// You may write your code here!
let curColor = document.querySelector("#current-color");
curColor.style.backgroundColor = "white";

// colors
const colors = document.querySelectorAll(".color");
for (let color of colors) {
  color.addEventListener("click", select);
}

function select(e) {
  curColor.style.backgroundColor = e.target.style.backgroundColor;
}

// cells
const cells = document.querySelectorAll(".cell");
for (let cell of cells) {
  cell.addEventListener("click", paint);
}

function paint(e) {
  e.target.style.backgroundColor = curColor.style.backgroundColor;
}

// bonus
const resetBtn = document.querySelector("#reset");
const paintAllBtn = document.querySelector("#paint-all");
const oneRandomBtn = document.querySelector("#one-random");
const allRandomBtn = document.querySelector("#all-random");

resetBtn.addEventListener("click", (e) => {
  curColor.style.backgroundColor = "white";
  paintAll("white");
});

paintAllBtn.addEventListener("click", () => {
  paintAll(curColor.style.backgroundColor);
});

oneRandomBtn.addEventListener("click", () => {
  let color = randomColor();
  curColor.style.backgroundColor = color;
  paintAll(color);
});

allRandomBtn.addEventListener("click", () => {
  paintAll(null, false);
});

function randomColor() {
  const colors = [
    "black",
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "purple",
    "white",
  ];
  const random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function paintAll(color, isOneRandomColor = true) {
  const cells = document.querySelectorAll(".cell");
  for (let cell of cells) {
    cell.style.backgroundColor = isOneRandomColor ? color : randomColor();
  }
}
