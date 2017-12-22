import React, { Component } from 'react';
import CheckboxTree from 'react-checkbox-tree';
import PropTypes from 'prop-types';
import axios from 'axios';

import states from './states';

export class StateFIPS extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: [],
      checked: [],
      statesForMeasure: []
    }
    this.loadData = this.loadData.bind(this);
    this.handleCheck = this.handleCheck.bind(this);
  }

  componentDidMount() {
    this.loadData(this.props.measureId);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.measureId !== this.props.measureId) {
      this.loadData(nextProps.measureId);
    }
  }

  async loadData(measureId) {
    if (measureId) {
      try {
        const response = await axios(`https://ephtracking.cdc.gov/apigateway/api/v1/getStates/${measureId}`);
        console.log(response);
        this.setState({
          statesForMeasure: response.data
        })
      } catch (error) {
        console.log(error);
      }
    }
  }

  handleCheck(checked) {
    if (checked.length === this.state.statesForMeasure.length) {
      this.setState({ checked });
      this.props.handleCheck(["ALL"]);
    } else {
      this.setState({ checked }); 
      this.props.handleCheck(checked);
    }
  }

  render() {
    const { statesForMeasure } = this.state;
    const filteredStates = states
      .filter(item => statesForMeasure.find(fips => item.value === fips));

    const nodes = [{
      value: 'ALL',
      label: 'All States',
      icon: <i className="fa fa-globe" />,
      children: filteredStates
    }];

    return (
      <div className="field">
        <CheckboxTree
          nodes={nodes}
          checked={this.state.checked}
          expanded={this.state.expanded}
          onCheck={this.handleCheck}
          onExpand={expanded => this.setState({ expanded })}
          disabled={this.props.measureId === null}
        />
      </div>
    );
  }
}

StateFIPS.propTypes = {
  handleCheck: PropTypes.func.isRequired,
  measureId: PropTypes.string
};

StateFIPS.defaultProps = {
  disabled: false
};

export default StateFIPS;