const inputLocation = document.querySelector('#location');
const inputDate = document.querySelector('#date');
const buttonSubmit = document.querySelector('#submit');


buttonSubmit.addEventListener('click', function (event) {
    event.preventDefault(); // Add this line to prevent form submission and page reload
    console.log("::: Form Submitted :::");
    console.log(inputLocation)
    const daysRemaining = daysUntil(inputDate.value) * 1;
    console.log(`Your trip is in ${daysRemaining} days`)
    getWeather(inputLocation.value, inputDate.value);    
});


const getWeather = async function (city, date) {
    const res = await fetch(`http://localhost:8000/weather?city=${city}&date=${date}`);
    const data = await res.json();
    console.log(data)
}

function daysUntil(inputDateString) {
    // Parse the input date string in MM/DD/YYYY format
    console.log(inputDateString)
    const [month, day, year] = inputDateString.split('-');
    const inputDate = new Date(year, month - 1, day);
    console.log(inputDate)
  
    // Get the current date and set the time to midnight to ignore the time difference
    const currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0);
  
    // Calculate the difference between the two dates in milliseconds
    const differenceInMilliseconds = inputDate - currentDate;
  
    // Convert the difference to days and return it
    const differenceInDays = differenceInMilliseconds / (1000 * 60 * 60 * 24);
    return differenceInDays;
  }