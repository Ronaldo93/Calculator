var temp;
let operation = null;
const equal = document.querySelector("#equal");

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b == 0) {
    return "Cannot divide by zero!";
  }
  return a / b;
}

function operate(a, b, operation) {
  switch (operation) {
    case "+":
      return add(a, b);
    case "-":
      return subtract(a, b);
    case "*":
      return multiply(a, b);
    case "/":
      return divide(a, b);
    default:
      return "Invalid operation!";
  }
}

// Calculation hear equal button
equal.addEventListener("click", () => {
  localStorage.setItem("secondNumber", result.value);
  let a = parseInt(localStorage.getItem("firstNumber"));
  let b = parseInt(localStorage.getItem("secondNumber"));
  let operation = localStorage.getItem("pendingOperation");
  console.log(a, b, operation);
  result.value = operate(a, b, operation);
});
