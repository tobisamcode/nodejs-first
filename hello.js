const http = require('http');
var fs = require('fs');

http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    var myReadStream = fs.createReadStream(__dirname + '/readMe.txt', 'utf-8');
    myReadStream.pipe(res);
}).listen(3000);

console.log('started localhost on 3000 ')