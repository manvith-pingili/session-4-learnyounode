'use strict'

const fs = require("fs");
const path = require('path');

//adding '.' to the second argumentgives us the extname
const ext = '.' + process.argv[3];

fs.readdir(process.argv[2], function(err, list) {
    if(err) {
        return console.log(err);
    }
   list.forEach(function(file) {
    //for each file check if the extname is same as the given one
    if(path.extname(file)==ext) {
        console.log(file);
    }
   })
})