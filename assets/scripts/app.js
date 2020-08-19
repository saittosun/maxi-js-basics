// jshint esversion: 9
const defaultResult = 0;
let currentResult = defaultResult;

function getUserNumberInput() {
  return parseInt(userInput.value);
}

function createANumber(operator, initialNumber, currentNumber) {
  const calResult = `${initialNumber} ${operator} ${currentNumber}`;
  outputResult(currentResult, calResult);
}

function add() {
  const initialResult = currentResult;
  const enteredNumber = getUserNumberInput();
  currentResult = currentResult + enteredNumber;
  createANumber('+', initialResult, enteredNumber);
}

function subtract() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult = currentResult - enteredNumber;
  createANumber('-', initialResult, enteredNumber);
}

function multiply() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult = currentResult * enteredNumber;
  createANumber('*', initialResult, enteredNumber);
}

function divide() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult = currentResult / enteredNumber;
  createANumber('/', initialResult, enteredNumber);
}



addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);

