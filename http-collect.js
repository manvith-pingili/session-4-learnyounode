'use strict'

const http = require ('http');

/*
bl(buffer list) will collect the data when a stream is piped into them.
Once the stream has ended, a callback will be fired with the data. 
*/
const bl = require('bl');

http.get(process.argv[2], function (response) {
    response.pipe(bl(function (err, data) {
      if (err) {
        return console.error(err);
      }
      data = data.toString();
      console.log(data.length);
      console.log(data);
    }))
  }).on('error', console.error)