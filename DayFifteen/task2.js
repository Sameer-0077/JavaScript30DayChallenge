function closure(){
    let counter = 0;
    return {
        increment : () => {
            counter++;
        },
        showCounterValue : ()=>{
            console.log("Counter value is : ",counter);
        }
    }
}

const newCounter = closure();

newCounter.increment();
newCounter.showCounterValue();

newCounter.increment();
newCounter.increment();
newCounter.showCounterValue();

