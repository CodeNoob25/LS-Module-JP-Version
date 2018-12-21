var express = require('express');
var bodyParser = require('body-parser');
var db = require('./db');
var bookingRouter = require('./resources/bookingRouter.js');

// Create the Express application:
var app = express();

// Attach middleware:
app.use(bodyParser.json());

//app.use('/book', bookingRouter)

//connect to client

//app.use(express.static(__dirname + '/../client/dist'));


app.get('/', function (req, res) {
  res.json({ message: 'Welcome to the BillionaireBNB DB RESTful API!' });
});


module.exports = app;
