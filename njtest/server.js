var http = require('http'); 

// create an http server to handle response */

http.createServer(function(request, response) {
	response.writeHead(200, {"Content-Type": "text/plain"})
	response.write('spotify');
	response.end();
}).listen(18000);

