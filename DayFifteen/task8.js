function memoizedFact(factorialfun){
    const cache = {}
   return function (key){
    if(cache[key] !== undefined){
        return cache[key];
    }
    const result = factorialfun(key);
    cache[key] = result;
    return cache[key];
   }
}

function calFactorial(num){
    console.log('Computing Factorial.........');
    for(let i=num-1; i>1; i--){
        num = num * i;
    }
    return num;
}

const memoizedFunction = memoizedFact(calFactorial);
console.log(memoizedFunction(5));
console.log(memoizedFunction(5));
console.log(memoizedFunction(4));
console.log(memoizedFunction(6));
console.log(memoizedFunction(5));