function calFactorial(num){
    let fact = num;
do{
    num--;
    fact = fact * num;
}while(num > 1)
return fact;
}

let factorial = calFactorial(5)

console.log(factorial);