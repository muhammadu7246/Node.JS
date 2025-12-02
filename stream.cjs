const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {

    const rstream = fs.createReadStream("Data.txt");

    rstream.on("data", (c_data) => {
        res.write(c_data);
    });
    rstream.on("end", () => {
        res.end();
    });

});
// run on http://localhost:3100/
// Set the server to listen on port 3000

server.listen(3100, () => {

    console.log(`Server is running on port 3100`);

});