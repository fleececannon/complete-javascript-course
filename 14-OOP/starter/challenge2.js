'use strict';

class Car {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  accelerate() {
    this.speed += 10;
    return this.speed;
  }

  brake() {
    this.speed -= 5;
    return this.speed;
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(spd) {
    this.speed = spd * 1.6;
  }
}

// const EV = function (make, speed, charge) {
//   Car.call(this, make, speed);
//   this.charge = charge;
// };

// EV.prototype = Object.create(Car.prototype);

// EV.prototype.chargeBattery = function(chargeTo) {
//   this.charge = chargeTo;
// }

// const tesla = new EV('Tesla', 120)
// console.log(tesla);

class EV extends Car {
  
  constructor(make, speed, charge){
    super(make, speed);
    this.charge = charge;
  }

  accelerate(){
    this.speed += 20;
    this.charge = this.charge * .99;
    console.log(`${this.make} going at ${this.speed} km/h, with a charge of ${this.charge}`)
  };

  chargeTo(chargeTo) {
    this.charge = chargeTo;
  };
}

const rivian = new EV("Rivian", 100, 50 );
console.log(rivian)
rivian.accelerate()
rivian.chargeTo(100)
rivian.accelerate()