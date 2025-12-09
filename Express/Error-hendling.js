const express = require('express');
const app = express();

app.use((err, req, res, next) => {
  console.log('Error has been caughted:', err.message);
  res.status(err.status || 500).json({
    success: false,
    error: err.message || 'Internal Server Error'
  });
});

// === Default route for testing ===
app.get('/', (req, res) => {
  res.send('Welcome to the Home Page');
});

// Start server
app.listen(3000, () => {
  console.log('Server started at http://localhost:3000');
});


// Result:

// http://localhost:3000/ ok (but)

// http://localhost:3000/hi {in Console}

// Connecting to 'http://localhost:3000/.well-known/appspecific/com.chrome.devtools.json' violates the following Content Security Policy directive: "default-src 'none'". The request has been blocked. Note that 'connect-src' was not explicitly set, so 'default-src' is used as a fallback.

// hi:1  Failed to load resource: the server responded with a status of 404 (Not Found)
