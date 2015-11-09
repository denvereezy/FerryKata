module.exports = function(total_cars_onboard, total_people_onboard){
  this.total_cars_onboard = total_cars_onboard;
  this.total_people_onboard = total_people_onboard;
  this.car_counter = 0;
  this.people_counter = 0;

  this.board = function(car){
      if(this.total_people > this.people_counter && this.car_counter < this.total_cars){
        if(this.car_color[car.color] === undefined){
          this.car_color[car.color] = 0;
        }
        this.car_color[car.color]++;
        this.car_counter++;
        this.people_counter = this.people_counter + car.people;

    };

};
});
