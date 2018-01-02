import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Menu from '../Menu';
import Footer from '../Footer';
import './Layout.css';

const Layout = ({ children, activeMenu }) => (
  <div>
    <nav className="navbar is-primary" aria-label="main navigation">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item brand-text">EPH Tracking API Assistant</Link>
      </div>
    </nav>
    <div className="container">
      <div className="columns">
        <div className="column is-3">
          <Menu />
        </div>
        <div className="column is-9">
          {children}
        </div>
      </div>
    </div>
    <Footer />
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
