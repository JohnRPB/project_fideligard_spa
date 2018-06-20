import React from 'react';
import {connect} from 'react-redux';
import ListNavigator from '../components/ListNavigator.js';
import { withRouter } from 'react-router-dom';

const mapStateToProps = (state) => {
  return {};
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onChange: (e) => {
      return ownProps.history.push("/" + e.target.value.toLowerCase());
    }
  }
}

const ListNavigatorContainer = connect(mapStateToProps, mapDispatchToProps)(ListNavigator)

export default withRouter(ListNavigatorContainer);


