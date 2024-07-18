const findMax = function(number1, number2){
    if(number1 > number2){
        return number1;
    }
    else if(number1 < number2){
        return number2;
    }
    else{
        return "equal";
    }
}
console.log(findMax(12, 12));