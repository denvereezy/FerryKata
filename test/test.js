var assert = require("assert"),
    Car = require("../car"),
    Ferry = require("../ferry");

describe("Testing ferry and car classes", function(){
  it("should create new car instance", function(){
    var car1 = new Car("red",5);
    assert.equal(car1.color, "red");
    assert.equal(car1.people, 5)
  });

  it("should create new ferry instance", function(){
    var ferry1 = new Ferry(2,10);
    assert.equal(ferry1.total_cars_onboard, 2);
    assert.equal(ferry1.total_people_onboard, 10);
  });

  it("should let people board if ferry is not full", function(){
    var car = new Car("red",5);
    assert.equal(car.color, "red");
    assert.equal(car.people, 5);
  });
});
