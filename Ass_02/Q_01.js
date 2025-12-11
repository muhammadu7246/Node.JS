const express = require('express');
const app = express();
const port = 3000;

app.use((req, res, next) => {
    console.log(req.method, req.path);
    next();
});
function requestTimeLogger(req, res, next) {
    console.log("welcome to Q: 01")
    next();
}
app.get('/', requestTimeLogger, (req, res) => {
    res.send('Welcome To home Page');
});

app.get('/time', requestTimeLogger, (req, res) => {
    res.send(`Request Sent at: ${new Date()} \n`);
});
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});

// Result:

// on this url: http://localhost:3000/time

// OutPut: => {Thu Dec 11 2025 03:01:59 GMT-0800 (Pacific Standard Time)}