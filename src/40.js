let express = require('express');
let app = express();
let db = require('./db'); // Assuming you have a database setup

app.use(express.json());

// Route to fetch data from the database
app.get('/api/data', (req, res) => {
  let result = [];
  for (let i = 0; i < 10; i++) {
    result.push(`Data ${i + 1}`);
  }
  res.json(result);
});

// Start server
app.listen(3000, () => console.log('Server is running on http://localhost:3000'));
