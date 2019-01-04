var mongoose = require('mongoose');
//var mongoUri = 'mongodb://localhost:27017/bookings'; 
var mongoUri = 'mongodb://alexandra1:alexandra1@ds251622.mlab.com:51622/lexibook';
// Connect Mongoose to our local MongoDB via URI specified above and export it below
var db = mongoose.connect(mongoUri, { useNewUrlParser: true } );


module.exports = db;
