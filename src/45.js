// Example Node.js server code

const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public'));

app.get('/home', (req, res) => {
  res.send(`Hello, you are logged in as ${process.env.USERNAME}`);
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
