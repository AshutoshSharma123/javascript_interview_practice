// non strict
//1. 
// console.log(this);  // empty object

//2. using function
// function named() {
//     console.log(this);
// }
// named()



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
