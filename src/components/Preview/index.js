import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import CodeBlock from '../CodeBlock';
import ApiJsonTree from '../../containers/ApiJsonTree';

/** Preview component that renders the API statement and the API JSON response  */
export class Preview extends Component {
  constructor(props) {
    super(props);
    /** track if API url was copied to clipboard */
    this.state = {
      copied: false
    };
  }

  componentWillReceiveProps(nextProps) {
    /** whenever the url changes, reset copied */
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
        {/* Preview of API statement */}
        <div className="columns">
          <div className="column is-three-quarters">
            <CodeBlock>
              {/* only render as link if url is valid to avoid dead links */}
              {validUrl ? (
                <a target="_blank" rel="noopener noreferrer" href={url}>
                  {url}
                </a>
              ) : (
                <p>{url}</p>
              )}
            </CodeBlock>
          </div>
          <div className="column">
            <CopyToClipboard
              text={url}
              onCopy={() => this.setState({ copied: true })}
            >
              <button className="button" disabled={validUrl ? false : true}>
                {copied ? 'Copied' : 'Copy to Clipboard'}
              </button>
            </CopyToClipboard>
          </div>
        </div>
        {/* show JSON tree of API call if url is valid (complete) */}
        {validUrl && <ApiJsonTree url={url} />}
      </Fragment>
    );
  }
}

Preview.propTypes = {
  /** the API url to be used for the preview */
  url: PropTypes.string.isRequired,
  /** if valid, the component will call the API url for receiving data */
  validUrl: PropTypes.bool
};

Preview.defaultProps = {
  validUrl: true
};

export default Preview;
