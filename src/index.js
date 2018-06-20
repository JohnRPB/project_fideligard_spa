import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import 'bootstrap/dist/css/bootstrap.css';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux';

import {createStore} from 'redux';
import {stockApp} from './reducers.js';
import {
  setDateFilter,
  sell,
  buy,
  insertStocks,
  replaceDisplayStocks,
} from './actions';

let initialState = {
  insertStocks: {byDate: [], dates: []},
  userData: {account: {balance: 300000, stocks: {}}, transactions: []},
};
let store = createStore(
  stockApp,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
registerServiceWorker();
