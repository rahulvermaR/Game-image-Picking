const boxElContainer = document.querySelectorAll(".box");
const btnStartEl = document.querySelector("#start");
const btnResetEl = document.querySelector("#reset");
const scoreEl = document.querySelector("#score");
const timeLeftEl = document.querySelector("#time-left");

const rendomIndexGengerator = function () {
  return Math.floor(Math.random() * 9);
};

let timeAtStart;
let timer;
let isRunning;
let score;
const pickAnBoax = function () {
  timeAtStart--;
  if (timeAtStart == 0) {
    clearInterval(timer);
  }
  timeLeftEl.textContent = timeAtStart;
  boxElContainer.forEach((ele) => {
    ele.classList.remove("mole");
  });
  boxElContainer[rendomIndexGengerator()].classList.add("mole");
};

function pickingIsOn() {
  if (!isRunning) {
    isRunning = true;
    timer = setInterval(pickAnBoax, 1000);
  }
}
btnStartEl.addEventListener("click", function () {
  pickingIsOn();
});
btnResetEl.addEventListener("click", function () {
  resetGame();
});

function fun(e) {
  if (timeAtStart == 0) return;

  e.path[0].disabled = true;
  if (e.path[0].classList[1] == "mole") {
    scoreEl.textContent = score++;
  }
}
const resetGame = function () {
  if (timeAtStart != 0 && isRunning) clearInterval(timer);
  timeAtStart = 30;
  isRunning = false;
  score = 1;
  timeLeftEl.textContent = timeAtStart;
  scoreEl.textContent = "0";
  boxElContainer.forEach((ele) => {
    ele.classList.remove("mole");
  });
};
resetGame();
