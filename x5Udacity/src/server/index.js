var path = require('path');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

// Start up an instance of app
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(express.static('dist'));

//Global Variables
let tripDate = "";
let daysRemaining = "";
let weatherDate = "";

// Setup Server
const port = 8000;
const server = app.listen(port, () => {
  console.log(`running on localhost: ${port}`);
});
function listening() {
  console.log(`server running on local host ${port}`);
}

//API Variables
const geoNamesAPI = 'http://api.geonames.org/searchJSON?';
const geoNamesUser = 'chrisamani';
const weatherbitAPI = 'https://api.weatherbit.io/v2.0/forecast/daily?';
const weatherbitAPIHistorical = 'https://api.weatherbit.io/v2.0/history/daily?';
const weatherbitKey = '818afd4ff8484385a58ca95893bf666e';
const pixabayAPI = 'https://pixabay.com/api/?';
const pixabayKey = '34734598-69b01859be4219e2db888df9a';


const geoParams = new URLSearchParams({
  q: '',
  maxRows: 1,
  username: geoNamesUser,
});

app.get('/', function (req, res) {
  // res.sendFile('dist/index.html')
  res.sendFile(path.resolve('dist/index.html'));
});

app.get('/weather', async function (req, res) {
  //set api params
  const city = req.query.city;
  geoParams.set('q', city);

  tripDate = req.query.date;
  daysRemaining = req.query.daysremaining;
  const tripDateObj = new Date(tripDate);
  weatherDateStart = (daysRemaining > 13) ? new Date(tripDateObj - 365 * 24 * 60 * 60 * 1000).toISOString().split('T')[0] : "";
  weatherDateEnd = (daysRemaining > 13) ? new Date(tripDateObj - 364 * 24 * 60 * 60 * 1000).toISOString().split('T')[0] : "";

  console.log("*************************************")
  console.log("Trip Date: " + tripDate);
  console.log("Days Remaining: " + daysRemaining);
  console.log("Weather Date: " + weatherDateStart);
  console.log("Weather Date: " + weatherDateEnd);
  console.log("*************************************")

  //get weather data
    try {
        const weather = await getWeatherAPI();
        res.json(weather[0]); 
    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Failed to fetch weather data" });
    }
});

app.get('/picture', async function (req, res) {
    const city = req.query.city;
    try {
        const picURL = await getPicAPI(city);
        res.json({ url: picURL });

    } catch (err) {
        console.log(err);
        res.status(500).json({ error: "Failed to fetch picture URL" });
    }
});


//get geonames data
const getWeatherAPI = async () => {
  let weatherData = [];

  try {

    //***************************************************** */
    //calls geonames api with city name to get Lat and Long
    /****************************************************** */
    const res = await fetch(`${geoNamesAPI}${geoParams.toString()}`);
    const data = await res.json();
    const { lat, lng } = data['geonames'][0];

    //*****************************************************************/ 
    //uses lat and long to get weather data
    //*****************************************************************/
    if (!weatherDateStart) {

      //*********************/
      //current weather data
      //*********************/
      try {
        const res = await fetch(
          `${weatherbitAPI}lat=${lat}&lon=${lng}&key=${weatherbitKey}`
        );

        //parse the weather data to get the weather forecast for the trip date
        const data = await res.json();
        dataArray = data['data'];
        dataArray.forEach((element) => {
          const {max_temp,min_temp,precip,clouds, valid_date} = (element);
          if (valid_date === tripDate) {
            weatherData.push({ max_temp, min_temp, precip, clouds, valid_date });
          }
        });
        console.log(`Weather on ${tripDate} was ${weatherData[0]['max_temp']} degrees Farenheit`)
        return weatherData
      } catch (err) {
        console.log(err);
      }
    } else {

      //*********************/
      //historical weather data
      //*********************/
      try {
        const res = await fetch(
          `${weatherbitAPIHistorical}lat=${lat}&lon=${lng}&key=${weatherbitKey}&start_date=${weatherDateStart}&end_date=${weatherDateEnd}`
        );

        //parse the weather data to get the weather forecast for the trip date
        const data = await res.json();
        dataArray = data['data'][0];
        const {max_temp, min_temp, precip, clouds, valid_date} = dataArray;
        weatherData.push({ max_temp, min_temp, precip, clouds, valid_date });
        console.log(`Weather on ${weatherDateStart} was ${max_temp} degrees Farenheit`)
        return weatherData;
      } catch (err) {
      console.log(err);
      }
    }

  } catch (err) {
    console.log(err);
  }
  return weatherData;
};

const getPicAPI = async (city) => {
  try {
    console.log('hey');
    const res = await fetch(
    //   `${pixabayAPI}key=${pixabayKey}&q=${city}&image_type=photo`
      `${pixabayAPI}key=${pixabayKey}&q=${city}&image_type=photo`
    );
    const data = await res.json();
    const { webformatURL } = data['hits'][0];
    return webformatURL;
  } catch (err) {
    console.log(err);
  }
};

module.exports = app;
