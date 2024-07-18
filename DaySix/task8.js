const arr = [1,2,3,4,5,6,7,8,9,10];

const evenArr = arr.filter((number) => number % 2 === 0);

evenArr.forEach(element => {
    console.log(element);
});