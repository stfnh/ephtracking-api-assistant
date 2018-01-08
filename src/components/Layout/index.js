import React from 'react';
import PropTypes from 'prop-types';

import Footer from '../Footer';
import Navbar from '../Navbar';

const Layout = ({ children, activeMenu }) => (
  <div>
    <Navbar />
    <div className="container">
      {children}
    </div>
    <Footer />
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
