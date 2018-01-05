import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import logo from "../stratton_oakmont.png";


const NavbarItem = ({section, active}) => {
  let activeState = '';

  if (active) {
    activeState = 'active';
  }

  return (
    <li class={`nav-item ${activeState}`}>
      <a class="nav-link" href={`#${section.title}`}>
        { section.title }
      </a>
    </li>
  );
};

const Navbar = ({sections, colorStyle}) => {
  return (
    <nav class="navbar navbar-toggleable-md navbar-light bg-faded">
      <button
        class="navbar-toggler navbar-toggler-right"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation">
        <span class="navbar-toggler-icon" />
      </button>
      <a class="navbar-brand" href="#">
        <img src={logo} className="App-logo"/> {'    '} Fideligard
      </a>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <NavbarItem section={{title:'Home'}} active={true} />
          {sections.map(section => {
            return <NavbarItem section={section} />;
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
