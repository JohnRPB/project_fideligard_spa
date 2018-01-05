import React, { Component } from 'react';
import StockViewer from '../components/StockViewer';
import StockViewerTable from '../components/StockViewerTable';
import {connect} from 'react-redux';


class StockViewerContainer extends Component {
 constructor(props){
   super(props)
   this.props = props;
   this.state = {filter:''}
 }
  render() {
    return(
      <StockViewer stocks={[]}/>
    )
  }
}

export default connect(null, null)(StockViewerContainer)
