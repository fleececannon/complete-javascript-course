'use strict';

/* Global Variables */

const apiKey = '74cecae9bd79413e56e618f2d8d387f5&units=imperial';

//HTML Elements
const buttonGenerate = document.querySelector('#generate');
const inputZip = document.querySelector('#zip');
const inputFeelings = document.querySelector('#feelings');
const outputDate = document.querySelector('#date');
const outputTemp = document.querySelector('#temp');
const outputContent = document.querySelector('#content');

// Event listener to add function to existing HTML DOM element
buttonGenerate.addEventListener('click', function () {
  //Get Date
  let d = new Date();
  let newDate = d.getMonth() + '.' + d.getDate() + '.' + d.getFullYear();
  const feelings = inputFeelings.value;
  //Get temperature from web API
  const temperature = getWeather(inputZip.value, newDate, feelings);
  //clear input fields
  clearForm();
});

/* Function to GET Web API Data*/
const getWeather = function (zip, newDate, feelings) {
  fetch(
    `http://api.openweathermap.org/geo/1.0/zip?zip=${zip},US&appid=${apiKey}`
  )
    .then((response) => response.json())
    .then((data) => {
      const { lat, lon } = data;
      return fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`
      );
    })
    .then((response) => response.json())
    .then((data) => {
      const { temp } = data.main;
      postEntry('/addEntry', { date: newDate, temp: temp, feelings: feelings });
      retrieveData();
    });
  return temp;
};

/* Function to POST data */
const postEntry = async (url = '', data = {}) => {
  console.log('you got here');
  const response = await fetch(url, {
    method: 'POST',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  });
  console.log(response);
  try {
    const newData = await response.json();
    console.log('you made it heeeeeeere');
    return newData;
  } catch (error) {
    console.log(error);
  }
};

const retrieveData = async () => {
  const request = await fetch('/all');
  console.log('asdf;laksjdfas;lkj');

  try {
    // Transform into JSON
    const allData = await request.json();
    console.log(allData.length - 1);
    console.log('we are making progress');
    // Write updated data to DOM elements
    outputTemp.innerHTML =
      Math.round(allData[allData.length - 1].temperature) + ' degrees';
    outputContent.innerHTML = allData[allData.length - 1].feelings;
    outputDate.innerHTML = allData[allData.length - 1].date;
  } catch (error) {
    console.log('error', error);
    // appropriately handle the error
  }
};

//Function to reset the form for the next entry
const clearForm = function () {
  inputZip.value = '';
  inputFeelings.value = '';
};
