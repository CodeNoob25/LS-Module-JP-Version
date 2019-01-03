var Listing = require('./Listing');
var axios = require('axios');
var db = require('./../db');

exports.retrieveBooking = function (req, res) {
    console.log(req.params.id)
    var data;
    Listing.find({id:req.params.id}, (err, results) => {
        data = results;
        //console.log('retrieveone', req.params);
        res.send(data);
    })
};