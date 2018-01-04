import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const Definition = ({ children }) => (
  <Fragment>
    <h5 className="title is-5">Definition</h5>
    <p>{children}</p>
  </Fragment>
);

Definition.propTypes = {
  children: PropTypes.node.isRequired
};

export default Definition;
