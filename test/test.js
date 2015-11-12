describe("Testing ferry and car classes", function(){
  it("should create new car instance", function(){
    var car1 = new Car("red",5);
    expect(car1.color, "red");
    expect(car1.people, 5)
  });

  it("should create new ferry instance", function(){
    var ferry1 = new Ferry(2,10);
    expect(ferry1.total_cars_allowed, 2);
    expect(ferry1.total_people_allowed, 10);
  });

  it("should let people board ferry and return Accepted", function(){
    var ferry = new Ferry(4, 4);
    var car = new Car("red",4);
    expect(ferry.board(car), "Accepted");
    console.log(ferry.people_counter);
  });

  it('should update trip_counter', function(){
      var ferry = new Ferry(1, 1);
      var car = new Car("red", 1);
      ferry.board(car);
      expect(car.trip_counter, 1);
    });

    it('should return rejected if ferry reached maximum cars', function() {
     var ferry = new Ferry(0, 1);
     var car = new Car("red", 1);
     expect(ferry.board(car), "Rejected");
   });

   it('should unboard a ferry', function(){
     var ferry = new Ferry(1, 1);
     var car = new Car("red", 1);
     ferry.board(car);
     expect(ferry.unBoard(car),"Ferry Unboarded");
   });
});
