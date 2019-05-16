import React, { Component, Fragment } from 'react';

import CodeBlock from '../../components/CodeBlock';
import Preview from '../../components/Preview';
import SelectContentArea from '../../containers/SelectContentArea';

class Indicators extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contentAreaId: null
    };
    this.setContentAreaId = this.setContentAreaId.bind(this);
  }

  setContentAreaId(contentAreaId) {
    this.setState({ contentAreaId });
  }

  render() {
    const { contentAreaId } = this.state;
    const validUrl = contentAreaId !== null;
    const url = `https://ephtracking.cdc.gov/apigateway/api/v1/indicators/${contentAreaId}`;
    return (
      <Fragment>
        <h1 className="title">Retrieving List of all Content Areas</h1>
        <h5 className="title is-5">Usage</h5>
        <CodeBlock>
          https://ephtracking.cdc.gov/apigateway/api/{'{'}version{'}'}/indicators/{
            '{'
          }contentAreaId{'}'}[?apiToken]
        </CodeBlock>
        <hr />
        <h5 className="title is-5">Set parameters</h5>
        <SelectContentArea handleSelect={this.setContentAreaId} />
        <hr />
        <Preview url={url} validUrl={validUrl} />
      </Fragment>
    );
  }
}

export default Indicators;
