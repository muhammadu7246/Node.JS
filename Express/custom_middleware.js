const express = require('express');
const app = express();
const port = 3000;

app.use((req, res, next) => {
    console.log(req.method, req.path);
    next();
});
function sigin(req, res, next) {
    console.log("welcome")
    next();
}
app.get('/', sigin, (req, res) => {
    res.send('Custom Middleware');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

// Result:

// console: welcome
// Body: 