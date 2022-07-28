'use strict'

const fs = require('fs');
const http = require('http');

const server = http.createServer(function (request, response) {
    //.writeHead() is used to write the header of the response
    response.writeHead(200, {'content-type': 'text/plain'});

    //Use fs.createReadStream() method to stream the file contents to the response
    fs.createReadStream(process.argv[3]).pipe(response);
})

server.listen(Number(process.argv[2]));