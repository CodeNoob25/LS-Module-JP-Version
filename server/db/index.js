var mongoose = require('mongoose');

var mongoUri = process.env.MONGO_URI || 'mongodb://localhost/listings';

var db = mongoose.connect(mongoUri, { useNewUrlParser: true } );

db.connection = mongoose.connection;

module.exports = db;
