import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import StockViewerTable from './StockViewerTable';

const StockViewer = () => {
  return (
    <div className="row main-row">
      <div id="stock_viewer_container" className="col-md-4">
        <div id="stock_viewer_header">
          <h3> Stocks </h3>
          <label>Filter</label>
          <input type="text" name="" />
        </div>
        <StockViewerTable />
      </div>
    </div>
  );
};

export default StockViewer;
