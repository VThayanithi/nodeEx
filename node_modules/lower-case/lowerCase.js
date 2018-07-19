var http = require('http');
var uc = require('lower-case');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  /*Use our upper-case module to upper case a string:*/
  res.write(uc("Jaffna!"));
  res.end();
}).listen(8080);
