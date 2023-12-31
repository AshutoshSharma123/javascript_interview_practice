

const fs = require('fs');



console.log('First line')

fs.readFile("file1.txt", cb1)

function cb1(err, data) {
    if (err) {
        console.log(err);
    }
    console.log("first file " + data);
}
fs.readFile("file2.txt", cb2)

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


console.log('2nd line')
