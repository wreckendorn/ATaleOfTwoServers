// Require/import the HTTP module
var http = require("http");

// Define a port to listen for incoming requests
var PORT = 7000;
var PORT2 = 7500;

// Create a generic function to handle requests and responses

function goodRequest(request, response) {

  // Send the below string to the client when the user visits the PORT URL
  response.end("You're looking great today, my man");
}

function badRequest(request, response) {

  // Send the below string to the client when the user visits the PORT URL
  response.end("My man, get your shit together.");
}

// Use the Node HTTP package to create our server.
// Pass the handleRequest function to empower it with functionality.
var goodServer = http.createServer(goodRequest);

// Start our server so that it can begin listening to client requests.
goodServer.listen(PORT, function() {

  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});

var badServer = http.createServer(badRequest);

// Start our server so that it can begin listening to client requests.
badServer.listen(PORT2, function() {

  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT2);
});

// Using the previous example as a guide, create an app that has two web servers.
// One that listens on port 7000 and one that listens on port 7500.
// The one listening on port 7000 will always tell the user something good about themselves.
// The one listening on 7500 will always tell the user something bad about themselves.
// Make sure you create a Github repo and commit this code!
// Bonus

// Look for other ways to expand what your server can do. As possibilities:
// Generate the good/bad phrase randomly from a list of predefined phrases
// Use the twitter package inside the response to also return a random tweet

