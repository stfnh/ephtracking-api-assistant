import React from 'react';
import PropTypes from 'prop-types';

import './CodeBlock.css';

const CodeBlock = ({ children }) => (
  <div className="code-block">{children}</div>
);

CodeBlock.propTypes = {
  children: PropTypes.node.isRequired
};

export default CodeBlock;