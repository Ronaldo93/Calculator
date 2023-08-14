const result = document.querySelector(".result__input");
const buttons = document.querySelectorAll(".buttons__button");
const operators = document.querySelectorAll("#operator");
let isOperator = false;
let usedOneOperator = false;

// Store values in local storage
localStorage.setItem("firstNumber", null);
localStorage.setItem("secondNumber", null);
localStorage.setItem("pendingOperation", null);

if (result.value !== "0") {
  result.value = "0";
}

// Listen for click on button
buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (result.value === "0" || isOperator === true) {
      result.value = "";
      isOperator = false;
    }
    result.value += e.target.innerText;
    localStorage.setItem("secondNumber", result.value);
  });
});

// Listen for click on operator
operators.forEach((operator) => {
  operator.addEventListener("click", (e) => {
    // remove result.value from input
    if (usedOneOperator === false) {
      localStorage.setItem("firstNumber", result.value);
      usedOneOperator = true;
    } else if (usedOneOperator === true) {
      let a = localStorage.getItem("firstNumber");
      let operator = localStorage.getItem("pendingOperation");
      let b = localStorage.getItem("secondNumber");
      let result = operate(a, b, operator);
      localStorage.setItem("firstNumber", result);
    }
    localStorage.setItem("pendingOperation", e.target.innerText);
    result.value = "";
    result.value = e.target.innerText;
    isOperator = true;
  });
});
