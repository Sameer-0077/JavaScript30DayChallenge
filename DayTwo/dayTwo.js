
// Activity 1 : Arithmetic Operator

let number1 = 10;
let number2 = 5;

// Task 1
const addTwoNumer = function(num1, num2){
    return num1 + num2;
}
let sum = addTwoNumer(number1, number2);
console.log(`Sum is ${sum}`);

// Task 2
const subtractTwoNumer = function(num1, num2){
    return num1 - num2;
}
let diffrent = subtractTwoNumer(number1, number2);
console.log(`Different is ${diffrent}`);

// Task 3
const MultiplyTwoNumer = function(num1, num2){
    return num1 * num2;
}
let product = MultiplyTwoNumer(number1, number2);
console.log(`Product is ${product}`);

// Task 4
const divideTwoNumer = function(num1, num2){
    return num1 / num2;
}
let fraction = divideTwoNumer(number1, number2);
console.log(`Division is ${fraction}`);

// Task 5
const num1 = 15;
const num2 = 4;
let remainder  = num1 % num2;
console.log("Remainder is ",remainder);


// Activity 2 : Assignment Operator

// Task 6
let num3 = 20;
num3 += 10;
console.log("num3 is ",num3);

// Task 7

let num4 = 30;
num4 -= 15;
console.log("num4 is ",num4);

// Activity 3 : Comparison Operator

// Task 8
const value1 = 20;
const value2= 30;

const isValue1Greater = value1 > value2;
console.log(`${value1} > ${value2} is ${isValue1Greater}`);

// Task 9
const isValue1Samller = value1 < value2;
console.log(`${value1} < ${value2} is ${isValue1Greater}`);

// Task 10

let num5 = 5;
let num6 = '5';

console.log("The reult of num5 == num6 is ",num5 == num6);
console.log("The reult of num5 === num6 is ",num5 === num6);

// Activity 4 : Logical Operator

// Task 11

const score1 = 200;
const score2 = 240;



// Activity 5 : Ternary Operator

const val = 5;

const check = val > 0 ? "Positive" : "Negative";
console.log(check); 