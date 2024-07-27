class Person{
    name = "John";
    age = 20;
    greet = ()=>{
        return `Hello everyone my name is ${this.name} and I'm ${this.age} years old`;
    }
}

class Student extends Person{
    studentId = this.name+"@123";
    getStdId = ()=>{
        return "Student Id is : " + this.studentId;
    }
}

const student1 = new Student();

console.log(student1.greet());
console.log(student1.getStdId());