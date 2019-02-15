// var mongoose = require('mongoose');

// var mongoIP = process.env.MONGO_URI || 'localhost';

// var mongoUri = `mongodb://${mongoIP}/listings`;

// var db = mongoose.connect(mongoUri, { useNewUrlParser: true } );

// db.connection = mongoose.connection;

// module.exports = db;

// var MongoClient = require('mongodb').MongoClient;

// var mongoIP = process.env.MONGO_URI || 'localhost';
// var mongoUri = `mongodb://${mongoIP}/listings`;

// MongoClient.connect(mongoUri, { useNewUrlParser: true }, (err, db) => {
//   if (err) {
//       throw err;
//   }
//   var dbo = db.db('listings');
//   console.log(dbo)
//   module.exports = dbo;
// });

