let timerCounter = document.getElementById("timerCounter");
const minuteInput = document.getElementById("minute");
const secondInput = document.getElementById("second");
const buttonStart = document.getElementById("start");
const buttonPause = document.getElementById("pause");
const buttonRestart = document.getElementById("restart");

function makeInvisible(parameter) {
  parameter.className = "invisible";
}

function makeVisible(parameter) {
  parameter.classList.remove("invisible");
}

function interpreteValue(parameter) {
  let newValue;
  if (parameter < 10 && parameter !== "00") {
    newValue = "0" + parameter;
  } else {
    newValue = parameter;
  }
  return newValue;
}

let minute;
let second;

buttonStart.addEventListener("click", () => {
  if (second === undefined) {
    minute = minuteInput.value;
    second = secondInput.value;
  }
  if (minute >= 0 && second > 0) {
    intervalId = setInterval(() => {
      second--;
      if (second < 0) {
        second = 59;
        minute--;
      } else if (second == 0 && minute == 0) {
        clearInterval(intervalId);
        makeInvisible(buttonPause);
        makeVisible(buttonStart);
      }
      timerCounter.textContent = `${interpreteValue(minute)}:${interpreteValue(
        second
      )}`;
      if (second == 0 && minute == 0) {
        clearInterval(intervalId);
        makeInvisible(buttonPause);
        makeVisible(buttonStart);
      }
      if (timerCounter.textContent == "00:00") {
        minute = minuteInput.value;
        second = secondInput.value;
      }
    }, 1000);

    makeInvisible(buttonStart);
    makeVisible(buttonPause);
  }
});

buttonPause.addEventListener("click", () => {
  clearInterval(intervalId);
  makeInvisible(buttonPause);
  makeVisible(buttonStart);
});
buttonRestart.addEventListener("click", () => {
  minute = minuteInput.value;
  second = secondInput.value;

  clearInterval(intervalId);
  makeInvisible(buttonPause);
  makeVisible(buttonStart);
  timerCounter.textContent = `${interpreteValue(minute)}:${interpreteValue(
    second
  )}`;
});
