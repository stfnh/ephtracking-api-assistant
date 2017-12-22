import React, { Component, Fragment } from 'react';

import CodeBlock from '../../components/CodeBlock';
import Preview from '../../components/Preview';

class Contentareas extends Component {
  constructor(props) {
    super(props);
    this.state = {
      getChildMeasure: false,
      getMultiMeasure: false
    };
    this.handleInputChange = this.handleInputChange.bind(this);
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
    const { getChildMeasure, getMultiMeasure } = this.state;
    const url = `https://ephtracking.cdc.gov/apigateway/api/v1/contentareas/${getChildMeasure ? 1 : 0}/${getMultiMeasure ? 1: 0}/json`
    return (
      <Fragment>
        <h1 className="title">Retrieving List of all Content Areas</h1>
        <h5 className="title is-5">Usage</h5>
        <CodeBlock>
          https://ephtracking.cdc.gov/apigateway/api/{'{'}version{'}'}/contentareas/{'{'}getChildMeasure{'}'}/{'{'}getMultiMeasure{'}'}/{'{'}returnType{'}'}[?apiToken]
        </CodeBlock>
        <hr />
        <h5 className="title is-5">Set parameters</h5>
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
        <Preview url={url} />
      </Fragment>
    );
  }
}

export default Contentareas;
