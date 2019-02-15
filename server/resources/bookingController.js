var MongoClient = require('mongodb').MongoClient;
var mongoIP = process.env.MONGO_URI || 'localhost';
var mongoUri = `mongodb://${mongoIP}/listings`;

// Eliminated mongoose

exports.retrieveBooking = (req, res) => {
    MongoClient.connect(mongoUri, { useNewUrlParser: true }, (err, db) => {
        if (err) {
            throw err;
        }
    var dbo = db.db('listings');
    var num = Number(req.params.id);
    var query = {_id:num};
    dbo.collection('listing').find(query).toArray((err, result) => {
        if (err) {
            throw err;
        }
        res.send(result);
      });
    });
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
