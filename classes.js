class Person {
    constructor(_name, _age) {
        this.name = _name;
        this.age = _age;
    }

    welcome() {
        console.log(`Welcome to ${this.name}`)

    }
}




let person1 = new Person("Ashu", 22)
let person2 = new Person("Aryan", 22)
let person3 = new Person("Ash", 21)
let person4 = new Person("Adi", 22)
let person5 = new Person("Ajay", 22)
console.log(person1);
console.log(person2);
console.log(person3);
console.log(person4);
console.log(person5);

person2.welcome()