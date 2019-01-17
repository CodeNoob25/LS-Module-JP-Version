var listing = require('./Listing.js');
var axios = require('axios');
var db = require('../db/index.js'); // mongo database

// mongo function

exports.retrieveBooking = (req, res) => {
    var data;
    listing.find({_id:req.params.id}, (err, results) => {
        data = results;
        res.send(data);
    })
};

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







// weird austin version

// exports.retrieveBooking = (req, res) => {
//     db.connection.once('open', () => {
//         var data;
//         db.connection.db.collection('listing', () => {
//             collection.find({_id:req.params.id}, (err, results) => {
//                 data = results;
//                 res.send(data);
//             })
//         })
//     })
// };