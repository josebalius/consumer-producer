"use strict";

var processPayload = function(payload, response) {

    console.log("Consuming: " + payload);

    var operatorSplit = payload.match(/\W/),
        operator,
        operands,
        operandA,
        operandB,
        result = 0;

    if(!operatorSplit || operatorSplit.length === 0) {
        if(response) {
            response.end("Invalid Operator");
        } else {
            return "Invalid Operator";
        }
        return;
    } else {
        operator = operatorSplit[0];
    }

    operands = payload.split(operator);
    operandA = parseInt(operands[0]);
    operandB = parseInt(operands[1]);

    switch(operator) {
        case "+":
            result = operandA + operandB;
            break;

        case "-":
            result = operandA - operandB;
            break;

        case "*":
            result = operandA * operandB;
            break;

        case "/":
            result = operandA / operandB;
            break;

        default:
            result = "Operator not supported. Only: +, -, /, * operators are supported";
            break;
    }

    console.log("Calculation Response: " + result);

    if(!response) {
        return result;
    } else {
        response.end(result.toString());
    }


};

module.exports = processPayload;
