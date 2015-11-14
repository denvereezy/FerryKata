
var Ferry = require("../ferry");
var Car = require("../car");
var assert = require("assert");

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

  it("should let people board ferry and return Accepted", function(){
    var ferry = new Ferry(4, 4);
    var car = new Car("red",4);
    assert.equal(ferry.board(car), "Accepted");
    console.log(ferry.people_counter);
  });

  it('should update trip_counter', function(){
    var ferry = new Ferry(1, 1);
    var car = new Car("red", 1);
    ferry.board(car);
    assert.equal(car.trip_counter, 1);
    console.log("==>" + car.trip_counter);
  });

  it('should return rejected if ferry is full', function() {
    var ferry = new Ferry(0, 1);
    var car = new Car("red", 1);
    assert.equal(ferry.board(car), "Rejected");
    console.log(ferry.people_counter);
  });

  it('should return Half Price after 3 trips', function() {
    var ferry = new Ferry(1, 1);
    var car = new Car("red", 1);
    for(var i = 0; i < 2; i++){
      ferry.board(car);
      ferry.unBoard(car);
    }
    assert.deepEqual(ferry.board(car), "Half Price");
    console.log("------->>>" + car.trip_counter);
  });

  it('should return You go free after 7 trips', function(){
    var ferry = new Ferry(1, 1);
    var car = new Car("red", 1);
    for(var i = 0; i < 6; i++){
      ferry.board(car);
      ferry.unBoard(car);
    }
    assert.deepEqual(ferry.board(car), "You go free!");
  });

  it('should unboard a ferry', function(){
    var ferry = new Ferry(1, 1);
    var car = new Car("red", 1);
    ferry.board(car);
    assert.equal(ferry.unBoard(car),"Ferry Unboarded");
  });
});
