const PI = 3.14159;
const star = "Night";

function sum(num1, num2){
    return num1 + num2;
}

function diff(num1, num2){
    if(num1 > num2){
        return num1 - num2;
    }
    else{
        num2 - num1;
    }
}

export const utils = {PI, star, sum, diff};