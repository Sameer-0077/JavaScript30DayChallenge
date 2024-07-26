function randomPromise(){
    return new Promise((resolve, reject) => {
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
}

async function checkPromise(){
    try {
        const result = await randomPromise();
        console.log(result);
    } catch (error) {
        console.log("Error caught : ", error);
    }
}

checkPromise();