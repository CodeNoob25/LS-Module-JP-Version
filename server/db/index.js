var mongoose = require('mongoose');
//var mongoUri = 'mongodb://localhost:27017/bookings'; 
var mongoUri = process.env.MONGO_URI || 'mongodb://localhost/listings';
// Connect Mongoose to our local MongoDB via URI specified above and export it below
var db = mongoose.connect(mongoUri, { useNewUrlParser: true, useMongoClient: true } );


module.exports = db;
