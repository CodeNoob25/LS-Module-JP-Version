import 'react-dates/initialize';
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';
import Axios from 'axios';

import 'react-dates/lib/css/_datepicker.css';


import React from 'react';
import ReactDOM from 'react-dom';

//import Component from 'react';
//export default React.PureComponent;
//export const pureComponentAvailable = true;


class App extends (React.Component) {
    constructor(props) {
      super(props);
      this.state = {
        bookingData: [],
        date: [],
        focused: []
      }
      //this.getData = this.getData.bind(this);

    }

    // getData() {
    //     return Axios.get('/:id')
    //         .then((res) => {
    //             this.setState({bookingData: res.data})
    //             console.log(res.data)
    //         })
    // }

    // componentDidMount() {
    //     console.log('did mount')
    //     this.getData()
        

    // }

    render() {
      return (
<div className = "app">
<header className = "Nav">Gotta catch em all!</header>
   <DateRangePicker
  startDate={this.state.startDate} // momentPropTypes.momentObj or null,
  startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
  endDate={this.state.endDate} // momentPropTypes.momentObj or null,
  endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
  onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })} // PropTypes.func.isRequired,
  focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
  onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
/>

</div>
      );
    }
  }
  
  ReactDOM.render(<App />, document.getElementById('app'));


