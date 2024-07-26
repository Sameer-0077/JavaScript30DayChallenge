
function createPromise(message) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
          resolve(message + " Resolved");
        //   reject('Error! Promise Rejected')
      }, 2000);
    });
  }
  

  const promise1 = createPromise('Promise 1');
  const promise2 = createPromise('Promise 2');
  const promise3 = createPromise('Promise 3');
  

  Promise.race([promise1, promise2, promise3])
    .then(value => {
      console.log(value);
    })
    .catch(error => {
      console.log(error);
    });
  