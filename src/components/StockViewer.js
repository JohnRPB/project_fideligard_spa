import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import StockViewerTableContainer from '../containers/StockViewerTableContainer';

const StockViewer = ({stocks, onChange, loadStocks}) => {
  console.log("FUNCTIONAL COMOPNENTS!");
  return (
        <div className="row">
          <div id="stock_viewer_header" className="container">
            <div className="row">
              <h3 className="col-md-3 offset-md-1"> Stocks </h3>
              <label className="col-md-2 offset-md-1">Filter</label>
              <input className="col-md-3 offset-md-1" type="text" name="" onChange={onChange}/>
            </div>
          </div>
          <StockViewerTableContainer className="container" stocks={stocks} />
        </div>
  );
};

export default StockViewer;
