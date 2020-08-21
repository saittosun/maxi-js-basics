// jshint esversion: 9
const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

// gets input from input field
function getUserNumberInput() {
  return userInput.value;
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

function add() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult += enteredNumber;
  // alert(++currentResult); //  I get the result after the change
  // alert(currentResult++); //  I get the result before the change
  createANumber("+", initialResult, enteredNumber);
  writeLog("ADD", initialResult, enteredNumber, currentResult);
}

function subtract() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult -= enteredNumber;
  createANumber("-", initialResult, enteredNumber);
  writeLog("SUBTRACT", initialResult, enteredNumber, currentResult);
}

function multiply() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult *= enteredNumber;
  createANumber("*", initialResult, enteredNumber);
  writeLog("MULTIPLY", initialResult, enteredNumber, currentResult);
}

function divide() {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  currentResult /= enteredNumber;
  createANumber("/", initialResult, enteredNumber);
  writeLog("DIVIDE", initialResult, enteredNumber, currentResult);
}

addBtn.addEventListener("click", add);
subtractBtn.addEventListener("click", subtract);
multiplyBtn.addEventListener("click", multiply);
divideBtn.addEventListener("click", divide);
