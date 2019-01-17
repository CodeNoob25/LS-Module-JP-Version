var mongoose = require('mongoose');
// var mongoUri = 'mongodb://localhost/listings'; 
var mongoUri = process.env.MONGO_URI || 'mongodb://52.15.185.183/listings';
// Connect Mongoose to our local MongoDB via URI specified above and export it below
var db = mongoose.connect(mongoUri, { useNewUrlParser: true } );

db.connection = mongoose.connection;


module.exports = db;
