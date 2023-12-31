const { log } = require('console');
const fs = require('fs');
console.log('First line')

let data = fs.readFileSync("file.txt")

console.log('this is data ---------> ' + data);

console.log('2nd line')
