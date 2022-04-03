var http = require('http');
var fs = require('fs');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    var myJob = {
        name: 'Tobs',
        age: 25,
        role: 'fullstack developer',
        gender: 'male',
    }
    res.end(JSON.stringify(myJob));
});


server.listen(3000, '127.0.0.1')
console.log('server running at localhost:3000')