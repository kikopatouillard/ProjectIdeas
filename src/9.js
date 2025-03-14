// Create a new Express server
const express = require('express');
const app = express();

// Define a route for the root URL '/'
app.get('/', (req, res) => {
  // Send back a response with a status code of 200 and some text
  res.status(200).send('Hello from Node!');
});

// Start the server on port 3000
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}...`);
});
