import React, { Component } from 'react';
import StockViewer from '../components/StockViewer';
import {connect} from 'react-redux';
import API_KEY from '../api_key.js';
import {insertStocks} from '../actions.js';

class StockViewerContainer extends Component {
 constructor(props){
   super(props)
   this.props = props;

   this.state = {filter:''}
 }

  componentDidMount() {
    fetch(`https://www.quandl.com/api/v3/datatables/WIKI/PRICES?ticker=AAPL&date=1999-12-31%2C1999-11-18%2C1999-11-19%2C1999-11-22&api_key=${API_KEY}`)
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        this.props.dispatch(insertStocks(json));
        console.log(json);
      })
      .catch((err) => {
        console.log(err);
      })
  }

  render() {
    return(
      <StockViewer stocks={this.props.stocks}/>
    )
  }
}

const mapStateToProps = (state) => {
  const toReturn = state.insertStocks.datatable 
  console.log(toReturn);
  return {
    stocks: state.insertStocks.datatable
  }
}

export default connect(mapStateToProps, null)(StockViewerContainer)
