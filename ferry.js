var Ferry = function(total_cars_allowed, total_people_allowed){
  this.total_cars_allowed = total_cars_allowed;
  this.total_people_allowed = total_people_allowed;
  this.car_counter = 0;
  this.people_counter = 0;
  this.car_color = {};

  this.board = function(car){
    if(this.total_people_allowed < this.people_counter && this.car_counter < this.total_cars_allowed){
      if(this.car_color[car.color] === undefined){
        this.car_color[car.color] = 0;
      };
      this.car_color[car.color]++;
      this.car_counter++;
      this.people_counter = this.people_counter + car.people;
      car.trip_count += 1;
      if(car.trip_counter !== 0 && car.trip_counter === 3){
        return "Half Price";
      }
      else if(car.trip_counter !== 0 && car.trip_counter === 7){
        return "You go free!";
      }
      return "Accepted";
    }
    else{
      return "Rejected";
    }
  };
  this.unBoard = function(car){
    if(this.car_counter > 0 && this.people_counter > 0){
      this.car_counter --;
      this.people_counter = this.people_counter - car.people;
      return "Ferry Unboarded";
    }
    else{
      return "No cars on ferry";
    };
  };
};
