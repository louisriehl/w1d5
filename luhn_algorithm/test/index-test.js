var assert = require("chai").assert;
var isValid = require("../index.js");

describe ("Valid credit card numbers", function() {
  it("should return false if fed a string with non-digit characters", function()
  {
    var string = "1234abcde56";
    assert.isFalse(isValid(string));
  });

  it("should return true if fed a valid luhn number", function()
  {
    var string = "79927398713";
    assert.isTrue(isValid(string));
  });

  it("should return false if the number given is not a valid luhn number", function()
  {
    var string = "5698123097512312";
    assert.isFalse(isValid(string));
  });

});