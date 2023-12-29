person1 = {
    name: 'John',
    age: 21,
    printDetails: function () {

        console.log(`Hello i am ${this.name} and i am ${this.age} years old`);
    }
}
person2 = {
    name: 'nikki',
    age: 20
}

person1.printDetails()
person1.printDetails.call(person2);
