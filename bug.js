const http = require('http');

const server = http.createServer((req, res) => {
  // Unexpected error handling
  try {
    // Simulate an error that throws an exception
    throw new Error('Simulated error');
  } catch (err) {
    // The error is caught, but not handled properly.  
    // The response is not sent back to the client, leading to a hanging request.
    console.error(err);
  }
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});