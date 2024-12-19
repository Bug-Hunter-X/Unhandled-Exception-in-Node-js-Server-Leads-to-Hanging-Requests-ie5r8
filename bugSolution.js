const http = require('http');

const server = http.createServer((req, res) => {
  try {
    // Simulate an error that throws an exception
    throw new Error('Simulated error');
  } catch (err) {
    // Handle the error properly by sending a response to the client
    console.error(err); 
    res.statusCode = 500; // Set status code to 500 (Internal Server Error)
    res.end('Internal Server Error');
  }
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});