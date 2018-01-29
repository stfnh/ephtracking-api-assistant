import React from 'react';
import PropTypes from 'prop-types';

import Footer from '../Footer';
import Navbar from '../Navbar';
import Sidemenu from '../Sidemenu';

const Layout = ({ children }) => (
  <div>
    <Navbar />
    <div className="container">
      <div className="columns is-desktop">
        <div className="column is-3">
          <Sidemenu />
        </div>
        <div className="column section">{children}</div>
      </div>
    </div>
    <Footer />
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
