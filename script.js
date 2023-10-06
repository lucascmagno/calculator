// Variáveis para armazenar os operandos e operação atual
let operand1 = "";
let operand2 = "";
let currentOperation = "";

// Elemento de exibição
const display = document.getElementById("display");

// Adicionando manipuladores de eventos para os botões numéricos
const buttons = document.querySelectorAll(".button");
buttons.forEach(button => {
    button.addEventListener("click", () => {
        const value = button.getAttribute("value");
        if (currentOperation === "") {
            operand1 += value;
        } else {
            operand2 += value;
        }
        display.value += value;
    });
});

// Adicionando manipuladores de eventos para os botões de operação
const operations = document.querySelectorAll(".operacao");
operations.forEach(operation => {
    operation.addEventListener("click", () => {
        if (operand1 !== "") {
            currentOperation = operation.textContent;
            display.value += currentOperation;
        }
    });
});

// Manipulador de evento para o botão "="
const equalsButton = document.getElementById("equals");
equalsButton.addEventListener("click", () => {
    if (operand1 !== "" && operand2 !== "") {
        const num1 = parseFloat(operand1);
        const num2 = parseFloat(operand2);
        let result;

        switch (currentOperation) {
            case "+":
                result = num1 + num2;
                break;
            case "-":
                result = num1 - num2;
                break;
            case "x":
                result = num1 * num2;
                break;
            case "/":
                if (num2 !== 0) {
                    result = num1 / num2;
                } else {
                    result = "Erro";
                }
                break;
            default:
                result = "Erro";
                break;
        }

        display.value = result;
        operand1 = result.toString();
        operand2 = "";
        currentOperation = "";
    }
});

// Manipulador de evento para o botão "C" (limpar)
const clearButton = document.getElementById("clear");
clearButton.addEventListener("click", () => {
    operand1 = "";
    operand2 = "";
    currentOperation = "";
    display.value = "";
});
