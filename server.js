const http = require('http');
const static = require('node-static');
const file = new static.Server('.');

function accept(request, response) {

  if (request.url == '/vote.txt') { 
    setTimeout(function() {
      response.end('Your vote is accepted: ' + new Date());
    }, 2000);
  } else {
    file.serve(request, response);
  }
}

// ------ run -------
http.createServer(accept).listen(5000);
console.log("Server running at http://localhost:5000");
