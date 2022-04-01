const http = require('http');

const port = 3001;
const hostname = '127.0.0.1';

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<h2>hello World!</h2>');
})

server.listen(port, hostname, () => {
    console.log(`server running at http://${hostname}:${port}/`)
})