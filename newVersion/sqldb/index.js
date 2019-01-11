var pg = require('pg');

var connectionString = process.env.POSTGRES = 'postgres://userName:/localhost:4008/listings';

var pgClient = new pg.Client(connectionString);

pgClient.connect();

var insert = (params, callback) => {
    var queryStr =
      "INSERT INTO Listings(id, name, capacity, cleaningFee, numReviews, price, availability) VALUES($1, $2, $3, $4, $5, $6, $7)";
      pgClient.query(queryStr, params)
      .then(res => {
        console.log(res.rows[0])
        // { name: 'brianc', email: 'brian.m.carlson@gmail.com' }
      })
      .catch(e => console.error(e.stack))
};

module.exports = pgClient;