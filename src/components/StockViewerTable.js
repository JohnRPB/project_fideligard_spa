import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';

const StockViewerTable = ({stocks}) => {
  return (
    <div id="stock_viewer_table">
      <table>
        
  <thead>
  <tr>
  <th>Task</th>
  <th>Deadline</th>
  <th>Volunteers</th>
  </tr>
  </thead>
  <tbody>
  {
    stocks.map(stock = > {
  
  <tr>
  <td>stuff</td>
  <td>stuff</td>
  <td>
  {{#each task.users as |user|}}
  <span class='label label-primary'>{{ user.username }}</span> {{/each}}
  </td>
  <td class='col-md-2'>
  <span id='{{task.id}}' class='label label-success clickable'>Click to volunteer!</span>
  </td>
  </tr>
  {{/each}}
    });
  }
  </tbody>
    
      </table>
      
    </div>
  )
}

export default StockViewerTable;
