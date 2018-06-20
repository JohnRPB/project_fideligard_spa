import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import TradePanel from '../components/TradePanel.js';
import serialize from 'form-serialize';
import { transact } from '../actions.js';

const mapStateToProps = (state, ownProps) => {
  return {
    companies: state.insertStocks.companies,
    date: state.dateFilter,
    userData: state.userData
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onSubmit: (e, date) => {
      e.preventDefault();
      let form = serialize(e.target, {hash: true});
      console.log("------------------- START form -------------------");
      console.log(form);
      console.log("-------------------- END form --------------------");
      dispatch(
        transact(form.type, { ticker: form.company, price:10 }, Number(form.quantity), date)
      ); 
      
    }, 
    onChangeTransactionType: (e) => {
      console.log("e.value: ", e.target.value);
    }
  }
}

const mergeProps = (stateProps, dispatchProps) => {
  return {
    onSubmit: (e) => {
      dispatchProps.onSubmit(e, stateProps.date)
    },
    companies: stateProps.companies,
    onChangeTransactionType: (e) => {
      dispatchProps.onChangeTransactionType(e)
    },
    userData: stateProps.userData
  }
}

const TradePanelContainer = withRouter(
  connect(mapStateToProps, mapDispatchToProps, mergeProps)(TradePanel)
);

export default TradePanelContainer;



