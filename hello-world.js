const http = require('http');


const server = http.createServer((req, res) => {
    console.log('request was made: ' + req.url)
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('hello World!');
})

server.listen(3001, '127.0.0.1');

console.log('server is running at localhost 3001, press ctr+C to cancel')