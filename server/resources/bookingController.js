var listing = require('./Listing.js');
var axios = require('axios');
var db = require('../db/index.js');

exports.retrieveBooking = (req, res) => {
    var data;
    listing.find({_id:req.params.id}, (err, results) => {
        data = results;
        res.send(data);
    })
};

// version for Postgres testing

// var client = require('../../newVersion/sqldb/index.js')

// exports.retrieveBooking = (req, res) => {
//     var query = {
//         name: 'fetch-listing',
//         text: 'SELECT * FROM listingtable WHERE id = $1',
//         values: [req.params.id]
//       }
//       client.query(query)
//         .then(response => res.send(response.rows))
//         .catch(e => console.error(e.stack))
//     };
