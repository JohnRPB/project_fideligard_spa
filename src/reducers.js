import {combineReducers} from 'redux';
import {
  SELL,
  BUY,
  SET_DATE_FILTER,
  CHANGE_DISPLAY_STOCKS,
  INSERT_STOCKS
} from './actions';

const insertStocks = (state = [], action) => {
  switch(action.type) {
    case INSERT_STOCKS:
      return action.data;
    default:
      return state;
  }
}

const displayStocks = (state = [], action) => {
  switch(action.type) {
    case CHANGE_DISPLAY_STOCKS:
      return action.data
    default:
      return state;
  }
}

const userData = (state = {account: { balance: 300000, stocks: {} }, transactions: [] }, action) => {
  let newTransaction;

  switch (action.type) {
    case SELL:
        newTransaction = {
          type: action.data.transaction.type,
          stock: action.data.transaction.stock,
          amount: action.data.transaction.amount,
          date: action.data.transaction.date
        };
        return {
          account: {
            balance: state.account.balance += (action.data.stockPrice * action.data.transaction.amount),
            stocks: { 
              ...state.account.stocks, 
              [action.data.transaction.stock]: state.account.stocks[action.data.transation.stock] - action.data.transaction.amount
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
        return {
          account: {
            balance: state.account.balance -= (action.data.stockPrice * action.data.transaction.amount),
            stocks: { 
              ...state.account.stocks, 
              [action.data.transaction.stock]: state.account.stocks[action.data.transation.stock] + action.data.transaction.amount
            }
          },
          transactions: [...state.transactions, newTransaction]
        };
    default:
      return state;
  }
};

const dateFilter = (state = '', action) => {
  switch (action.type) {
    case SET_DATE_FILTER:
      return action.data;
    default:
      return state;
  }
};

export const stockApp = combineReducers({
  insertStocks,
  displayStocks,
  userData,
  dateFilter
});

