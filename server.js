var http = require("http");

function start() {
    function onRequest(request, response) {
        console.log("Request Received.");
        response.writeHead(200, { "Content-Tpe": "text / html" });
        response.write(" Hell World!");
        response.end();
    }
    http.createServer(onRequest).listen(8888);
    console.log("Server Started");
}
exports.start = start;