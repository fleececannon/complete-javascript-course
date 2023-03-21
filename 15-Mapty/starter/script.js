'use strict';

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

//declare element variables
const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

//create classes
class App{
  #map;
  #mapEvent;
  workouts = [];

  constructor(){
    this._getPosition();

    form.addEventListener('submit', this._newWorkout.bind(this));
    inputType.addEventListener('change', this._toggleElevationField.bind(this))
  }

  _getPosition(){
    if (navigator.geolocation) 
      navigator.geolocation.getCurrentPosition(this._loadMap.bind(this), function () {
        alert('Could not get your position');
      });
    }

  _loadMap(position){
    const { latitude } = position.coords;
    const { longitude } = position.coords;
    const coords = [latitude, longitude];
    console.log(`https://www.google.com/maps/@${latitude},${longitude}`);
    
    this.#map = L.map('map').setView(coords, 13);
    
    L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution:
        '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    }).addTo(this.#map);

    this.#map.on('click', this._showForm.bind(this));
  }

  _showForm(mapE){
    this.#mapEvent = mapE;
    form.classList.remove('hidden');
    inputDistance.focus();
    
  }

  _toggleElevationField(){
      inputCadence.closest('div').classList.add("form__row--hidden");
      inputElevation.closest('div').classList.remove("form__row--hidden");
  }

  _newWorkout(e){
      e.preventDefault();

      //get data from form:
      const type = inputType.value;
      const distance = inputDistance.value;
      const duration = inputDuration.value;
      const forthVar = inputCadence.value ? inputCadence.value : inputElevation.value;
      const name = `Workout${this.workouts.length + 1}`
      console.log ('name: ', name);

      //check if data is valid;
      if (type <= 0 || distance <=0 || duration <= 0 || forthVar <= 0 ){
        alert("your shit is broken"); 
      }

      //workout for running
      if (type === 'running'){
        const run = new Running(name, distance, duration, this.coords, forthVar);
        this.workouts.push(run);
        console.log("workout logged");
      }

      //workout for cycling
      if (type === 'cycling'){
        const cycle = new Cycling(name, distance, duration, this.coords, forthVar);
        this.workouts.push(cycle);
        console.log("workout logged");
      }

      
     
      const { lat, lng } = this.#mapEvent.latlng;
      var marker = L.marker([lat, lng])
        .addTo(this.#map)
        .bindPopup(
          L.popup({
            maxWidth: 250,
            minWidth: 100,
            autoClose: false,
            closeOnClick: false,
            className: 'running-popup',
          })
        )
        .setPopupContent(name)
        .openPopup();
      inputCadence.value = inputDistance.value = inputDuration.value = inputElevation.value = '';
  }
}

class Workout {
  date = new Date();
  #timestamp = Date.now().toString(); // Get current timestamp as string
  #random = Math.floor(Math.random() * 1000000).toString(); // Get random number as string
  id = parseInt(this.#timestamp + this.#random).toString().padStart(10, '0'); // Combine and pad with zeros to 10 digits

  constructor(distance, duration, coords){
    this.distance = distance;
    this.duration = duration;
    this.coords = coords;
  }
}

class Running extends Workout {

  constructor(name, distance, duration, coords, cadence){
    super(distance, duration, coords);
    this.name;
    this.cadence = cadence;
    this.calcPace;
    }
  
  calcPace(){
    this.pace = this.duration / this.distance;
    return this.pace
  }
  
}

class Cycling extends Workout {

  constructor(name, distance, duration, coords, elevationGain){
    super(distance, duration, coords);
    this.name
    this.elevationGain = elevationGain;
    this.calcSpeed;
    }
  
  calcSpeed(){
    this.speed = this.distance / (this.duration / 60);
  }
  
}

// const run1 = new Running([32, -12], 5.2, 24, 178);
// const cycle2 = new Running([32, -12], 27 , 95, 1000);
// console.log(run1);
// console.log(cycle2);

const app = new App;

