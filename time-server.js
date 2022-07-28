'use strict'

const net = require('net');

//function to add zero at the beginning if the value is single digit
function addZero(n) {
    if(n<10) {return '0' + n;}
    else {return n;}
}

//function that returns the time in the required format
function time() {
    const t = new Date();
    return t.getFullYear() + '-' +
        addZero(t.getMonth()+1) + '-' +
        addZero(t.getDate()) +  ' ' +
        addZero(t.getHours()) + ':' +
        addZero(t.getMinutes());
}

const server = net.createServer(function (socket) {
    socket.end(time() + '\n');
});

server.listen(Number(process.argv[2]));