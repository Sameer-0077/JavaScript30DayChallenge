let num1 = 10;
let num2 = 30;
let num3 = 20;

if(num1 > num2){
    if(num1 > num3){
        console.log(num1 + " is largest");
    }
    else{
        console.log(num3 + " is largest");
    }
}
else if(num2 > num1){
    if(num2 > num3){
        console.log(num2 + " is largest");
    }
    else{
        console.log(num3 + " is largest");
    }
}
else{
    if(num3 > num2){
        console.log(num3 + " is largest");
    }
    else{
        console.log(num2 + " is largest");
    }
}
