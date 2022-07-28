'use strict'

const http = require('http');

//The http.get() method is a shortcut for simple get requests
http.get(process.argv[2], function (response) {
    response.setEncoding('utf8');
    response.on('data', console.log);
    response.on('error', console.error);
}).on('error', console.error)