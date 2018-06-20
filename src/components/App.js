import React, {Component} from 'react';
import logo from '../logo.svg';
import '../App.css';
import Navbar from './Navbar';
import StockViewerContainer from '../containers/StockViewerContainer';
import Slider from '../containers/SliderContainer';
import ListNavigator from './ListNavigator';
import ListNavigatorContainer from '../containers/ListNavigatorContainer.js';
import TradePanelContainer from '../containers/TradePanelContainer.js';

import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch,
  Redirect
} from 'react-router-dom';

// MAIN SITE SECTIONS

const site_sections = [
  {
    title: 'My account',
  },
];

// MAIN PANEL SECTIONS

const panel_sections = ['Trade', 'Transactions', 'Portfolio'];

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar sections={site_sections} colorStyle="navbar-inverse" />

        <div className="row main-row">
          <div id="stock_viewer_container" className="">
            <div className="col-spaced container-fluid">
              <StockViewerContainer />
            </div>
          </div>

          <Router>
            <div id="main_viewer" className="">
              <div className="col-spaced container-fluid ">
                <Slider />
                <div class="main_container">
                  <ListNavigatorContainer sections={panel_sections} />
                  <Route path="/trade" render={() => <TradePanelContainer /> } />
                  <Redirect from='/' to='trade' />
                </div>
              </div>
            </div>
          </Router>
        </div>
      </div>
    );
  }
}

export default App;
