function callNTimes (func, num){
    for(let i=0; i<num; i++)
    func();
}

function hello(){
    console.log("Hello");
}

console.log(callNTimes(hello, 5));