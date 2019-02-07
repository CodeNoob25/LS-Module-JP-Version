var mongoose = require('mongoose');

var listingSchema = mongoose.Schema({
    _id: Number,
    id: Number,
    name: String,
    capacity: Number,
    cleaningFee: Number, 
    numReviews: Number,
    price: Number,
    availability: String
}, { _id: true });

var listing = mongoose.model('listing', listingSchema);


module.exports = listing; 

// previous estraneous schema

// var availabilitySchema = mongoose.Schema({
//     id: Number,
//     date: Date,
//     status: Boolean,
//     price: Number
// }, { _id: false });

// var Availability = mongoose.model('availability', availabilitySchema);