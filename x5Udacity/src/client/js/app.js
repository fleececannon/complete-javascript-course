export async function handleSubmit(event) {

const inputLocation = document.querySelector('#location');
const inputDate = document.querySelector('#date');
const buttonSubmit = document.querySelector('#submit');
const image = document.querySelector('#image');
const outputSection = document.querySelector('#outputSection');
const inputForm = document.querySelector('#inputForm');
const outputIntro = document.querySelector('#introduction');
const outputHigh = document.querySelector('#high');
const outputLow = document.querySelector('#low');
const outputPrecip = document.querySelector('#precip');
const outputCity = document.querySelector('#city');
const outputDays = document.querySelector('#remaining');

    event.preventDefault(); // Add this line to prevent form submission and page reload
    console.log("1. ::: Form Submitted :::");
    console.log("2. Location:", inputLocation.value)
    const daysRemaining = daysUntil(inputDate.value) * 1;
    (daysRemaining < 0) ? 
        alert("Please enter a date in the future") :
        console.log(`Your trip is in ${daysRemaining} days`)

    const weatherData = await getWeather(inputLocation.value, inputDate.value, daysRemaining);
    const pictureLink = await getPicture(inputLocation.value);

    updateUI(weatherData, pictureLink, daysRemaining, inputLocation.value);



const getWeather = async function (city, date, daysRemaining) {
    const res = await fetch(`http://localhost:8000/weather?city=${city}&date=${date}&daysremaining=${daysRemaining}`);
    const data = await res.json();
    return data
}

const getPicture = async function (city) {
    const res = await fetch(`http://localhost:8000/picture?city=${city}`);
    const link = await res.json();
    return link
}

function daysUntil(inputDateString) {
    // Parse the input date string in MM/DD/YYYY format
    const [year, month, day] = inputDateString.split('-');
    const inputDate = new Date(year, month - 1, day);

  
    // Get the current date and set the time to midnight to ignore the time difference
    const currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0);
  
    // Calculate the difference between the two dates in milliseconds
    const differenceInMilliseconds = inputDate - currentDate;
  
    // Convert the difference to days and return it
    const differenceInDays = differenceInMilliseconds / (1000 * 60 * 60 * 24);
    return differenceInDays;
  }

  function updateUI (weatherData, imageLink, daysRemaining, city) {
        console.log(imageLink['url']);
        console.log(weatherData);
        //unhide output section and hide input section
        outputSection.classList.remove('hidden');
        inputForm.classList.add('hidden');

        //add image
        image.src = imageLink['url'];

        //add weather data
        outputIntro.innerHTML = `Your trip to ${city} is in ${daysRemaining} days`;

        outputHigh.innerHTML = `High: ${weatherData['max_temp']}°C`;
        outputLow.innerHTML = `Low: ${weatherData['min_temp']}°C`;
        outputPrecip.innerHTML = `Precipitation: ${weatherData['precip']}mm`;

        
  }

};