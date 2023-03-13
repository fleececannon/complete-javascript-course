"use strict"

const Car = function (make, speed) {
  this.make = make
  this.speed = speed
}

Car.prototype.accelerate = function(){
  this.speed += 10
  return this.speed
}

Car.prototype.brake = function(){
  this.speed -= 5
  return this.speed;
}

// const bmw = new Car("BMW", 120);
// const mercedes = new Car("Mercedes", 95);

// console.log(bmw)

// console.log(bmw.accelerate())
// console.log(bmw.accelerate())
// console.log(bmw.brake())

const EV = function (make, speed, charge) {
  Car.call(this, make, speed);
  this.charge = charge;
};

EV.prototype = Object.create(Car.prototype);

EV.prototype.chargeBattery = function(chargeTo) {
  this.charge = chargeTo;
}

EV.prototype.accelerate = function(){
  this.speed += 20;
  this.charge = this.charge * .99;
  console.log(`${this.make} going at ${this.speed} km/h, with a charge of ${this.charge}`)
}

const tesla = new EV('Tesla', 120)
tesla.chargeBattery(90);
console.log(tesla)
tesla.accelerate();

