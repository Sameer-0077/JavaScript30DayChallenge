function fraction(num1 ,num2){
    if(num2 === 0){
        throw new Error("Denominator is Zero")
    }
    return num1 / num2;
}

try {
    const res = fraction(5,0);
    console.log(res);
} catch (error) {
    console.log(error);
}