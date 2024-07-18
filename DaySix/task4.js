const arr = [1,2,3,4,5,6];
let lastElement = arr.length-1;
arr.pop(arr[lastElement]);
for(let i=0; i<arr.length; i++){
    console.log(arr[i]);
}