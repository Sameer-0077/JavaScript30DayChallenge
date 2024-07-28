function createArrayOfFunc(size){
    const arrayOfFunction  = [];
    for(let i=0; i<size; i++){
        arrayOfFunction.push(function (){
            console.log("Index is : ",i);
        });
    }
    return arrayOfFunction;
}

const indexOfFunction = createArrayOfFunc(10);
indexOfFunction[4]();
indexOfFunction[1]();
indexOfFunction[6]();
indexOfFunction[8]();
