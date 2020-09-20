// Get element for DOM
const buttonNumbers = document.getElementsByName('Data-number');
const buttonOperations = document.getElementsByName('Data-operations');
const buttonEqual = document.getElementsByName('Data-equal')[0];
const buttonDeleted = document.getElementsByName('Data-deleted')[0];
var result = document.getElementById("result");

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
    actualizarDisplay();
})

buttonDeleted.addEventListener('click', function () {
    clear();
    actualizarDisplay();
})