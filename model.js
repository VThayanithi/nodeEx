var http = require('http');
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(req.url);
  var q = url.parse(req.url, true).query;
  var txt = q.year + " " + q.month;
    res.end();
}).listen(8080);
