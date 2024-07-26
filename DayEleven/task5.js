function asyncAwait (){
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            reject("Error!")
        }, 2000);
    })
}

(async ()=>{
    try {
        let result = await asyncAwait();
        console.log(result);
    } catch (error) {
        console.log(error);
    }
})();