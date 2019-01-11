var db = require('../server/db/index.js');
var Listing = require('../server/resources/Listing.js');
var {words, dates} = require('./newResources/data.js');

var insertAllData = (num) => {
    console.time('inserted');
    var count = 0;
    var batch = (batchsize) => {
        var dataArray = [];
        for (var i = 0; i < batchsize; i++) {
            var newListing = {};
            newListing.id = i + count;
            var index1 = Math.floor(Math.random() * 100);
            var index2 = Math.floor(Math.random() * 100);
            var index3 = Math.floor(Math.random() * 100);
            newListing.name = words[index1] + ' ' + words[index2] + ' ' + words[index3];
            newListing.capacity = Math.ceil(Math.random() * 20);
            newListing.cleaningFee = 50 + Math.floor(Math.random() * 151);
            newListing.numReviews = 5 + Math.floor(Math.random() * 196);
            newListing.price = Math.ceil(Math.random() * 5000);
            var availabilityString = '';
            for (var j = 0; j < Math.random() * 40; j++) {
                availabilityString += (45 + Math.ceil(Math.random() * 90));
                availabilityString += '-';
            }
            newListing.availability = availabilityString;
            dataArray.push(newListing);
        }
        count += batchsize;
        return dataArray;
    }

    var insertData = (amount) => {
    
        var data = batch(amount);
        Listing.insertMany(data)
            .then(() => {
                if (count < num) {
                    insertData(amount);
                } else {
                    console.timeEnd('inserted');
                }
            })
            .catch((err) => {
                console.log(err);
            })
    }

    insertData(1000);

}

insertAllData(5000);