// Get element for DOM
const buttonNumbers = document.getElementsByName('Data-number');
const buttonOperations = document.getElementsByName('Data-operations');
const buttonEqual = document.getElementsByName('Data-equal')[0];
const buttonDeleted = document.getElementsByName('Data-deleted')[0];
var result = document.getElementById("result");

var operationCurrent = '';
var operationPrevious = '';
var operations = undefined;

// Add events to elements
buttonNumbers.forEach(function (button) { // call element fot array of number buttons
    button.addEventListener('click', function () { // call function for add number
        // alert(button.innerText); // Check event
        addNumber(button.innerText);
    })
})

buttonOperations.forEach(function (button) {
    button.addEventListener('click', function () {
        selectOperation(button.innerText);
    })
})

buttonEqual.addEventListener('click', function () {
    calculate();
    updateDisplay();
})

buttonDeleted.addEventListener('click', function () {
    clear();
    updateDisplay();
})

function addNumber(num) {
    operationCurrent = operationCurrent.toString() + num.toString();
    updateDisplay();
}

function updateDisplay() {
    result.value = operationCurrent;
}

function clear() {
    operationCurrent = '';
    operationPrevious = '';
    operations = undefined;
}

clear();

function selectOperation(oper) {
    if (operationCurrent === '') return;
    if (operationPrevious !== '') {
        calculate();
    }
    operations = oper.toString();
    operationPrevious = operationCurrent;
    operationCurrent = '';
}

function calculate() {
    var calc;
    const previous = parseFloat(operationPrevious);
    const current = parseFloat(operationCurrent);
    if (isNaN(previous) || isNaN(current)) return;
    switch (operations) {
        case '+':
            calc = previous + current;
            break;
        case '-':
            calc = previous - current;
            break;
        case 'x':
            calc = previous * current;
            break;
        case '/':
            calc = previous / current;
            break;
        default:
            return;
    }
    operationCurrent = calc;
    operations = undefined;
    operationPrevious = '';
}
