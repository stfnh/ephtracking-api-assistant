import React, { Component, Fragment } from 'react';

import CodeBlock from '../../components/CodeBlock';
import ApiJsonTree from '../../containers/ApiJsonTree';

class GetMeasures extends Component {
  render() {
    return (
      <Fragment>
        <h1 className="title">Retrieving all Measures</h1>
        <hr />
        <CodeBlock>
          https://ephtracking.cdc.gov/apigateway/api/{'{'}version{'}'}/GetMeasures[?apiToken]
        </CodeBlock>
        <ApiJsonTree url="https://ephtracking.cdc.gov/apigateway/api/v1/getMeasures" />
      </Fragment>
    );
  }
}

export default GetMeasures;
