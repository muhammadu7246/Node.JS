const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {

    const rstream = fs.createReadStream("Data.txt");

    rstream.pipe(res);

});
// run on http://localhost:3100/
// Set the server to listen on port 3000

server.listen(3100, () => {

    console.log(`Server is running on port 3100`);

});