var path = require('path')
const express = require('express')
const dotenv = require('dotenv');
dotenv.config();

// Setup empty JS object to act as endpoint for all routes
projectData = {};

//required aylien package
var aylien = require("aylien_textapi");

// set aylien API credentias
var textapi = new aylien({
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY
  });


// Start up an instance of app
const app = express();

/* Middleware*/
var bodyParser = require('body-parser');

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
    // res.sendFile('dist/index.html')
    res.sendFile('dist/index.html')
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})


app.post('/', function (req, res) {

    textapi.sentiment({
        text: req.body.text,
        }, function(error, response) {
        if (error === null) {
          console.log(response)
            res.send(response)
        }
        });
        return

})