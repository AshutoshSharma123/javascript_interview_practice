// a function that takes a parameter 
let printDetails = function (city, village) {

    console.log(`Hello i am ${this.name} and i am ${this.age} years old, i am from ${city} and my village is ${village}`);
}
person1 = {
    name: 'John',
    age: 21,

}
person2 = {
    name: 'nikki',
    age: 20
}
printDetails.call(person1, 'Jammu', 'Bishnah') // in universal call the object is taken forst and the the parameter i.e. the city name here
printDetails.call(person2, 'Jammu', 'Bishnah') // in universal call the object is taken forst and the the parameter i.e. the city name here
printDetails.apply(person1, ['Jammu', 'Bishnah']) // in universal apply the object is taken forst and the the parameter i.e. the city name here but using arrays
printDetails.apply(person2, ['Jammu', 'Bishnah']) // in universal apply the object is taken forst and the the parameter i.e. the city name here but using arrays



// person1.printDetails.call(person2);
