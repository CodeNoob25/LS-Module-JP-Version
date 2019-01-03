var bookingRouter = require('express').Router();
var bookingController = require('./bookingController');



bookingRouter.route('/:id')
    .get(bookingController.retrieveBooking)

module.exports = bookingRouter;
