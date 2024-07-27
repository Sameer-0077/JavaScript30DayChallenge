class Person{
    constructor(first_name, last_name, age){
        this.first_name = first_name;
        this.last_name = last_name;
        this.age = age;
    }

    get full_name(){
        return `${this.first_name} ${this.last_name}`;
    }

    greet = ()=>{
        return `Hello everyone my name is ${this.name} and I'm ${this.age} years old`;
    }

}

const person1 = new Person("John", "Methew", 22);

console.log(person1.full_name);