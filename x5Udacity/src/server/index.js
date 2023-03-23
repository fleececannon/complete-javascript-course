var path = require('path');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

// Start up an instance of app
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(express.static(path.join(__dirname, '..', 'client')));

//Global Variables


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
const weatherbitKey = '818afd4ff8484385a58ca95893bf666e';
const pixabayAPI = 'https://pixabay.com/api/?';

const geoParams = new URLSearchParams({
    q: '',
    maxRows: 1,
    username: geoNamesUser,
})

app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile(path.resolve('src/client/views/index.html'));
  });

app.get('/weather', function (req, res) {
    //set api params
    geoParams.set('q', req.query.city);
    
    //get geonames data
    getWeatherAPI();
});

//get geonames data
const getWeatherAPI = async () => {
    let weatherData = [];

    try{
        const res = await fetch(`${geoNamesAPI}${geoParams.toString()}`);
        const data = await res.json();
        const {lat, lng} = data['geonames'][0]
        console.log(lat, lng);
        
        //get weatherbit data
        try{

            const res = await fetch(`${weatherbitAPI}lat=${lat}&lon=${lng}&key=${weatherbitKey}`);
            const data = await res.json();
            dataArray= data['data'];
            console.log(typeof(dataArray));
            dataArray.forEach(element => {
                const {max_temp, min_temp, precip, clouds, valid_date} = element;
                weatherData.push({max_temp, min_temp, precip, clouds, valid_date});
                //console.log(weatherData)
            });
            //console.log(weatherData);
            // const {max_temp,min_temp,precip,clouds, valid_date} = (data['data'][0]);
        }catch(err){
            console.log(err);
        }

    }catch(err){
        console.log(err);
    }
}



