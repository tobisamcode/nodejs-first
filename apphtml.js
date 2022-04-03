const http = require('http');
var fs = require('fs');


http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    var myReadStream = fs.createReadStream(__dirname + '/public/home.html', );
    myReadStream.pipe(res);
}).listen(3000);


console.log('started localhost on 3000 ')