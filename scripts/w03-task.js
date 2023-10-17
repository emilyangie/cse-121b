/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */


/* Function Definition - Add Numbers */
function add(number1 , number2) {
    return number1 + number2;
}
  
function addNumbers() {
    let num1 = parseInt(document.querySelector("#add1").value);
    let num2 = parseInt(document.querySelector("#add2").value);
    document.getElementById("sum").value = add(num1 , num2);

}
document.getElementById("addNumbers").addEventListener(`click`, addNumbers);

/* Function Expression - Subtract Numbers */

function subtract(number1 , number2) {
    return number1 - number2;
}
  
function subtractNumbers() {
    let num1 = parseInt(document.querySelector("#subtract1").value);
    let num2 = parseInt(document.querySelector("#subtract2").value);
    document.getElementById("difference").value = subtract(num1 , num2);

}
document.getElementById("subtractNumbers").addEventListener(`click`, subtractNumbers);

/* Arrow Function - Multiply Numbers */
const multiply = (number1, number2) => number1 * number2;
const multiplyNumbers = () => {
  let num1 = parseInt(document.querySelector("#factor1").value);
  let num2 = parseInt(document.querySelector("#factor2").value);
  let result = multiply(num1, num2);
  document.querySelector("#product").value = result;

}
document.querySelector("#multiplyNumbers").addEventListener(`click`, multiplyNumbers);


/* Open Function Use - Divide Numbers */
function divide(number1 , number2) {
    return number1 / number2;
}
  
function divideNumbers() {
  let dividend = parseInt(document.querySelector("#dividend").value);
  let divisor = parseInt(document.querySelector("#divisor").value);
  let result = divide(dividend, divisor);
  document.querySelector("#quotient").value = result;

}
document.querySelector("#divideNumbers").addEventListener(`click`,divideNumbers);


/* Decision Structure */
let newDate = new Date();
let currentYear ;
currentYear = newDate.getFullYear();
document.getElementById("year").innerHTML = currentYear;


/* ARRAY METHODS - Functional Programming */
const numbersArray = [1,2,3,4,5,6,7,8,9,10,11,12,13];

/* Output Source Array */
document.querySelector("#array").textContent = numbersArray;

/* Output Odds Only Array */
document.querySelector("#odds").textContent = numbersArray.filter(number => number % 2);

    
/* Output Evens Only Array */
document.getElementById("evens").innerHTML = numbersArray.filter(evenNumbers);
function evenNumbers (number){
    return number % 2 === 0;
}

/* Output Sum of Org. Array */
document.querySelector("#sumOfArray").textContent = numbersArray.reduce((sum, number) => sum + number, 0);



/* Output Multiplied by 2 Array */
document.querySelector("#multiplied").textContent = numbersArray.map(number => number * 2);


/* Output Sum of Multiplied by 2 Array */
document.querySelector("#sumOfMultiplied").textContent = numbersArray.map(number => number * 2).reduce((sum, number) => sum + number, 0);
