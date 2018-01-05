import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import Navbar from './Navbar';
import StockViewerContainer from '../containers/StockViewerContainer';

const sections = [];

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar sections={sections} colorStyle="navbar-inverse" />
        <StockViewerContainer />
        
      </div>

    );
  }
}

export default App;
