import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Link,
  Switch,
} from 'react-router-dom'

const ListNavigator = ({sections, onChange }) => {
  console.log("sections: ", sections);
  
  return (
    <select class="main-select" onChange={onChange}>
      <option> Trade </option>
      <option> Transactions </option>
      <option> Portfolio </option>
    </select>
  );
}


export default ListNavigator;
