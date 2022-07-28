'use strict'

const fs = require('fs');

//use fs.readFile() and collect the value from a callback function that we pass in as a second argument
fs.readFile(process.argv[2], function(err, data) {
    if(err) {
        return console.log(err);
    }
    const len = data.toString().split('\n').length-1;
    console.log(len);
})