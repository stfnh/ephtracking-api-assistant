import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import CodeBlock from '../CodeBlock';
import ApiJsonTree from '../../containers/ApiJsonTree';

export class Preview extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      copied: false
     }
  }
  render() {
    const { url } = this.props;
    const { copied } = this.state;
    return (
        <Fragment>
          <h5 className="title is-5">Preview</h5>
          <div className="columns">
            <div className="column is-three-quarters">
              <CodeBlock>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={url}>
                  {url}
                </a>
              </CodeBlock>
            </div>
            <div className="column">
              <CopyToClipboard text={url} onCopy={() => this.setState({ copied: true })}>
                <button className="button">{copied ? "Copied" : "Copy to Clipboard"}</button>
              </CopyToClipboard>
            </div>
          </div>
        <ApiJsonTree url={url} />
      </Fragment>
    );
  }
}

Preview.propTypes = {
  url: PropTypes.string.isRequired
};
 
export default Preview;