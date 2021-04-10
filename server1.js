const http = require('http');
const static = require('node-static');
const file = new static.Server('.');

function accept(request, response) {

  if (request.url == '/books.json') { 
    setTimeout(function() {
      file.serve(request, response);
    }, 2000);
  } else {
    file.serve(request, response);
  }
}

// ------ run -------
http.createServer(accept).listen(5000);
console.log("Server running at http://localhost:5000");
