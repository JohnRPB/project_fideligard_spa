import React from 'react';

const TradePanel = ({onSubmit, companies, onChangeTransactionType, userData}) => {
  console.log("companies: ", companies);

  let selectOptions = companies || {"You do not have any stocks": 0}

  
  return (
    <div className="trade-panel clearfix">
      <div className="main-panel-header">
        <h4 className="main-panel-section-title"> Trade </h4>
      </div>
      <div className="form-panel-left">
        <form
          className="trade-panel-form"
          action="/"
          method="post"
          onSubmit={onSubmit}>
          <div className="form-group">
            <label> Symbol: </label>
            <select id="company" name="company" className="form-control">
              {
                
                companies.map(company => {
                return (
                  <option> {company} </option>
                )
              })
              }
            </select>
          </div>
          <div className="form-group">
            <label> Transaction: </label>
            <select name="type" className="form-control" onChange={onChangeTransactionType}>
              <option>BUY</option>
              <option>SELL</option>
            </select>
          </div>
          <div className="form-group">
            <label> Quantity: </label>
            <input name="quantity" type="number" className="form-control" value="1" min="1" />
          </div>
          <div className="form-group">
             <p> Some filler text goes here</p>
             <p> More filler here </p>
          </div>
          <div className="form-group">
            <input type="submit" value="Place Order!"/>
          </div>
        </form>
      </div>
    <div className="form-panel-right">
      <p><strong>Cash available:</strong> ${userData.account.balance}</p>
      <p><strong>Order status:</strong> ${userData.account.balance}</p>
    </div>
    </div>
  );
};

export default TradePanel;
