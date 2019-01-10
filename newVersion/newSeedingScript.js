var db = require('./db');
var sampleData = require('./../sampleData.js');
var Listing = require('./resources/Listing.js');
var {words, dates} = require('./newResources/data.js')

var createData = (num) => {
    var dataArray = [];
    for (var i = 0; i < num; i++) {
        var newListing = {};
        newListing.id = i;
        var index1 = Math.floor(Math.random * 100);
        var index2 = Math.floor(Math.random * 100);
        var index3 = Math.floor(Math.random * 100);
        newListing.name = words[index1] + words[index2] + words[index3];
        newListing.capacity = Math.ceil(Math.random * 20);
        newListing.cleaningFee = 50 + Math.floor(Math.random * 151);
        newListing.numReviews = 5 + Math.floor(Math.random * 196);
        var availabilityArray = [];
        for (var j = 0; j < 90; j++) {
            var availability = {};
            availability.id2 = j;
            availability.date = dates[j];
            availability.price = 10000 + Math.ceil(Math.random * 5000);
            availability.status = Boolean(Math.ceil(Math.random * 2) % 2);
            availabilityArray.push(availability);
        }
        newListing.availability = availabilityArray;
    }


    return dataArray;
}

var sampleData = [

{"id2":1,"date":"2019-01-02 00:00:00 -0500","price":10884,"status":false},
{"id2":2,"date":"2019-01-03 00:00:00 -0500","price":14592,"status":false},
{"id2":3,"date":"2019-01-04 00:00:00 -0500","price":11606,"status":true},
{"id2":4,"date":"2019-01-05 00:00:00 -0500","price":13120,"status":true},
{"id2":5,"date":"2019-01-06 00:00:00 -0500","price":12025,"status":false},
{"id2":6,"date":"2019-01-07 00:00:00 -0500","price":11098,"status":true},
{"id2":7,"date":"2019-01-08 00:00:00 -0500","price":13760,"status":true},
{"id2":8,"date":"2019-01-09 00:00:00 -0500","price":14528,"status":false},
{"id2":9,"date":"2019-01-10 00:00:00 -0500","price":10884,"status":false},
{"id2":10,"date":"2019-01-11 00:00:00 -0500","price":10975,"status":false},
{"id2":11,"date":"2019-01-12 00:00:00 -0500","price":12903,"status":true},
{"id2":12,"date":"2019-01-13 00:00:00 -0500","price":13983,"status":false},
{"id2":13,"date":"2019-01-14 00:00:00 -0500","price":12067,"status":false},
{"id2":14,"date":"2019-01-15 00:00:00 -0500","price":13347,"status":false},
{"id2":15,"date":"2019-01-16 00:00:00 -0500","price":13529,"status":true},
{"id2":16,"date":"2019-01-17 00:00:00 -0500","price":11848,"status":true},
{"id2":17,"date":"2019-01-18 00:00:00 -0500","price":10063,"status":false},
{"id2":18,"date":"2019-01-19 00:00:00 -0500","price":13067,"status":true},
{"id2":19,"date":"2019-01-20 00:00:00 -0500","price":11870,"status":false},
{"id2":20,"date":"2019-01-21 00:00:00 -0500","price":11691,"status":false},
{"id2":21,"date":"2019-01-22 00:00:00 -0500","price":10657,"status":false},
{"id2":22,"date":"2019-01-23 00:00:00 -0500","price":11193,"status":false},
{"id2":23,"date":"2019-01-24 00:00:00 -0500","price":14024,"status":true},
{"id2":24,"date":"2019-01-25 00:00:00 -0500","price":11570,"status":false},
{"id2":25,"date":"2019-01-26 00:00:00 -0500","price":11043,"status":false},
{"id2":26,"date":"2019-01-27 00:00:00 -0500","price":12948,"status":false},
{"id2":27,"date":"2019-01-28 00:00:00 -0500","price":10301,"status":true},
{"id2":28,"date":"2019-01-29 00:00:00 -0500","price":13218,"status":true},
{"id2":29,"date":"2019-01-30 00:00:00 -0500","price":11398,"status":false},
{"id2":30,"date":"2019-01-31 00:00:00 -0500","price":13571,"status":true},
{"id2":31,"date":"2019-02-01 00:00:00 -0500","price":13981,"status":false},
{"id2":32,"date":"2019-02-02 00:00:00 -0500","price":14846,"status":true},
{"id2":33,"date":"2019-02-03 00:00:00 -0500","price":11659,"status":false},
{"id2":34,"date":"2019-02-04 00:00:00 -0500","price":10971,"status":true},
{"id2":35,"date":"2019-02-05 00:00:00 -0500","price":10275,"status":false},
{"id2":36,"date":"2019-02-06 00:00:00 -0500","price":10290,"status":true},
{"id2":37,"date":"2019-02-07 00:00:00 -0500","price":10492,"status":false},
{"id2":38,"date":"2019-02-08 00:00:00 -0500","price":11231,"status":false},
{"id2":39,"date":"2019-02-09 00:00:00 -0500","price":13992,"status":false},
{"id2":40,"date":"2019-02-10 00:00:00 -0500","price":14278,"status":true},
{"id2":41,"date":"2019-02-11 00:00:00 -0500","price":11533,"status":true},
{"id2":42,"date":"2019-02-12 00:00:00 -0500","price":14106,"status":false},
{"id2":43,"date":"2019-02-13 00:00:00 -0500","price":13272,"status":false},
{"id2":44,"date":"2019-02-14 00:00:00 -0500","price":11706,"status":true},
{"id2":45,"date":"2019-02-15 00:00:00 -0500","price":10682,"status":false},
{"id2":46,"date":"2019-02-16 00:00:00 -0500","price":11866,"status":false},
{"id2":47,"date":"2019-02-17 00:00:00 -0500","price":13437,"status":false},
{"id2":48,"date":"2019-02-18 00:00:00 -0500","price":12955,"status":true},
{"id2":49,"date":"2019-02-19 00:00:00 -0500","price":12797,"status":true},
{"id2":50,"date":"2019-02-20 00:00:00 -0500","price":12318,"status":false},
{"id2":51,"date":"2019-02-21 00:00:00 -0500","price":11631,"status":true},
{"id2":52,"date":"2019-02-22 00:00:00 -0500","price":14441,"status":false},
{"id2":53,"date":"2019-02-23 00:00:00 -0500","price":14542,"status":true},
{"id2":54,"date":"2019-02-24 00:00:00 -0500","price":14658,"status":false},
{"id2":55,"date":"2019-02-25 00:00:00 -0500","price":11404,"status":true},
{"id2":56,"date":"2019-02-26 00:00:00 -0500","price":12422,"status":true},
{"id2":57,"date":"2019-02-27 00:00:00 -0500","price":14401,"status":true},
{"id2":58,"date":"2019-02-28 00:00:00 -0500","price":13325,"status":false},
{"id2":59,"date":"2019-03-01 00:00:00 -0500","price":12988,"status":false},
{"id2":60,"date":"2019-03-02 00:00:00 -0500","price":13310,"status":false},
{"id2":61,"date":"2019-03-03 00:00:00 -0500","price":14272,"status":false},
{"id2":62,"date":"2019-03-04 00:00:00 -0500","price":11268,"status":false},
{"id2":63,"date":"2019-03-05 00:00:00 -0500","price":10494,"status":false},
{"id2":64,"date":"2019-03-06 00:00:00 -0500","price":13445,"status":false},
{"id2":65,"date":"2019-03-07 00:00:00 -0500","price":12651,"status":false},
{"id2":66,"date":"2019-03-08 00:00:00 -0500","price":10341,"status":false},
{"id2":67,"date":"2019-03-09 00:00:00 -0500","price":13362,"status":false},
{"id2":68,"date":"2019-03-10 00:00:00 -0500","price":10307,"status":false},
{"id2":69,"date":"2019-03-11 00:00:00 -0400","price":13895,"status":true},
{"id2":70,"date":"2019-03-12 00:00:00 -0400","price":14621,"status":false},
{"id2":71,"date":"2019-03-13 00:00:00 -0400","price":10267,"status":false},
{"id2":72,"date":"2019-03-14 00:00:00 -0400","price":13245,"status":false},
{"id2":73,"date":"2019-03-15 00:00:00 -0400","price":11366,"status":false},
{"id2":74,"date":"2019-03-16 00:00:00 -0400","price":13330,"status":false},
{"id2":75,"date":"2019-03-17 00:00:00 -0400","price":14324,"status":true},
{"id2":76,"date":"2019-03-18 00:00:00 -0400","price":10650,"status":false},
{"id2":77,"date":"2019-03-19 00:00:00 -0400","price":10619,"status":true},
{"id2":78,"date":"2019-03-20 00:00:00 -0400","price":14598,"status":false},
{"id2":79,"date":"2019-03-21 00:00:00 -0400","price":13266,"status":false},
{"id2":80,"date":"2019-03-22 00:00:00 -0400","price":13127,"status":false},
{"id2":81,"date":"2019-03-23 00:00:00 -0400","price":14860,"status":false},
{"id2":82,"date":"2019-03-24 00:00:00 -0400","price":13254,"status":true},
{"id2":83,"date":"2019-03-25 00:00:00 -0400","price":14991,"status":false},
{"id2":84,"date":"2019-03-26 00:00:00 -0400","price":12145,"status":false},
{"id2":85,"date":"2019-03-27 00:00:00 -0400","price":13406,"status":true},
{"id2":86,"date":"2019-03-28 00:00:00 -0400","price":10538,"status":false},
{"id2":87,"date":"2019-03-29 00:00:00 -0400","price":13717,"status":true},
{"id2":88,"date":"2019-03-30 00:00:00 -0400","price":11854,"status":true},
{"id2":89,"date":"2019-03-31 00:00:00 -0400","price":14345,"status":true},
{"id2":90,"date":"2019-04-01 00:00:00 -0400","price":14781,"status":false}]
