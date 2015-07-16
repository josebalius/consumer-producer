"use strict";

var http = require("http");
var parser = require("./parser");
var PORT = 3000;

var handleConsumerRequest = function(request, response) {
    var payload = "";

    if(request.method === "POST") {
        request.on("data", function(data) {
            payload += data;
        });

        request.on("end", function() {
            parser(payload, response);
        });
    } else {
        response.end("Request type not supported");
    }
};

var server = http.createServer(handleConsumerRequest);

server.listen(PORT, function() {
    console.log("Consumer listening on PORT: %s", PORT);
});
