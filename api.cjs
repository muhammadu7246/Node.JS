const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    if (req.url === "/") {

        fs.readFile(`${__dirname}/Api.json`, 'utf-8', (err, data) => {
            if (err) {
                res.writeHead(500, { "content-type": "text/plain" });
                res.end("Connection Error");
            } else {
                res.writeHead(200, { "content-type": "application/json" });
                res.end(data);
            }
        });

    } else if (req.url === "/about") {
        res.setHeader("Content-Type", "text/html");
        return res.end("<h1>About</h1>");

    } else if (req.url === "/User") {
        res.setHeader("Content-Type", "text/html");
        return res.end("<h1>User</h1>");

    } else if (req.url === "/contact") {
        res.setHeader("Content-Type", "text/html");
        return res.end("<h1>Contact</h1>");

    } else {
        res.writeHead(404, { "content-type": "text/html" });
        return res.end("<h1>404 Page Not Found</h1>");
    }
});

// listening on port 3000
server.listen(3000, () => {
    console.log("Server is running on port 3000");
});
