'use strict'

const http = require('http');
const bl = require('bl');
const arr = [];
let count = 0;

//function that prints the data to the console
function print () {
    for(let i =0; i<3; i++) {
        console.log(arr[i]);
    }
}

//function to stores the content from the different URL's in an array
function getHttp (index) {
    http.get(process.argv[2 + index], function (response) {
        response.pipe(bl(function (err, data) {
            if(err) {
                console.error(err);
            }
            arr[index] = data.toString();
            count++;

            if(count===3) {
                print();
            }
        }))
    })
}

for(let i=0; i<3; i++) {
    getHttp(i) ;
}
