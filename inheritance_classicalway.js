class Person {
    constructor(_name, _age) {
        this.name = _name;
        this.age = _age;

    }
    welcome() {
        console.log(`wlcome aboard ${this.name}`);

    }

}

class Teacher extends Person {
    constructor(_name, _age, _cstrength) {
        super(_name, _age)
        this.class_strength = _cstrength;

    }
    test() {
        super.welcome()
    }

}
class Student extends Teacher {
    constructor(_name, _age, _cstrength, _level) {
        super(_name, _age, _cstrength)
        this.class_level = _level;
    }

}
let person1 = new Person("Ashutosh Sharma", 22)
let teacher1 = new Teacher("Amit Sharma", 32, 50)
let teacher2 = new Teacher("Ajay Sharma", 36, 46)
let student1 = new Student("Arav", 32, 50, "A")

console.log(person1)
console.log(teacher1)
teacher1.test()
teacher2.test()
console.log(student1)


