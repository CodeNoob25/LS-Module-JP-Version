var mongoose = require('mongoose');



var availabilitySchema = mongoose.Schema({
    date: Date,
    status: Boolean,
    price: Number
});

var listingSchema = mongoose.Schema({
    name: String,
    capacity: Number,
    cleaningFee: Number, 
    numReviews: Number,
    availability: [availabilitySchema]
});




var Listing = mongoose.model('listing', listingSchema);
var Availability = mongoose.model('availability', availabilitySchema);

module.exports = Listing;
