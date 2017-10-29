"use strict";
const assert = require('assert');
const ferry = require('./ferry');
const Car = require('./car');
var newFerry = new ferry(10,15);
var blueCar = new Car("blue",7)
describe("The board() function",function() {
  it("Should return 'accepted' when a 'blue' car with 7 passenger has onboarded the ferry.",function() {
    assert.equal(newFerry.board(blueCar), "accepted");
  })
});
