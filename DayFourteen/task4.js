class Person{
   constructor(name, age){
    this.name = name;
    this.age = age;
   }
    greet = ()=>{
        return `Hello everyone my name is ${this.name} and I'm ${this.age} years old`;
    }
}

class Student extends Person{
    constructor(name, age){
        super(name, age);
    }
    studentId = this.name+"@123";
    getStdId = ()=>{
        return "Student Id is : " + this.studentId;
    }
    greet = ()=>{
        return `Hello everyone My name is ${this.name}, I'm ${this.age} year old and my Id is ${this.studentId}`;
    }
}

const student1 = new Student("Ravi", 22);
person1 = new Person("John",20);

console.log(person1.greet());
console.log(student1.greet());
