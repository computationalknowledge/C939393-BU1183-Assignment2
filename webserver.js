  // note: save file as .js extension to get code linting: 
  console.log("starting program...")
  var http = require("http");
	http.createServer(function(request, response) {
  console.log(" server is running on port 8888");
	response.writeHead(200,  {"Content-Type":  "text/plain"});
	response.write("Hello from Peter ");
	response.end();
	}).listen(8888);
