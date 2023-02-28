// Require the HTTP module
const http = require('http');

// Define a function to handle incoming requests
function handleRequest(request, response) {
  // Set the response status code and headers
  response.writeHead(200, {'Content-Type': 'text/plain'});

  // Send the response body
  response.end('Hello World!');
}

// Create a new HTTP server and listen on port 3000
http.createServer(handleRequest).listen(3000, () => {
  console.log('Server listening on port 3000');
});
