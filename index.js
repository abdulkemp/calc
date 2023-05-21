const buttons = document.querySelectorAll("button");
const screenDisplay = document.querySelector(".screens");
const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");



let calculation = []
let accumulativeCalculation

function calculate(button) {
  const value = button.textContent;
  if (value === "CLEAR") {
    calculate = [];
    screenDisplay.textContent = "0";
    screen2.textContent = ".";
  } else if (value === "=") {
    console.log(accumulativeCalculation);
    screen2.textContent = eval(accumulativeCalculation);
  } else {
    calculation.push(value);
    accumulativeCalculation = calculation.join("");
    screen1.textContent = accumulativeCalculation;
  }
}

buttons.forEach(button => button.addEventListener("click", () => calculate(button)));
