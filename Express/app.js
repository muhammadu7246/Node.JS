const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('first APP');
});


app.get('/about', (req, res) => {
  res.send('About APP');
});




app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
