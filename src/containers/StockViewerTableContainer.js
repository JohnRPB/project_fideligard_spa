import React, { Component } from 'react';
import StockViewerTable from '../components/StockViewerTable';
import {connect} from 'react-redux';
import API_KEY from '../api_key.js';
import {insertStocks} from '../actions.js';
import stockData from '../data/result.json';
console.log(stockData);

class StockViewerTableContainer extends Component {
 constructor(props){
   super(props)
   this.props = props;

   this.state = {filter:''}
 }

  render() {
    return (
      <StockViewerTable stocks={this.props.stocks}/>
    )
  }
}

const mapStateToProps = (state) => {
  // -------------------------------------------------------------
  // Use state filters to get display stocks 
  // -------------------------------------------------------------
  let stocks = state.insertStocks.byDate[state.dateFilter];
  console.log("------------------- START stocks from dateFilter -------------------");
  console.log(stocks);
  console.log("-------------------- END stocks --------------------");
  stocks = stocks ? stocks : [];
  stocks = stocks.filter((stock) => {
    return state.searchFilter === stock.ticker.slice(0, state.searchFilter.length);
  });

  return {
    stocks: stocks
  }
}

const mapDispatchToProps = (dispatch) => {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(StockViewerTable)
