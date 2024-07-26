export function sum(num1, num2){
    return num1 + num2;
}

export function diff(num1, num2){
    if(num1 > num2){
        return num1 - num2;
    }
    else{
        return num2 - num1;
    }
}

export function product(num1, num2){
    return num1 * num2;
}