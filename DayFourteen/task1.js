class Person{
    name = "John";
    age = 20;
    greet = ()=>{
        return `Hello everyone my name is ${this.name} and I'm ${this.age} years old`;
    }
}

const person1 = new Person();

console.log(person1.greet());