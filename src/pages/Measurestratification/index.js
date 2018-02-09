import React, { Component, Fragment } from 'react';

import CodeBlock from '../../components/CodeBlock';
import CIM from '../../components/CIM';
import SelectGeographicType from '../../containers/SelectGeographicType';
import Preview from '../../components/Preview';

class Measurestratification extends Component {
  constructor(props) {
    super(props);
    this.state = {
      measureId: null,
      geographicTypeId: null,
      isSmoothed: false
    };
    this.setMeasureId = this.setMeasureId.bind(this);
    this.setGeographicTypeId = this.setGeographicTypeId.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  setMeasureId(measureId) {
    this.setState({ measureId });
  }

  setGeographicTypeId(geographicTypeId) {
    this.setState({ geographicTypeId });
  }

  handleInputChange(event) {
    const { name, checked } = event.target;
    this.setState({
      [name]: checked
    });
  }

  render() {
    const { measureId, geographicTypeId, isSmoothed } = this.state;
    const validUrl = measureId !== null && geographicTypeId !== null;
    const url = `https://ephtracking.cdc.gov/apigateway/api/v1/measurestratification/${measureId}/${geographicTypeId}/${isSmoothed ? 1 : 0}`
    return (
      <Fragment>
        <h1 className="title">Retrieving Stratifications for a Measure and Geography Type</h1>
        <h5 className="title is-5">Usage</h5>
        <CodeBlock>
          https://ephtracking.cdc.gov/apigateway/api/{'{'}version{'}'}/measurestratification/{'{'}measureId{'}'}/{'{'}geographicTypeId{'}'}/{'{'}isSmoothed{'}'}[?apiToken]
        </CodeBlock>
        <hr />
        <h5 className="title is-5">Set parameters</h5>
        <CIM handleSelect={this.setMeasureId} />
        <SelectGeographicType handleSelect={this.setGeographicTypeId} measureId={measureId} />
        <div className="field">
          <label className="checkbox">
            <input name="isSmoothed" type="checkbox" checked={this.state.isSmoothed} onChange={this.handleInputChange} className="input-checkbox" />
            isSmoothed
          </label>
        </div>
        <hr />
        <Preview url={url} validUrl={validUrl} />
      </Fragment>
    );
  }
}

export default Measurestratification;
