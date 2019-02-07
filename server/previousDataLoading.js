//previous version of data loading

var app = require('./server.js');
var db = require('./db');
var sampleData = require('../previousDataFormat.js');
var fs = require('fs')
var Listing = require('./resources/Listing.js');


console.log(sampleData);

var insertSample = function() {
    Listing.insertMany(sampleData)
        .then(console.log('inserted'))
        .catch(console.log('error'));
}

insertSample();