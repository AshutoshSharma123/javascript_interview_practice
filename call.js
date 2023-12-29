// a function that takes a parameter 
let printDetails = function (city) {

    console.log(`Hello i am ${this.name} and i am ${this.age} years old, i am from ${city}`);
}
person1 = {
    name: 'John',
    age: 21,

}
person2 = {
    name: 'nikki',
    age: 20
}
printDetails.call(person1, 'Jammu') // in universal call the object is taken forst and the the parameter i.e. the city name here
// person1.printDetails.call(person2);
