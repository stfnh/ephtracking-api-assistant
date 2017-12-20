import React from 'react';
import PropTypes from 'prop-types';

import Menu from '../Menu';
import './layout.css';

const Layout = ({ children, activeMenu }) => (
  <div>
    <nav className="navbar is-primary" aria-label="main navigation">
      <div class="navbar-brand">
        <p className="navbar-item brand-text">EPH Tracking API Assistant</p>
      </div>
      <div className="navbar-end">
        <a className="navbar-item" href="https://ephtracking.cdc.gov/apihelp">EPH Tracking</a>
      </div>
    </nav>
    <div className="container">
      <div className="columns">
        <div className="column is-3">
          <Menu activeMenu={activeMenu} />
        </div>
        <div className="column is-9">
          <section className="section">
            <div className="content">
              {children}
            </div>
          </section>
        </div>
      </div>
    </div>
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  activeMenu: PropTypes.string
};

Layout.defaultProps = {
  activeMenu: "getMeasures"
};

export default Layout;
