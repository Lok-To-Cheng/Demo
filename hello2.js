console.log("hello world!")

http = require("http")

http.createServer(function(request, response) {
  response.writeHead(200, ); // status code '200' means the page is working
  response.end('Hello World\n'); 
}).listen(204) // the port number doesn't matter much

console.log("Server running at http://127.0.0.1:204/")