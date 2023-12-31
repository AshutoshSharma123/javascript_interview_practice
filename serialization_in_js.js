

// const fs = require('fs');



// console.log('First line')

// fs.readFile("file1.txt", cb1)

// function cb1(err, data) {
//     if (err) {
//         console.log(err);
//     }
//     console.log("first file " + data);
// }
// fs.readFile("file2.txt", cb2)

// function cb2(err, data) {
//     if (err) {
//         console.log(err);
//     }
//     console.log(" file " + data);
// }
// fs.readFile("file3.txt", cb3)

// function cb3(err, data) {
//     if (err) {
//         console.log(err);
//     }
//     console.log(" file " + data);
// }
// console.log('2nd line')


// the above execution of code is asynchronous but sometimes we need to wait for the some task to happen in serial way then only start the asynchronous working for that we can do the reading of the functions of other files of asynchronous task dependebnt on some other file then only they will run and become selialized.





const fs = require('fs');



console.log('First line')

fs.readFile("file1.txt", cb1)

function cb1(err, data) {
    if (err) {
        console.log(err);
    }
    console.log("first file " + data);
    fs.readFile("file2.txt", cb2) // here second file will only get read and run when first file is runned, so the first and 2nd file is in serialized manner which means that 2nd will always run after 1st is executed and 3rd is not  and all  are running in parallel i.e. asynchronous
}


function cb2(err, data) {
    if (err) {
        console.log(err);
    }
    console.log(" file " + data);
}
fs.readFile("file3.txt", cb3)

function cb3(err, data) {
    if (err) {
        console.log(err);
    }
    console.log(" file " + data);
}
