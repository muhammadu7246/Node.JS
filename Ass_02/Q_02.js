const express = require('express');
const app = express();

function validatesecureID(req, res, next) {
  const id = parseInt(req.params.id);
  if (isNaN(id) || id <= 0) {
    return res.status(400).send('Invalid product ID');
  }
  next();
}

app.get('/secure/:id', validatesecureID, (req, res, next) => {
  const secureID = parseInt(req.params.id);

  if (secureID !== 1234) {
    const err = new Error('Enter Your Valid Secure ID');
    err.status = 404;
    return next(err);
  }
  res.send("Welcome, Muhammad Usama");

});


app.listen(3000, () => {
  console.log('Server started at http://localhost:3000\n For Secure ID: http://localhost:3000/secure/1234 \n for another: http://localhost:3000/secure/12345');
});

// Result:

// for regular
// http://localhost:3000/secure


// For Secure ID:
// http://localhost:3000/secure/1234