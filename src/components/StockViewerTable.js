import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';

const StockViewerTable = ({stocks}) => {
  console.log("------------------- START stocks from table -------------------");
  console.log(stocks);
  console.log("-------------------- END stocks --------------------");
   
  return (
    <div id="stock_viewer_table" className="container table-responsive">
      <div className="row">
        {' '}
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Symbol</th>
              <th>Price</th>
              <th>1D</th>
              <th>7D</th>
              <th>30D</th>
            </tr>
          </thead>
          <tbody>
            {stocks.map((stock, key) => {
              return (
                <tr>
                  <td>{stock.ticker}</td>
                  <td>{stock.close}</td>
                  <td>{stock.d1 ? stock.d1 : "N/A"}</td>
                  <td>{stock.d7 ? stock.d7 : "N/A"}</td>
                  <td>{stock.d30 ? stock.d30 : "N/A"}</td>
                  <td />
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default StockViewerTable;
