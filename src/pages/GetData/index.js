import React, { Component, Fragment } from 'react';

import CodeBlock from '../../components/CodeBlock';
import CIM from '../../components/CIM';
import StateFIPS from '../../containers/StateFIPS';

import './GetData.css';

class GetYears extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: 'https://ephtracking.cdc.gov/apigateway/api/v1/getData/null',
      measureId: null,
      states: [],
      includeCounty: false,
      isSmoothed: false
    };
    this.setMeasureId = this.setMeasureId.bind(this);
    this.handleStateSelect = this.handleStateSelect.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
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

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  render() {
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
        <div className="field">
          <label className="checkbox">
            <input name="includeCounty" type="checkbox" checked={this.state.includeCounty} onChange={this.handleInputChange} className="input-checkbox" />
            Include County
          </label>
        </div>
        <div className="field">
          <label className="checkbox">
            <input name="isSmoothed" type="checkbox" checked={this.state.isSmoothed} onChange={this.handleInputChange} className="input-checkbox" />
            Is Smoothed (Note: the majority of measures do not have smoothing values)
          </label>
        </div>
        <hr />
      </Fragment>
    );
  }
}

export default GetYears;
