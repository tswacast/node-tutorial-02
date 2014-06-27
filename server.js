// server.js

var http = require("http");

var server = http.createServer(function(req, res) {
    res.write("Hello, World!");
    res.end();
});

server.listen(process.env.PORT || 3000, process.env.IP);