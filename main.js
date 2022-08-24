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
const addMoreCellsBtn = document.querySelector("#add-more-cells");

resetBtn.addEventListener("click", (e) => {
  curColor.style.backgroundColor = "white";
  main.innerHTML = "";
  main.style.gridTemplateColumns = "repeat(10,50px)";
  main.style.gridAutoRows = "50px";
  for (let i = 0; i < 100; i++) {
    const div = document.createElement("div");
    div.classList.add("cell");
    main.append(div);
  }
  paintAll("white");
});

paintAllBtn.addEventListener("click", () => {
  paintAll(curColor.style.backgroundColor);
});

oneRandomBtn.addEventListener("click", () => {
  let [r, g, b] = randomColor();
  let color = `rgba(${r}, ${g}, ${b})`;
  curColor.style.backgroundColor = color;
  paintAll(color);
});

allRandomBtn.addEventListener("click", () => {
  paintAll(null, false);
});

let defaultColumns = 10;
addMoreCellsBtn.addEventListener("click", () => {
  const cells = document.querySelectorAll(".cell");
  const currentWidthOrHeight = document.querySelector(".cell").offsetWidth;
  defaultColumns += 10;
  main.style.gridTemplateColumns = `repeat(autofill,${
    currentWidthOrHeight / 2
  }px)`;
  main.style.gridAutoRows = `${currentWidthOrHeight / 2}px`;
  console.log(currentWidthOrHeight);
  for (let cell of cells) {
    cell.style.width = currentWidthOrHeight / 2 + "px";
    cell.style.height = currentWidthOrHeight / 2 + "px";
  }
  for (let i = 0; i < 100; i++) {
    const div = document.createElement("div");
    div.style.width = currentWidthOrHeight / 2 + "px";
    div.style.height = currentWidthOrHeight / 2 + "px";
    div.classList.add("cell");
    main.append(div);
  }
});

function randomColor() {
  const first = Math.floor(Math.random() * 256);
  const second = Math.floor(Math.random() * 256);
  const third = Math.floor(Math.random() * 256);
  return [first, second, third];
}

function paintAll(color, isOneRandomColor = true) {
  const cells = document.querySelectorAll(".cell");
  for (let cell of cells) {
    let [r, g, b] = randomColor();
    let random = `rgba(${r}, ${g}, ${b})`;
    cell.style.backgroundColor = isOneRandomColor ? color : random;
  }
}
