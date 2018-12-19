var mongoose = require('mongoose');
var mongoUri = 'mongodb://localhost:27017/bookings'; 

// Connect Mongoose to our local MongoDB via URI specified above and export it below
var db = mongoose.connect(mongoUri, { useNewUrlParser: true } );


module.exports = db;

var listingSchema = mongoose.Schema({
    name: String,
    capacity: Number,
    cleaningFee: Number, 
    numReviews: Number
});

var availabilitySchema = mongoose.Schema({
    date: Date("<YYYY-mm-dd>"),
    status: Number,
    price: Number
});


 
// Register the pokemonSchema with Mongoose as the 'Pokemon' collection.
var Listing = mongoose.model('listing', listingSchema);
var Availability = mongoose.model('availability', availabilitySchema);

module.exports = {Listing, Availability};
