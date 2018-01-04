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

  componentWillReceiveProps(nextProps) {
    if (this.props.url !== nextProps.url) {
      this.setState({
        copied: false
      });
    }
  }

  render() {
    const { url, validUrl } = this.props;
    const { copied } = this.state;
    return (
      <Fragment>
        <h5 className="title is-5">Output</h5>
        <div className="columns">
          <div className="column is-three-quarters">
            <CodeBlock>
              {
                validUrl ?
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={url}>
                  {url}
                </a>
                :
                <p>{url}</p>
              }
            </CodeBlock>
          </div>
          <div className="column">
            <CopyToClipboard text={url} onCopy={() => this.setState({ copied: true })}>
              <button className="button" disabled={validUrl ? false : true}>{copied ? "Copied" : "Copy to Clipboard"}</button>
            </CopyToClipboard>
          </div>
        </div>
        { validUrl && <ApiJsonTree url={url} /> }
      </Fragment>
    );
  }
}

Preview.propTypes = {
  url: PropTypes.string.isRequired,
  validUrl: PropTypes.bool
};

Preview.defaultProps = {
  validUrl: true
};
 
export default Preview;