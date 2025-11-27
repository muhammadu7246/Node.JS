const http = require('http');

const server = http.createServer((req, res) => {
if (req.url === "/") {
    res.setHeader("Content-Type","text/html");
    res.write("<h1>Muhammad Usama</h1>");
    res.end();
}
else if (req.url === "/about") {
    res.setHeader("Content-Type","text/html");
    res.write("<h1>About</h1>");
    res.end();
}
if (req.url === "/contact") {
    res.setHeader("Content-Type","text/html");
    res.write("<h1>Contect</h1>");
    res.end();
}
});

// Set the server to listen on port 3000

server.listen(3000, () => {

  console.log(`Server is running on port 3000`);

});