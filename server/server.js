var express = require('express');
var bodyParser = require('body-parser');
var db = require('./db/index.js');
var bookingRouter = require('./resources/bookingRouter.js');

var app = express();

app.use(bodyParser.json());

app.use('/:id', express.static(__dirname + '/../client/dist'));

app.use('/', bookingRouter);

app.get('/', function (req, res) {
  res.json({ message: 'Welcome to the BillionaireBNB DB RESTful API!' });
});


module.exports = app;
