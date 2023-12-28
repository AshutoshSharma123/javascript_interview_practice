// this is a basic approach 

//function Person(_name, _age) {
//     this.name = _name;
//     this.age = _age;

// }

// let p1 = new Person("Ashutosh Sharma", 22)
// console.log(p1.name)      // so accessing the thinngs in a function or object is easy and not encapsulated
// console.log(p1.age)




function Person(_name, _age) {
    // this.name = _name;
    // var name = _name;
    this.age = _age;
    this.getName = function () {
        return _name
    }
}

let p1 = new Person("Ashutosh Sharma", 22)
//it wont show directly the name as it is encapsulated
console.log(p1);
// we can use functions to encapsulate the key and values and they will only reveal they values if they are invoked
console.log(p1.getName());


