// let car1 ={
//     name: 'John',
//     company: 'BMW',
//     color:'green'
// }
// let car2 ={
//     name: 'John',
//     company: 'BMW',
//     color:'green'
// }


// like the above car obejcts if have more than  100 cars so i dont want to make separate objects for each car, i will instead make a template for car and use it again and again


// here the constructors condcept will come 

function createCar(_name, _company, _color) {
    this.name = _name;   // here this leyword is pointing to empty object i.e. {   } and this.name means the key name in empty object which points to -> _name from the CreateCar function and similarly for the company ans wells as for the car.




    this.color = _color;
    this.company = _company;



    // the info is supplied over it 

    this.drive = function () {
        console.log(`i am driving ${this.name}`);
    }
}

let car1 = new createCar('x4', 'bmw', "grey");
let car2 = new createCar('S4', 'merc', "black");
let car3 = new createCar('charger', 'dodge', "red");
// when car function runs , the function parameters are supplied to the `createCar

console.log(car1)
console.log(car2)
console.log(car3)
car1.drive()




