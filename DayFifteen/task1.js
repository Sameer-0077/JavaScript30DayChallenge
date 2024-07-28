function outerFunction(){
    const outerVariable = "This is a Outer Variable";
    return function innerFunction(innerVariable){
        console.log("Outer Variable : ", outerVariable);
        console.log("Inner Variable :", innerVariable);
    }
}

const outerFun = outerFunction();
outerFun("This is Inner Varible");


