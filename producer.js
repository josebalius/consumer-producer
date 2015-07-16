"use strict";

var http = require("http");
var CONSUMER_PORT = 3000;
var CONSUMER_GENERATION_INTERVAL = 500; // Lower to increase req/s for consumer

var operators = ["+", "/", "*", "-"];

setInterval(function() {
    var operandA = parseInt(Math.random() * 100),
        operandB = parseInt(Math.random() * 100),
        operator = operators[parseInt(Math.random() * 4)],
        payload = operandA + operator + operandB;

    console.log("Producing: " + payload);

    var request = http.request({
        host: "localhost",
        port: CONSUMER_PORT,
        path: "/",
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "Content-Length": payload.length
        }
    }, function(response) {
        response.setEncoding("utf8");
        response.on("data", function(chunk) {
            console.log("Result: " + chunk);
            console.log("------------------");
        });
    });

    request.write(payload);
    request.end();

}, CONSUMER_GENERATION_INTERVAL);
