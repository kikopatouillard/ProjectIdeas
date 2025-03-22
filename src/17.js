const express = require('express');
const app = express();
app.use(express.static(__dirname + '/public'));

app.get('/index', (req, res) => {
  res.send('Hello World!');
});

app.listen(3000);
