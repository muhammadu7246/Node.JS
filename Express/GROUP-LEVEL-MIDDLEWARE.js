const express = require('express');
const app = express();

const adminRouter = express.Router();

adminRouter.use((req, res, next) => {
  console.log('Admin has been enter');
  next();
});

adminRouter.get('/dashboard', (req, res) => {
  res.send('Dashboard');
});

adminRouter.get('/About', (req, res) => {
  res.send('About Admin');
});

app.use('/admin', adminRouter);

app.get('/', (req, res) => {
  res.send('Home Page');
});

app.listen(3000, () => {
  console.log('Server started at http://localhost:3000');
});



// Result :

// http://localhost:3000/

// http://localhost:3000/admin

// http://localhost:3000/admin/dashboard

// http://localhost:3000/admin/About
