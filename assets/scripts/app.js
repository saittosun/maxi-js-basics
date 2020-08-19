// jshint esversion: 9
const defaultResult = 0;
let currentResult = defaultResult;

function getUserNumberInput() {
  return parseInt(userInput.value);
}

function add() {
  const enteredNumber = getUserNumberInput();
  // const enteredNumber = parseInt(userInput.value);
  const calDescription = `${currentResult} + ${enteredNumber}`;
  currentResult = currentResult + enteredNumber;
  outputResult(currentResult, calDescription);
}

addBtn.addEventListener('click', add);
