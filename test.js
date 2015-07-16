var parser = require("./parser");
var assert = require("assert");

var exp1 = "1+2",
    exp2 = "2*3",
    exp3 = "4/2",
    exp4 = "5*5",
    exp5 = "NaN";

var result1 = parser(exp1);
assert.equal(result1, 3);

var result2 = parser(exp2);
assert.equal(result2, 6);

var result3 = parser(exp3);
assert.equal(result3, 2);

var result4 = parser(exp4);
assert.equal(result4, 25);

var result5 = parser(exp5);
assert.equal(result5, "Invalid Operator");
