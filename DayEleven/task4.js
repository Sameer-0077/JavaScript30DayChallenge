function asyncAwait (message, delay){
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            // console.log('This is Promise');
            resolve(message);
        }, delay);
    })
}

(async () => {
    console.log("Getting Promise 1.........");
    let result = await asyncAwait("Promise 1 Resolved", 2000);
    console.log(result);
    console.log("Getting Promise 2.........");
    result = await asyncAwait("Promise 2 Resolved", 2000);
    console.log(result);
    console.log("Getting Promise 3.........");
    result = await asyncAwait("Promise 3 Resolved", 2000);
    console.log(result);
})();
