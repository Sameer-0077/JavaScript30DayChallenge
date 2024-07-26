const promise = new Promise((resolve, reject) => {
    const isSuccess = Math.random() > 0.4;
    setTimeout(() => {
        if(isSuccess){
            resolve("Promise Resolved Successfully!");
        }
        else{
        reject("Promise Rejected!")
        }
    }, 500);
})

promise.then((res) => {
    console.log(res);
}).catch((error) => {
    console.log("Caught an Error : ",error);
})