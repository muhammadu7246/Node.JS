const express = require('express');
const app = express();
const port = 3000;

app.use((req, res, next) => {
  console.log(req.method, req.path);
  next();
});

app.get('/', (req, res) => {
  res.send('first APP');
});


app.get('/about', (req, res) => {
  res.send('About APP');
});




app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});


// Result

// Server running at http://localhost:3000
// GET /
// GET /
// GET /
// GET /about
// GET /home
// GET /about