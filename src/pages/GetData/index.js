import React, { Component, Fragment } from 'react';

import CodeBlock from '../../components/CodeBlock';
import CIM from '../../components/CIM';
import StateFIPS from '../../containers/StateFIPS';
import Preview from '../../components/Preview';

class GetYears extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: 'https://ephtracking.cdc.gov/apigateway/api/v1/getData/null',
      measureId: null,
      states: []
    };
    this.setMeasureId = this.setMeasureId.bind(this);
    this.handleStateSelect = this.handleStateSelect.bind(this);
  }
  
  setMeasureId(measureId) {
    this.setState({
      measureId,
      url: `https://ephtracking.cdc.gov/apigateway/api/v1/getYears/${measureId}`
     });
  }

  handleStateSelect(check) {
    console.log(check);
    this.setState({
      states: check
    });
  }

  render() {
    const { url } = this.state;
    return (
      <Fragment>
        <h1 className="title">Retrieving Data Values for a Measure</h1>
        <h5 className="title is-5">Usage</h5>
        <CodeBlock>
          https://ephtracking.cdc.gov/apigateway/api/{'{'}version{'}'}/getData/{'{'}measureId{'}'}/{'{'}state{'}'}/{'{'}includeCounty{'}'}/{'{'}temporal{'}'}/{'{'}isSmoothed{'}'}/{'{'}returnType{'}'}[?apiToken]
        </CodeBlock>
        <hr />
        <h5 className="title is-5">Set parameters</h5>
        <CIM handleSelect={this.setMeasureId} />
        <StateFIPS
          measureId={this.state.measureId}
          handleCheck={this.handleStateSelect}
        />
        <hr />
      </Fragment>
    );
  }
}

export default GetYears;
