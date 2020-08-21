// jshint esversion: 9
const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

// gets input from input field
function getUserNumberInput() {
  return parseInt(userInput.value);
}

// generates and writes calculation log
function createANumber(operator, initialNumber, currentNumber) {
  const calResult = `${initialNumber} ${operator} ${currentNumber}`;
  outputResult(currentResult, calResult); // from vendor file
}

function writeLog(operationIdentifier, prevResult, operationNumber, newResult) {
  const logEntry = {
    operation: operationIdentifier,
    prevResult: prevResult,
    number: operationNumber,
    result: newResult,
  };
  // const newLogEntries = logEntries.push(enteredNumber);
  const newLogEntries = logEntries.push(logEntry);
  console.log(newLogEntries);
  console.log(logEntries);
}

function calculationResult(calculationType) {
  const enteredNumber = getUserNumberInput();
  if (
    calculationType !== 'ADD' &&
    calculationType !== 'SUBTRACT' &&
    calculationType !== 'MULTIPLY' &&
    calculationType !== 'DIVIDE' ||
    !enteredNumber
  ) {
    return;
  }
  const initialResult = currentResult;
  let mathOperator;
  if (calculationType === "ADD") {
    currentResult += enteredNumber;
    mathOperator = "+";
  } else if (calculationType === "SUBTRACT") {
    currentResult -= enteredNumber;
    mathOperator = "-";
  } else if (calculationType === "MULTIPLY") {
    currentResult *= enteredNumber;
    mathOperator = "*";
  } else {
    currentResult /= enteredNumber;
    mathOperator = "/";
  }
  createANumber(mathOperator, initialResult, enteredNumber);
  writeLog(calculationType, initialResult, enteredNumber, currentResult);
}

function add() {
  calculationResult("ADD");
}

function subtract() {
  calculationResult("SUBTRACT");
}

function multiply() {
  calculationResult("MULTIPLY");
}

function divide() {
  calculationResult("DIVIDE");
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
