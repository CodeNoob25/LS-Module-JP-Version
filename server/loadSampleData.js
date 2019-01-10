var app = require('./server.js');
var db = require('./db');
var sampleData = require('./../sampleData.js');
var fs = require('fs')
var Listing = require('./resources/Listing.js');


console.log(sampleData);

var insertSample = function() {
    //console.log(Pokemon);
    //var poke = db.models.Pokemon;
    Listing.insertMany(sampleData)
        .then(console.log('inserted'))
        .catch(console.log('error'));
}

insertSample();