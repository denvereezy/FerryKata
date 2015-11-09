module.exports = function(total_cars_allowed, total_people_allowed){
  this.total_cars_allowed = total_cars_allowed;
  this.total_people_allowed = total_people_allowed;
  this.car_counter = 0;
  this.people_counter = 0;

  this.board = function(car){
      // if(this.total_people_allowed < this.people_counter && this.car_counter < this.total_cars_allowed){
        // if(this.car_color[car.color] === undefined){
        //   this.car_color[car.color] = 0;
        // };
        // this.car_color[car.color]++;
        this.car_counter++;
        this.people_counter = this.people_counter + car.people;
      // };
   };
};
