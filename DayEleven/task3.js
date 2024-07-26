function fetchData(message, delay){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve(message);
        }, delay);
    })
}
console.log("Fetching Promise 1.........");
fetchData("Promise 1 is Resolved", 2000).then((message) => {
    console.log(message);
    console.log("Fetching Promise 2.........");
    return fetchData("Promise 2 is Resolved", 2000);
}).then((message) =>{
    console.log(message);
    console.log("Fetching Promise 3.........");
    return fetchData("Promise 3 is resolved", 2000);
}).then((message) => {
    console.log(message);
})