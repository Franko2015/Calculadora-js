let number1 = [];
let number2 = [];
let opt = "";
const total = document.getElementById('total');
const totalAnterior = document.getElementById('totalAnterior');

function update() {
    if (opt === "=" || opt === "<" || opt === "AC") {
        this.total.innerHTML = number1.join("");
    } else {
        this.total.innerHTML = number1.join("") + opt + number2.join("");
    }
}

function number(id) {
    if (opt !== "") {
        number2.push(id);
    } else {
        number1.push(id);
    }
    this.update();
}

function operation(ope) {
    if (number1.length > 0 && number2.length > 0 && opt !== "") {
        this.evaluation();
    }
    opt = ope;
    this.update();
}

function evaluation() {
    if (number1.length > 0 && number2.length > 0 && opt !== "") {
        const num1 = parseFloat(number1.join(""));
        const num2 = parseFloat(number2.join(""));
        let result;
        switch (opt) {
            case '+':
                result = num1 + num2;
                break;
            case '-':
                result = num1 - num2;
                break;
            case '*':
                result = num1 * num2;
                break;
            case '/':
                if (num2 !== 0) {
                    result = num1 / num2;
                } else {
                    result = "Error";
                }
                break;
            case '%':
                if (num2 !== 0) {
                    result = num1 % num2;
                } else {
                    result = "Error";
                }
                break;
            default:
                result = "Error";
        }
        number1 = [result.toString()];
        number2 = [];

        this.update();
    }
}

function deleteAll() {
    number1 = [];
    number2 = [];
    opt = "";

    this.update();
}

function deleteCharacter() {

    if (number2.length > 0) {
        number2.pop();
    } else if (operation.length > 0) {
        opt = "";
    } else if (number1.length > 0) {
        number1.pop();
    }

    this.update();
}
