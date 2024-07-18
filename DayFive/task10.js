function composeFunc(func1, func2, value){
    return func2(func1(value));
}

function addTwo(num){
    return num+2;
}

function double(num){
    return num * 2;
}

console.log(composeFunc(addTwo, double, 5));