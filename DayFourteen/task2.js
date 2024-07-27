class Person{
    name = "John";
    age = 20;
    greet = ()=>{
        return `Hello everyone my name is ${this.name} and I'm ${this.age} years old`;
    }
    updateAge = (newAge)=>{
        this.age = newAge;
        console.log("New age is : ",this.age);
    }
}

const person1 = new Person();

console.log(person1.greet());
console.log(person1.updateAge(24));