const http = require("http");
const fs = require("fs");

const Server = http.createServer((req, res) => {
    if (req.url ==="/" || req.url ==="home"||req.url ==="index") {
        res.writeHead(200,{'content-type':'text/html'})
        fs.createReadStream(__dirname+'/index.html').pipe(res)
    }else if(req.url ==="/home"){
    res.writeHead(200,{'content-type':'text/html'})
        fs.createReadStream(__dirname+'/home.html').pipe(res)
        
    }
    else if(req.url ==="/menu"){
    res.writeHead(200,{'content-type':'text/html'})
        fs.createReadStream(__dirname+'/menu.html').pipe(res)
        
    }else if(req.url ==="/shop"){
    res.writeHead(200,{'content-type':'text/html'})
        fs.createReadStream(__dirname+'/shop.html').pipe(res)
        
    }else if(req.url ==="/contect"){
    res.writeHead(200,{'content-type':'text/html'})
        fs.createReadStream(__dirname+'/contect.html').pipe(res)
        
    }else {
    res.writeHead(200,{'content-type':'text/html'})
        fs.createReadStream(__dirname+'/404.html').pipe(res)
        
    }
})


Server.listen(3010, () => {
    console.log("server is running on port 3010");
    console.log("Copy: http://localhost:3010/");
})