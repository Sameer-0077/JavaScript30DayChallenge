const arr =  [
    [0,1,2,3],
    [4,5,6,7],
    [8,9,10,11],
    [12,13,14,15]
]

for(let i=0; i<arr.length; i++){
    let element = '';
    for(let j=0; j<arr[i].length; j++){
       element += arr[i][j];
       element += " ";
    }
    console.log(element);
}