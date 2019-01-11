import 'react-dates/initialize';
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';
import Axios from 'axios';
import Moment from 'moment';

import 'react-dates/lib/css/_datepicker.css';


import React from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';

//import Component from 'react';
//export default React.PureComponent;
//export const pureComponentAvailable = true;


class BookingModule extends (React.Component) {
    constructor(props) {
      super(props);
      this.state = {
        bookingData: [],
        days: 1,
      }
      this.getData = this.getData.bind(this);

    }

    getData() {
        let id = document.location.pathname;
        id = parseInt(id.match(/\d+/g));
        return Axios.get(`/api/booking/${id}`)
            .then((res) => {
                console.log(res.data)
                var availability = [];
                var reconverted = res.data[0].availability.split('-');
                reconverted.forEach((date) => {
                    availability.push(moment().dayOfYear(date));
                })
                this.setState({bookingData: res.data, blockedDates: availability})
                //console.log(res.data)
            })
            .catch(err => console.error('error on this ID', err))
    }

    componentDidMount() {
        console.log('did mount')
        this.getData()
        
    }

    render() {
        const isDayBlocked = day => this.state.blockedDates.filter((d) => d.isSame(day, 'day')).length > 0;
        if (this.state.bookingData.length > 0) {
            return (
  <div className = "app">
    <header className = "Nav">${this.state.bookingData[0].availability[0].price} per night
    <div>***** {this.state.bookingData[0].numReviews}</div>
    </header>
   <DateRangePicker
  startDate={this.state.startDate} // momentPropTypes.momentObj or null,
  startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
  endDate={this.state.endDate} // momentPropTypes.momentObj or null,
  endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
  onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })} // PropTypes.func.isRequired,
  focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
  onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
  isDayBlocked={isDayBlocked}
/>
<br></br>
<div>
<table>
<tr>
        <td> { (this.state.days)} day(s) at ${this.state.bookingData[0].availability[0].price} per night</td>
        <td>${this.state.bookingData[0].availability[0].price * this.state.days}</td>
    </tr>
    <tr>
        <td>Cleaning Fee</td>
        <td>${this.state.bookingData[0].cleaningFee}</td>
    </tr>
    <tr>
        <td>Service Fee</td>
        <td>${(this.state.bookingData[0].availability[0].price * 0.1).toFixed(0)}</td>
    </tr>
    <tr>
        <td>Total</td>
        <td>${(this.state.bookingData[0].availability[0].price * 1.1).toFixed(0)}</td>
    </tr>
</table>
<button name="button">Request to Book</button>
<div>You won't be charged yet</div>

</div>

</div>



            )
        } else {
            return (
                <div>*loading*</div>

            )
        }
    }
  }



  //
 // ReactDOM.render(<App />, document.getElementById('app'));


 window.BookingModule = BookingModule;