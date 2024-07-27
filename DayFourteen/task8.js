class Person{
    constructor(first_name, last_name, age){
        this.first_name = first_name;
        this.last_name = last_name;
        this.age = age;
    }

    set full_name(name){
        const [first_name, last_name] = name.split(" ");
        this.first_name = first_name;
        this.last_name = last_name;
        console.log(`Upadated name is : ${this.first_name} ${this.last_name}`); 
    }

    greet = ()=>{
        return `Hello everyone my name is ${this.name} and I'm ${this.age} years old`;
    }

}

const person1 = new Person("John", "Methew", 22);



person1.full_name = "Ravi Verma";
