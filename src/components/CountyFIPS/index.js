import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import CheckboxTree from 'react-checkbox-tree';

import COUNTIES from './counties';

class CountyFIPS extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: [],
      checked: [],
      counties: []
    };
    this.handleCheck = this.handleCheck.bind(this);
    this.handleExpand = this.handleExpand.bind(this);
    this.filterCounties = this.filterCounties.bind(this);
  }

  componentDidMount() {
    this.filterCounties(this.props.stateFips);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.stateFips !== this.props.stateFips) {
      this.filterCounties(nextProps.stateFips);
    }
  }

  filterCounties(stateFips) {
    const counties = COUNTIES.filter(c => stateFips === c.stateFips).map(c => ({
      value:
        c.stateFips.toString().padStart(2, '0') +
        c.countyFips.toString().padStart(3, '0'),
      label: c.countyName,
      icon: <i className="fa fa-map-marker" />
    }));
    this.setState({ counties });
  }

  handleCheck(checked) {
    this.setState({ checked });
    if (checked.length === this.state.counties.length) {
      this.props.handleCheck(['ALL']);
    } else {
      this.props.handleCheck(checked);
    }
  }

  handleExpand(expanded) {
    this.setState({ expanded });
  }

  render() {
    const nodes = [
      {
        value: 'ALL',
        label: 'All Counties',
        icon: <i className="fa fa-map-marker" />,
        children: this.state.counties
      }
    ];
    return (
      <Fragment>
        <div className="field">
          <label className="Counties" />
          <CheckboxTree
            nodes={nodes}
            checked={this.state.checked}
            expanded={this.state.expanded}
            onCheck={this.handleCheck}
            onExpand={this.handleExpand}
            disabled={
              this.props.stateFips === null ||
              typeof this.props.stateFips !== 'number'
            }
          />
        </div>
      </Fragment>
    );
  }
}

CountyFIPS.propTypes = {
  stateFips: PropTypes.number,
  handleCheck: PropTypes.func.isRequired
};

export default CountyFIPS;
