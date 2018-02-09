import React, { Component, Fragment } from 'react';

import CodeBlock from '../../components/CodeBlock';
import CIM from '../../components/CIM';
import Preview from '../../components/Preview';

class GeographicLevels extends Component {
  constructor(props) {
    super(props);
    this.state = {
      measureId: null
    };
    this.setMeasureId = this.setMeasureId.bind(this);
  }

  setMeasureId(measureId) {
    this.setState({ measureId });
  }

  render() {
    const { measureId } = this.state;
    const url = `https://ephtracking.cdc.gov/apigateway/api/v1/geographiclevels/${measureId}`;
    return (
      <Fragment>
        <h1 className="title">
          Retrieving List of all Geographic Levels for a Measure
        </h1>
        <h5 className="title is-5">Usage</h5>
        <CodeBlock>
          https://ephtracking.cdc.gov/apigateway/api/{'{'}version{'}'}/geographiclevels/{
            '{'
          }measureId{'}'}[?apiToken]
        </CodeBlock>
        <hr />
        <h5 className="title is-5">Set parameters</h5>
        <CIM handleSelect={this.setMeasureId} />
        <hr />
        <Preview url={url} validUrl={this.state.measureId !== null} />
      </Fragment>
    );
  }
}

export default GeographicLevels;
