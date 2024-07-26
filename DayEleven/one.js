function task1 (callback) {
    setTimeout(()=>{
        console.log('Set Time out called');
        console.log("Task1");
        callback();

    },2000)
    console.log("Call back called");
    callback();
}

function task2(){
    console.log('Task2');
}

task1(task2);