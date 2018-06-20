import React from 'react';
import {connect} from 'react-redux';
import Slider from '../components/Slider';
import config from '../data/config';
import moment from 'moment';
import { setDateFilter, replaceDisplayStocks } from '../actions';

const mapStateToProps = (state) => {
  return {
    dates: state.insertStocks.dates,
    stocks: state.insertStocks.byDate
  };
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return { 
    onSelectNewDate: (date, displayStocks) => {
      // change store's date filter
      dispatch(setDateFilter(date));
      // change store's display stocks
      dispatch(replaceDisplayStocks(displayStocks));
    }
  };

}

// need mergeProps to access dates in state
const mergeProps = (stateProps, dispatchProps) => {
  return {
    dates: stateProps.dates,
    onChange: (e) => {
      // convert slider value to date
      let newDate = moment(
        stateProps.dates[parseInt(e.target.value)]
      ).format("YYYY-MM-DD");
      // pass correctly formatted date and appropriate display stock to
      // function that will run action creators
      dispatchProps.onSelectNewDate(
        newDate,
        stateProps.stocks[newDate]
      )
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(Slider);

      
      
      
