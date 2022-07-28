'use stict'
//loading the fs module and storing it an a variable
const fs = require('fs');

//read the file and store it in the buf variable
const buf = fs.readFileSync(process.argv[2]);

//convert the buffer object into a string
const str = buf.toString();

//split the string into an array using '\n' as a delimiter
const arr = str.split('\n');

//count the array elements
let num = arr.length-1;

console.log(num);