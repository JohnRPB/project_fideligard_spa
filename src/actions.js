export const SELL = "SELL";
export const BUY = "BUY";
export const SET_DATE_FILTER = "SET_DATE_FILTER";
export const CHANGE_DISPLAY_STOCKS = "CHANGE_DISPLAY_STOCKS";
export const INSERT_STOCKS = "INSERT_STOCKS";
export const SET_SEARCH_FILTER = "SET_SEARCH_FILTER";

// ---------------------------------------------------------
// Thunks 
// 2018-01-05 14:01
// ---------------------------------------------------------

// const file = require('./data.js');

//export getInitialData = (dispatch) => {
  //return distpatch => {
    //return new Promise((resolve, reject) => {
      //setTimeout(() => { 
        //resolve(
          //dispatch(insertStocks(file.object));
        //);
      //}, 1000);
    //});
  //}
//}

// ---------------------------------------------------------
// Actions 
// 2018-01-05 14:04
// ---------------------------------------------------------

export const setDateFilter = data => {
  return {
    type: SET_DATE_FILTER,
    data
  };
};

export const setSearchFilter = data => {
  return {
    type: SET_SEARCH_FILTER,
    data
  };
};

export const transact = (type, stock, amount, date) => {
  console.log("------------------- START  -------------------");
  console.log("type: ", type);
  console.log("stock: ", stock);
  console.log("amount: ", amount);
  console.log("date: ", date);
  console.log("-------------------- END  --------------------");
  
  return {
    type: type,
    data: {
      transaction: { 
        type: type,
        stock: stock.ticker,
        amount,
        date
      },
      stockPrice: stock.price
    }
  }
}

export const insertStocks = (stocks) => {
  return {
    type: INSERT_STOCKS,
    data: stocks
  }
}

export const replaceDisplayStocks = (stocks) => {
  return {
    type: CHANGE_DISPLAY_STOCKS,
    data: stocks
  }
}
