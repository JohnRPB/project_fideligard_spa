import {combineReducers} from 'redux';
import {
  SELL,
  BUY,
  SET_DATE_FILTER,
  CHANGE_DISPLAY_STOCKS,
  INSERT_STOCKS,
  SET_SEARCH_FILTER
} from './actions';
import stockData from './data/result.json';

const insertStocks = (state = [], action) => {
  switch(action.type) {
    case INSERT_STOCKS:
      return action.data;
    default:
      return state;
  }
}

let initialDate = stockData.dates[0];

const dateFilter = (state = initialDate, action) => {
  switch (action.type) {
    case SET_DATE_FILTER:
      return action.data;
    default:
      return state;
  }
};

const searchFilter = (state = "", action) => {
  switch (action.type) {
    case SET_SEARCH_FILTER:
      return action.data;
    default:
      return state;
  }
};

let initialStock = stockData.byDate[initialDate];
const displayStocks = (state = initialStock, action) => {
  switch(action.type) {
    case CHANGE_DISPLAY_STOCKS:
      return action.data
    default:
      return state;
  }
}

const userData = (state = {account: { balance: 300000, stocks: {} }, transactions: [] }, action) => {
  let newTransaction;
  let userStock;

  switch (action.type) {
    case SELL:
        newTransaction = {
          type: action.data.transaction.type,
          stock: action.data.transaction.stock,
          amount: action.data.transaction.amount,
          date: action.data.transaction.date
        };
        userStock = state.account.stocks[action.data.transaction.stock]
        return {
          account: {
            balance: state.account.balance += (action.data.stockPrice * action.data.transaction.amount),
            stocks: { 
              ...state.account.stocks, 
              [action.data.transaction.stock]: userStock - action.data.transaction.amount   
            }
          },
          transactions: [...state.transactions, newTransaction]
        };
    case BUY:
        newTransaction = {
          type: action.data.transaction.type,
          stock: action.data.transaction.stock,
          amount: action.data.transaction.amount,
          date: action.data.transaction.date
        };
        console.log("newTransaction: ", newTransaction);
        userStock = state.account.stocks[action.data.transaction.stock]
        return {
          account: {
            balance: state.account.balance -= (action.data.stockPrice * action.data.transaction.amount),
            stocks: { 
              ...state.account.stocks, 
              [action.data.transaction.stock]: userStock ? userStock + action.data.transaction.amount : action.data.transaction.amount
            }
          },
          transactions: [...state.transactions, newTransaction]
        };
    default:
      return state;
  }
};


export const stockApp = combineReducers({
  insertStocks,
  displayStocks,
  userData,
  dateFilter,
  searchFilter
});

