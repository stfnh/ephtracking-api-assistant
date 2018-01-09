import React, { Component, Fragment } from 'react';

import CodeBlock from '../../components/CodeBlock';
import CIM from '../../components/CIM';
import GeographicFilter from '../../components/GeographicFilter'
import Preview from '../../components/Preview';
import SelectGeographicType from '../../containers/SelectGeographicType';
import SelectStratificationLevel from '../../containers/SelectStratificationLevel';
import SelectYears from '../../containers/SelectYears';

class GetCoreHolder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      measureId: null,
      geographicTypeId: null,
      stratificationLevelId: null,
      geographicTypeIdFilter: 'ALL',
      geographicItemsFilter: 'ALL',
      years: [],
      isSmoothed: false,
      getFullCoreHolder: false,
      queryParams: ''
    };
    this.setMeasureId = this.setMeasureId.bind(this);
    this.setGeographicTypeId = this.setGeographicTypeId.bind(this);
    this.setStratificationLevelId = this.setStratificationLevelId.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.setYears = this.setYears.bind(this);
    this.setGeographicFilter = this.setGeographicFilter.bind(this);
  }
  
  setMeasureId(measureId) {
    this.setState({
      measureId,
      geographicTypeId: null,
      stratificationLevelId: null,
      years: [],
      geographicTypeIdFilter: 'ALL',
      geographicItemsFilter: 'ALL',
     });
  }

  setGeographicTypeId(geographicTypeId) {
    this.setState({
      geographicTypeId,
      stratificationLevelId: null,
      geographicTypeIdFilter: 'ALL',
      geographicItemsFilter: 'ALL',
    });
  }

  setStratificationLevelId(stratificationLevelId, queryParams) {
    this.setState({ stratificationLevelId, queryParams });
  }

  setYears(years) {
    this.setState({ years });
  }

  setGeographicFilter(filter) {
    this.setState({
      geographicTypeIdFilter: filter.geographicTypeIdFilter,
      geographicItemsFilter: filter.geographicItemsFilter
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
    const { measureId, geographicTypeId, stratificationLevelId, geographicTypeIdFilter, geographicItemsFilter, years, isSmoothed, getFullCoreHolder, queryParams } = this.state;
    const isValidUrl = measureId !== null && stratificationLevelId !== null
      && geographicTypeIdFilter !== null && geographicItemsFilter !== null && years.length > 0;
    const url = `https://ephtracking.cdc.gov/apigateway/api/v1/getCoreHolder/${measureId}/${stratificationLevelId}/${geographicTypeIdFilter}/${geographicItemsFilter}/${years.toString()}/${isSmoothed ? 1 : 0}/${getFullCoreHolder ? 1 : 0}${queryParams.length > 0 ? `?${queryParams}` : ''}`

    return (
      <Fragment>
        <h1 className="title">Retrieving all Values for a Measure</h1>
        <h5 className="title is-5">Usage</h5>
        <CodeBlock>
          https://ephtracking.cdc.gov/apigateway/api/{'{'}version{'}'}/getCoreHolder/{'{'}measureId{'}'}/{'{'}stratificationLevelId{'}'}/{'{'}geographicTypeIdFilter{'}'}/{'{'}geographicItemsFilter{'}'}/{'{'}temporal{'}'}/{'{'}isSmoothed{'}'}/{'{'}getFullCoreHolder{'}'}[?apiToken][?Variables...]
        </CodeBlock>
        <hr />
        <h5 className="title is-5">Set parameters</h5>
        <CIM handleSelect={this.setMeasureId} />
        <SelectGeographicType measureId={measureId} handleSelect={this.setGeographicTypeId} />
        <SelectStratificationLevel measureId={measureId} geographicTypeId={geographicTypeId} handleSelect={this.setStratificationLevelId} />
        <GeographicFilter measureId={measureId} geographicTypeId={geographicTypeId} handleSelect={this.setGeographicFilter} />
        <SelectYears measureId={measureId} handleCheck={this.setYears} />
        <div className="field">
          <label className="checkbox">
            <input name="isSmoothed" type="checkbox" checked={this.state.isSmoothed} onChange={this.handleInputChange} className="input-checkbox" />
            Is Smoothed
          </label>
          <p className="help">Note: the majority of measures do not have smoothing values</p>
        </div>
        <div className="field">
          <label className="checkbox">
            <input name="getFullCoreHolder" type="checkbox" checked={this.state.getFullCoreHolder} onChange={this.handleInputChange} className="input-checkbox" />
            getFullCoreHolder
          </label>
        </div>
        <hr />
        <Preview url={url} validUrl={isValidUrl} />
      </Fragment>
    );
  }
}

export default GetCoreHolder;
