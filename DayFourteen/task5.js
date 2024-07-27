class Person{
    name = "John";
    age = 20;
    greet = ()=>{
        return `Hello everyone my name is ${this.name} and I'm ${this.age} years old`;
    }

    static staticGreet(){
        return "Hello this is a Static method";
    }
}

// console.log(Person.greet()); 
console.log(Person.staticGreet());