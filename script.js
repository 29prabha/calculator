// script.js

const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");

let currentInput = "";
let previousInput = "";
let operator = null;

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const value = button.getAttribute("data-value");

        if (value === "clear") {
            currentInput = "";
            previousInput = "";
            operator = null;
            updateDisplay("0");
        } else if (value === "=") {
            if (operator && currentInput && previousInput) {
                const result = calculate(previousInput, currentInput, operator);
                updateDisplay(result);
                currentInput = result;
                previousInput = "";
                operator = null;
            }
        } else if (button.classList.contains("operator")) {
            if (currentInput) {
                operator = value;
                previousInput = currentInput;
                currentInput = "";
            }
        } else {
            currentInput += value;
            updateDisplay(currentInput);
        }
    });
});

function calculate(a, b, operator) {
    a = parseFloat(a);
    b = parseFloat(b);

    switch (operator) {
        case "+":
            return a + b;
        case "-":
            return a - b;
        case "*":
            return a * b;
        case "/":
            return a / b;
        default:
            return 0;
    }
}

function updateDisplay(value) {
    display.textContent = value;
}
