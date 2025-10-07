const screenCalc = document.getElementById("screen");
const allClearB = document.getElementById("allClear");
const clearB = document.getElementById("clear");

const num7 = document.getElementById("num7");
const num8 = document.getElementById("num8");
const num9 = document.getElementById("num9");
const num4 = document.getElementById("num4");
const num5 = document.getElementById("num5");
const num6 = document.getElementById("num6");
const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const num3 = document.getElementById("num3");
const num0 = document.getElementById("num0");

const opDiv = document.getElementById("opDiv");
const opMult = document.getElementById("opMult");
const opSub = document.getElementById("opSub");
const opEq = document.getElementById("opEq");
const opAdd = document.getElementById("opAdd");
const dot = document.getElementById("dot");

const numbers = [num0, num1, num2, num3, num4, num5, num6, num7, num8, num9, dot];
const operators = [opDiv, opMult, opSub, opEq, opAdd];

let firstNumber = "";
let operator = "";
let waitingForSecond = false;
let lastResult = false;

function calculate(num1, num2, operator) {
    const a = parseFloat(num1);
    const b = parseFloat(num2);
    let result;

    switch (operator) {
        case "+": result = a + b; break;
        case "-": result = a - b; break;
        case "*": result = a * b; break;
        case "/": result = b !== 0 ? a / b : "Error"; break;
        default: result = "Error";
    }

    if (result === "Error") return result;
    return parseFloat(result.toFixed(8)).toString();
}

numbers.forEach(div => {
    div.addEventListener("click", () => {
        const value = div.textContent;
        let current = screenCalc.innerText;

        if (lastResult) {
            current = "";
            screenCalc.innerText = "";
            lastResult = false;
        }

        if (current === "Error") {
            current = "";
            screenCalc.innerText = "";
        }

        if (value === ".") {
            if (current.includes(".")) return;
            if (current === "") {
                screenCalc.innerText = "0.";
                return;
            }
        }

        if (current.length >= 10) return;

        screenCalc.innerText += value;
    })
});

allClearB.addEventListener("click", () => {
    screenCalc.innerText = "";
    firstNumber = "";
    operator = "";
    waitingForSecond = false;
    lastResult = false;
});

clearB.addEventListener("click", () => {
    screenCalc.innerText = screenCalc.innerText.slice(0, -1);
});

operators.forEach(op => {
    op.addEventListener("click", () => {
        const opValue = op.textContent;
        const current = screenCalc.innerText;

        if (current === "" && opValue !== "=") return;
        if (current === "Error") return;

        if (opValue === "=") {
            if (firstNumber !== "" && operator !== "") {
                const secondNumber = current;
                const result = calculate(firstNumber, secondNumber, operator);
                screenCalc.innerText = result;

                firstNumber = "";
                operator = "";
                waitingForSecond = false;
                lastResult = true;
            }
            return;
        }

        if (!waitingForSecond) {
            firstNumber = current;
            operator = opValue;
            waitingForSecond = true;
            screenCalc.innerText = "";
            lastResult = false;
        } else {
            const secondNumber = current;
            const result = calculate(firstNumber, secondNumber, operator);
            
            firstNumber = result;
            operator = opValue;
            screenCalc.innerText = "";
            lastResult = false;
        }
    });
});
