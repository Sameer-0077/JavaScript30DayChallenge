function checkNumber(num){
    if(typeof num !== 'number'){
        throw new Error('Not a number');
    }
    return true;
}

try {
    let isNumber = checkNumber('2a');
    console.log(isNumber);
} catch (error) {
    console.log(error);
}