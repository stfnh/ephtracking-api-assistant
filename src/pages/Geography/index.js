import React, { Component, Fragment } from 'react';

import CodeBlock from '../../components/CodeBlock';
import CIM from '../../components/CIM';
import SelectGeographicType from '../../containers/SelectGeographicType';
import Preview from '../../components/Preview';

class Geography extends Component {
  constructor(props) {
    super(props);
    this.state = {
      measureId: null,
      geographicTypeId: null,
      geographicRollup: false
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
    const { measureId, geographicTypeId, geographicRollup } = this.state;
    const validUrl = measureId !== null && geographicTypeId !== null;
    const url = `https://ephtracking.cdc.gov/apigateway/api/v1/geography/${measureId}/${geographicTypeId}/${
      geographicRollup ? 1 : 0
    }`;
    return (
      <Fragment>
        <h1 className="title">
          Retrieving all Geographies for a MeasureId, GeographicType and
          Geographic Rollup
        </h1>
        <h5 className="title is-5">Usage</h5>
        <CodeBlock>
          https://ephtracking.cdc.gov/apigateway/api/{'{'}version{'}'}/geography/{
            '{'
          }measureId{'}'}/{'{'}geographicTypeId{'}'}/{'{'}geographicRollup{'}'}[?apiToken]
        </CodeBlock>
        <hr />
        <h5 className="title is-5">Set parameters</h5>
        <CIM handleSelect={this.setMeasureId} />
        <SelectGeographicType
          handleSelect={this.setGeographicTypeId}
          measureId={measureId}
        />
        <div className="field">
          <label className="checkbox">
            <input
              name="geographicRollup"
              type="checkbox"
              checked={this.state.geographicRollup}
              onChange={this.handleInputChange}
              className="input-checkbox"
            />
            geographicRollup
          </label>
        </div>
        <hr />
        <Preview url={url} validUrl={validUrl} />
      </Fragment>
    );
  }
}

export default Geography;
