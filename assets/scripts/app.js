// jshint esversion: 9
const defaultResult = 0;
let currentResult = defaultResult;

// gets input from input field
function getUserNumberInput() {
  return parseInt(userInput.value);
}

// generates and writes calculation log
function createANumber(operator, initialNumber, currentNumber) {
  const calResult = `${initialNumber} ${operator} ${currentNumber}`;
  outputResult(currentResult, calResult); // from vendor file
}

function add() {
  const initialResult = currentResult;
  const enteredNumber = getUserNumberInput();
  currentResult += enteredNumber; 
  // alert(++currentResult); //  I get the result after the change
  // alert(currentResult++); //  I get the result before the change
  createANumber('+', initialResult, enteredNumber);
}

function subtract() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult -= enteredNumber;
  createANumber('-', initialResult, enteredNumber);
}

function multiply() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult *= enteredNumber;
  createANumber('*', initialResult, enteredNumber);
}

function divide() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult /= enteredNumber;
  createANumber('/', initialResult, enteredNumber);
}



addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);

