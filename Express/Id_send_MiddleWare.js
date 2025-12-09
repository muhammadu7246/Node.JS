const express = require('express');
const app = express();

// Middleware that checks if product ID param is valid number
function validateProductId(req, res, next) {
  const id = parseInt(req.params.id);
  if (isNaN(id) || id <= 0) {
    return res.status(400).json({ success: false, error: 'Invalid product ID' });
  }
  next();
}

// Route uses route-level middleware validateProductId
app.get('/product/:id', validateProductId, (req, res, next) => {
  const productId = parseInt(req.params.id);

  if (productId !== 1) {
    const err = new Error('Product not found');
    err.status = 404;
    return next(err);
  }

  res.json({ id: productId, name: 'Sample Product' });
});

// Start server
app.listen(3000, () => {
  console.log('Server started at http://localhost:3000');
});