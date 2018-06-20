import React from 'react';
import config from '../data/config';
import moment from 'moment';

// -------------------------------------------------------------
// Convert config date range to number range 
// -------------------------------------------------------------
console.log("config.dateRange: ", config.dateRange);
let startDate = moment(config.dateRange[0]), endDate = moment(config.dateRange[1]);
let diff = endDate.diff(startDate, 'days');

const Slider = ({onChange, dates}) => {
  return (
    <div className="date-range-input">
      <input
        type="range"
        min={0}
        max={dates.length-1}
        onChange={onChange}
        className="slider"
        id="myRange"
        step={1}
      />
    </div>
  )
}

export default Slider;
