import React, { Component } from 'react';
import StockViewer from '../components/StockViewer';
import {connect} from 'react-redux';
import API_KEY from '../api_key.js';
import {insertStocks, setSearchFilter} from '../actions.js';
import stockData from '../data/result.json';

class StockViewerContainer extends Component {
  constructor(props){
    super(props)
    this.props = props;
  }

  componentWillMount() {
    this.props.loadStocks();
  }

  render() {
    return(
      <StockViewer {...this.props} />
    )
  }
}

const mapStateToProps = (state) => {
  const toReturn = state.insertStocks 
  console.log(toReturn);
  return {
    stocks: state.insertStocks
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onChange: (e) => {
      console.log("onChange!!!");
      return dispatch(setSearchFilter(e.target.value))
    },
    loadStocks: () => {
      console.log("loadStocks!!!");
      return dispatch(insertStocks(stockData))
    }
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(StockViewerContainer);
