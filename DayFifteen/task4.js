function user(name){
    const userName = name;
    return function greeting(){
        console.log(`Hello ${userName}`);
    }
}

const greetUser1 = user("Ravi");
greetUser1();
const greetUser2 = user("John");
greetUser2();