var path = require('path');
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');


const app = express();
const apiKey = "88d64eb0a648eb79046a1b001b6eb699"
const baseURL = "https://api.meaningcloud.com/sentiment-2.1"

app.use(express.static('dist'));
app.use(cors());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
console.log(__dirname);


app.get('/', function (req, res) {
  // res.sendFile('dist/index.html')
  res.sendFile(path.resolve('src/client/views/index.html'));
});

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
  console.log('Example app listening on port 8081!');
});

app.post('/api', async function (req, res) {
    console.log(req.body);
    apiURL = baseURL + "?key=" + apiKey + "&url=" + req.body.url + "&lang=en"
    console.log(apiURL)
    const response = await fetch(apiURL, {
        method: "POST",
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/json",
        },
    })
    .then((response) => response.json())
    .then((data) => {
        console.log(data),
        res.send(data)})
    .catch(error => console.log('error', error));
});
