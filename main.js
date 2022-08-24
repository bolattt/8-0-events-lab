// Do not change the code below.
const main = document.querySelector("main");
for (let i = 0; i < 100; i++) {
  const div = document.createElement("div");
  div.classList.add("cell");
  main.append(div);
}

// You may write your code here!
let curColor;
// colors
const colors = document.querySelectorAll(".color");
for (let color of colors) {
  color.addEventListener("click", select);
}

function select(e) {
  curColor = document.querySelector("#current-color");
  curColor.style.backgroundColor = e.target.style.backgroundColor;
}

// cells
const cells = document.querySelectorAll(".cell");
for (let cell of cells) {
  cell.addEventListener("click", paint);
}

function paint(e) {
  console.log(e.target);
  e.target.style.backgroundColor = curColor.style.backgroundColor;
}
