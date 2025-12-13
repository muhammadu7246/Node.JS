// const express = require('express')
// const app = express()
// const port = 3000
// const path = require("path");
// app.use(express.json());
// app.use(express.urlencoded({extended:true}));
// app.use(express.static(path.join(__dirname,'public')));
// app.set('view engine','ejs');
// app.get('/', function (req, res) {
//   res.render('index');
// });

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })















// app.js

// Required modules
const express = require('express');
const path = require('path');

// Create Express app
const app = express();

// Set up static file serving
app.use(express.static(path.join(__dirname, 'assets')));

// Set up EJS as the view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Define route for the homepage
app.get('/', (req, res) => {
    res.render('index');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});