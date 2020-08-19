// jshint esversion: 9
const defaultResult = 0;
let currentResult = defaultResult;

function getUserNumberInput() {
  return parseInt(userInput.value);
}

// function createANumber(operator, initialNumber, currentNumber) {
//   const calResult = `${operator} ${initialNumber} ${currentNumber}`;
//   outputResult(currentResult, calDescription);
// }

function add() {
  const enteredNumber = getUserNumberInput();
  const calDescription = `${currentResult} + ${enteredNumber}`;
  currentResult = currentResult + enteredNumber;
  outputResult(currentResult, calDescription);
}

function subtract() {
  const enteredNumber = getUserNumberInput();
  const calDescription = `${currentResult} - ${enteredNumber}`;
  currentResult = currentResult - enteredNumber;
  outputResult(currentResult, calDescription);
}

function multiply() {
  const enteredNumber = getUserNumberInput();
  const calDescription = `${currentResult} * ${enteredNumber}`;
  currentResult = currentResult * enteredNumber;
  outputResult(currentResult, calDescription);
}

function divide() {
  const enteredNumber = getUserNumberInput();
  const calDescription = `${currentResult} / ${enteredNumber}`;
  currentResult = currentResult / enteredNumber;
  outputResult(currentResult, calDescription);
}



addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);

