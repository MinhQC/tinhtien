let resultField = document.getElementById("result");

function clearResult() {
    resultField.value = "";
}

function appendNumber(number) {
    resultField.value += number;
}

function appendOperator(operator) {
    resultField.value += " " + operator + " ";
}

function calculate() {
    try {
        resultField.value = eval(resultField.value);
    } catch (e) {
        resultField.value = "Error";
    }
}
