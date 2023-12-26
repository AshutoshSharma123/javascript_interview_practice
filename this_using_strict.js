"use strict";
// console.log(this);



// function abc() {
//     console.log(this)
// }
// abc()



// let obj = {
//     name: "Ashutosh",
//     age: 23,
//     fun: function abc() {
//         console.log(this);
//     }
// }
// obj.fun()


let obj = {
    name: 'ashu',
    age: 22,
    func: function f1() {
        // console.log(this.name, this.age);

        function f2() {
            console.log(this)
        }

        f2()
    }
}
obj.func()