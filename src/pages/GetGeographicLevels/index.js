import React, { Component, Fragment } from 'react';

import CodeBlock from '../../components/CodeBlock';
import ApiJsonTree from '../../containers/ApiJsonTree';

class GegGeographicLevels extends Component {
  render() {
    return (
      <Fragment>
        <h1 className="title">Retrieving Geographic Levels for a Measure</h1>
        <hr />
        <CodeBlock>
          https://ephtracking.cdc.gov/apigateway/api/{'{'}version{'}'}/GetMeasures/{'{'}measureId{'}'}[?apiToken]
        </CodeBlock>
        <ApiJsonTree url="https://ephtracking.cdc.gov/apigateway/api/v1/getMeasures" />
      </Fragment>
    );
  }
}

export default GegGeographicLevels;
