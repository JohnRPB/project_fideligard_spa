import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';

const StockViewerTable = ({stocks}) => {
  return (
    <div id="stock_viewer_table">
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Symbol</th>
            <th>Price</th>
            <th>1D</th>
            <th>7D</th>
            <th>30D</th>
            <th>Trade?</th>
          </tr>
        </thead>
        <tbody>
          {stocks.data.map(stock => {
            return (
              <tr>
                <td>{stock[0]}</td>
                <td>{stock[3]}</td>
                <td>{stock[2]}</td>
                <td>{stock[3]}</td>
                <td>{stock[4]}</td>
                <td></td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default StockViewerTable;
