'use strict' 

const http = require('http');
const map = require('through2-map');

const server = http.createServer(function (request, response) {

    //If the request is not a POST request, respond with a message conveying it
    if(request.method != 'POST') {
        return response.end('not a POST request\n') ;
    }
    //The incoming data is converted to a string, modified to uppercaseand is passed through to response
    request.pipe(map(function (chunk) {
        return chunk.toString().toUpperCase();
      })).pipe(response);
})

server.listen(Number(process.argv[2]));
