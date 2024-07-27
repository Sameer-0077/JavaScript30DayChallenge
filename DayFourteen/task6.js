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
    static numOfStd = 0;
    constructor(name, age, id){
        super(name, age);
        this.id = id;
        Student.numOfStd++;
        console.log("Total number of Student is : ", Student.numOfStd); 
    }
    getStdId = ()=>{
        return "Student Id is : " + this.studentId;
    }
}

const student1 = new Student("John", 20, 'John@123');
const student2 = new Student("Ravi", 22, 'Ravi@234');
const student3 = new Student("Jenny", 21, "Jenny@345");
