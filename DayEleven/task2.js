let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("Error : Promise rejected!");
    }, 2000);
}).catch((res)=>{
    console.log(res);
})