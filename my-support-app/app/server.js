const http = require('http');

// Create a simple HTTP server
const server = http.createServer((req, res) => {
  // Set the response HTTP header with HTTP status and Content type
  res.writeHead(200, {'Content-Type': 'text/plain'});

  // Send the response body "Hello World"
  res.end('Hello World\n');
});

// Define the port the server will listen on
const port = process.env.PORT || 3000;

// Start the server
server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
