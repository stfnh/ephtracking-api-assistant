import React, { Component, Fragment } from 'react';

import CodeBlock from '../../components/CodeBlock';
import Preview from '../../components/Preview';
import SelectContentArea from '../../containers/SelectContentArea';
import SelectIndicator from '../../containers/SelectIndicator';

class Measures extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contentAreaId: null,
      indicatorId: null
    };
    this.setContentAreaId = this.setContentAreaId.bind(this);
    this.setIndicatorId = this.setIndicatorId.bind(this);
  }

  setContentAreaId(contentAreaId) {
    this.setState({ contentAreaId, indicatorId: null });
  }

  setIndicatorId(indicatorId) {
    this.setState({ indicatorId });
  }

  render() {
    const { contentAreaId, indicatorId } = this.state;

    const validUrl = indicatorId !== null;

    const url = `https://ephtracking.cdc.gov/apigateway/api/v1/measures/${indicatorId}`;

    return (
      <Fragment>
        <h1 className="title">Retrieving List of Measures for an Indicator</h1>
        <h5 className="title is-5">Usage</h5>
        <CodeBlock>
          https://ephtracking.cdc.gov/apigateway/api/
          {'{'}
          version
          {'}'}
          /measures/
          {'{'}
          indicatorId
          {'}'}
          [?apiToken]
        </CodeBlock>
        <hr />
        <h5 className="title is-5">Set parameters</h5>
        <SelectContentArea handleSelect={this.setContentAreaId} />
        <SelectIndicator
          contentAreaId={contentAreaId}
          handleSelect={this.setIndicatorId}
        />
        <hr />
        <Preview url={url} validUrl={validUrl} />
      </Fragment>
    );
  }
}

export default Measures;
