import React, { Component, Fragment } from 'react';

import CodeBlock from '../../components/CodeBlock';
import SelectContentArea from '../../containers/SelectContentArea';
import SelectIndicator from '../../containers/SelectIndicator';
import SelectMeasure from '../../containers/SelectMeasure';
import Preview from '../../components/Preview';

class GegGeographicLevels extends Component {
  constructor(props) {
    super(props);
    this.state = {
      url: 'https://ephtracking.cdc.gov/apigateway/api/v1/getGeographicLevels/{measureId}',
      contentAreaId: null,
      indicatorId: null,
      measureId: null
    };
    this.setUrl = this.setUrl.bind(this);
    this.setcontentAreaId = this.setcontentAreaId.bind(this);
    this.setIndicatorId = this.setIndicatorId.bind(this);  
    this.setMeasureId = this.setMeasureId.bind(this);
  }

  setUrl(measureId) {
    this.setState({
      url: `https://ephtracking.cdc.gov/apigateway/api/v1/getGeographicLevels/${measureId}`
    });
  }
  
  setcontentAreaId(contentAreaId) {
    this.setState({ contentAreaId, indicatorId: null, measureId: null });
  }
  
  setIndicatorId(indicatorId) {
    this.setState({ indicatorId, measureId: null });
  }
  
  setMeasureId(measureId) {
    this.setState({ measureId });
    this.setUrl(measureId);
  }

  render() {
    const { url } = this.state;
    return (
      <Fragment>
        <h1 className="title">Retrieving Geographic Levels for a Measure</h1>
        <h5 className="title is-5">Usage</h5>
        <CodeBlock>
          https://ephtracking.cdc.gov/apigateway/api/{'{'}version{'}'}/GetMeasures/{'{'}measureId{'}'}[?apiToken]
        </CodeBlock>
        <hr />
        <h5 className="title is-5">Set parameters</h5>
        <SelectContentArea handleSelect={this.setcontentAreaId} />
        <SelectIndicator contentAreaId={this.state.contentAreaId} handleSelect={this.setIndicatorId} />
        <SelectMeasure indicatorId={this.state.indicatorId} handleSelect={this.setMeasureId} />
        <hr />
        <Preview url={url} validUrl={this.state.measureId!==null} />
      </Fragment>
    );
  }
}

export default GegGeographicLevels;
