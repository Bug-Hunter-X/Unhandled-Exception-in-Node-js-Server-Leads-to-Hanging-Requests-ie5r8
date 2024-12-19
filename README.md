# Unhandled Exception in Node.js Server
This example demonstrates a common error in Node.js where an unhandled exception within a try-catch block leads to hanging requests. The server encounters an error, but the response is never sent to the client due to improper error handling within the catch block. This results in hanging requests that never complete. 

## How to reproduce the bug
1. Clone this repository.
2. Navigate to the repository's directory.
3. Run `node bug.js`.
4. Send a request to `http://localhost:3000`. The request will hang.

## How to solve the bug
The provided solution file (`bugSolution.js`) demonstrates the correct way to handle exceptions in a Node.js server to avoid hanging requests. By sending an appropriate error response to the client, the request is properly handled, preventing hanging requests. 