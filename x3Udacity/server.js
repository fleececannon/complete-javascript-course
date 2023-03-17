// Setup empty JS object to act as endpoint for all routes
projectData = [];

// Require Express to run server and routes
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// Start up an instance of app
const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(express.static('website'));

// Setup Server
const port = 8000;
const server = app.listen(port, () => {
  console.log(`running on localhost: ${port}`);
});
function listening() {
  console.log(`server running on local host ${port}`);
}

//routes
app.post('/addEntry', addEntry);
app.get('/all', getData);

function addEntry(req, res) {

  newEntry = {
    date: req.body.date,
    temperature: req.body.temp,
    feelings: req.body.feelings,
  };
  console.log("newData")
  projectData.push(newEntry);
  console.log(newEntry);
  res.send(projectData);
}

function getData(req, res) {
  res.send(projectData);
}

// Start up an instance of app

/* Dependencies */
/* Middleware*/

//Here we are configuring express to use body-parser as middle-ware.
// Cors for cross origin allowance

// Initialize the main project folder

// Spin up the server
// Callback to debug

// Initialize all route with a callback function

// Callback function to complete GET '/all'

// Post Route
