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
      indicatorId: null,
      getChildMeasure: false,
      getMultiMeasure: false
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.setContentAreaId = this.setContentAreaId.bind(this);
    this.setIndicatorId = this.setIndicatorId.bind(this);
  }

  setContentAreaId(contentAreaId) {
    this.setState({ contentAreaId, indicatorId: null });
  }

  setIndicatorId(indicatorId) {
    this.setState({ indicatorId });
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
    const { getChildMeasure, getMultiMeasure, contentAreaId, indicatorId } = this.state;
    const validUrl = indicatorId !== null;
    const url = `https://ephtracking.cdc.gov/apigateway/api/v1/measures/${indicatorId}/${getChildMeasure ? 1 : 0}/${getMultiMeasure ? 1: 0}`
    return (
      <Fragment>
        <h1 className="title">Retrieving List of Measures for an Indicator</h1>
        <h5 className="title is-5">Usage</h5>
        <CodeBlock>
          https://ephtracking.cdc.gov/apigateway/api/{'{'}version{'}'}/measures/{'{'}indicatorId{'}'}/{'{'}getChildMeasure{'}'}/{'{'}getMultiMeasure{'}'}/{'{'}returnType{'}'}[?apiToken]
        </CodeBlock>
        <hr />
        <h5 className="title is-5">Set parameters</h5>
        <SelectContentArea handleSelect={this.setContentAreaId} />
        <SelectIndicator contentAreaId={contentAreaId} handleSelect={this.setIndicatorId} />
        <div className="field">
          <label className="checkbox">
            <input name="getChildMeasure" type="checkbox" checked={this.state.getChildMeasure} onChange={this.handleInputChange} className="input-checkbox" />
            getChildMeasure
          </label>
        </div>
        <div className="field">
          <label className="checkbox">
            <input name="getMultiMeasure" type="checkbox" checked={this.state.getMultiMeasure} onChange={this.handleInputChange} className="input-checkbox" />
            getMultiMeasure
          </label>
        </div>
        <hr />
        <Preview url={url} validUrl={validUrl} />
      </Fragment>
    );
  }
}

export default Measures;
