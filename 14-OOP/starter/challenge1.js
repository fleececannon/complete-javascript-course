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

const bmw = new Car("BMW", 120);
const mercedes = new Car("Mercedes", 95);

console.log(bmw)

console.log(bmw.accelerate())
console.log(bmw.accelerate())
console.log(bmw.brake())


