function isPositive (number){
    if(number === 0){
        console.log("Number is Zero");
        return;
    }
    if(number > 0){
        console.log("Number is Positive");
        return;
    }
    if(number < 0){
        console.log("Number is Negative");
        return;
    }
}


isPositive(0);
isPositive(10);
isPositive(-10);

