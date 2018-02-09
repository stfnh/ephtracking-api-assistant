import React, { Component, Fragment } from 'react';

import CodeBlock from '../../components/CodeBlock';
import Preview from '../../components/Preview';
import Definition from '../../components/Definition';

class GetMeasures extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: 'https://ephtracking.cdc.gov/apigateway/api/v1/getMeasures'
    };
  }

  render() {
    const { url } = this.state;
    return (
      <Fragment>
        <h1 className="title">Retrieving all Measures</h1>
        <h5 className="title is-5">Usage</h5>
        <CodeBlock>
          https://ephtracking.cdc.gov/apigateway/api/{'{'}version{'}'}/getMeasures[?apiToken]
        </CodeBlock>
        <hr />
        <Definition>Listing of all Measures</Definition>
        <hr />
        <Preview url={url} />
      </Fragment>
    );
  }
}

export default GetMeasures;
