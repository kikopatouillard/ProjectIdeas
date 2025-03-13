// Creating a basic server using Node.js
const http = require('http');

// Creating an HTTP server
const server = http.createServer((req, res) => {
  // Setting the status code to 200 OK
  res.statusCode = 200;
  // Sending a response back to the client
  res.end('Hello from Node.js!');
});

// Listening for connections on port 8080
server.listen(8080, () => {
  console.log(`Server started on port ${server.address().port}`);
});
