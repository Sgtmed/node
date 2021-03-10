var http = require("http");

function onRequest(request, response) {
    response.writeHead(200, { "Content-Tpe": "text / html" });
    response.write(" Hello World!");
    response.end();
}
http.createServer(onRequest).listen(8888);