import React from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

import menuItems from './menu-items';

const Navbar = () => {
  const menuItemsToRender = menuItems.map((item, index) => (
    <NavLink key={index} to={`/${item}`} className="navbar-item" activeClassName="is-active">{item}</NavLink>
  ));

  return (
    <nav className="navbar is-primary" aria-label="main navigation">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item brand-text">EPH Tracking API Assistant</Link>
      <button className="button navbar-burger">
        <span></span>
        <span></span>
        <span></span>
      </button>
      </div>
      <div className="navbar-menu">
        <div className="navbar-start">
          <div className="navbar-item has-dropdown is-hoverable">
          <NavLink to="/" className="navbar-link" activeClassName="is-active">API</NavLink>
          <div className="navbar-dropdown">
              { menuItemsToRender }
            </div>
          </div>
        </div>
        <div className="navbar-end">
          <div className="navbar-item">
            <a className="button is-link" href="https://github.com/stfnh/ephtracking-api-assistant" target="_blank">
              <span className="icon">
                <i className="fa fa-github" aria-hidden="true"></i>
              </span>
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
