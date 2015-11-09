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
    assert.equal(ferry1.total_cars_allowed, 2);
    assert.equal(ferry1.total_people_allowed, 10);
  });

  it("should let people board ferry", function(){
    var ferry = new Ferry(20, 40);
    var car = new Car("red", 1);
    var car2 = new Car("blue", 20);
    assert.equal(ferry.board(car));
    assert.equal(ferry.board(car2));
    console.log(ferry.people_counter);
  });

});
