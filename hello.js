console.log("hello world!") // console log messages won't appear on the webpage

http = require("http")

http.createServer(function(request, response) {
  response.writeHead(200, ); // status code '200' means the page is working
  response.end('Hello World\n I rate this webpage a '+Math.floor(Math.random()*100)+' out of 100.'); // displayed on the page
}).listen(2048) // the port number doesn't matter much

console.log("Server running at http://127.0.0.1:2048/")