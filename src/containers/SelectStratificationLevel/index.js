import React, { Component } from 'react'
import PropTypes from 'prop-types';
import axios from 'axios';

class SelectStratificationLevel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      options: [],
      value: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.getOptions = this.getOptions.bind(this);
  }

  componentDidMount() {
    this.getOptions(this.props.contentAreaId, this.props.geographicTypeId);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.measureId !== this.props.measureId || nextProps.geographicTypeId !== this.props.geographicTypeId) {
      this.setState({ value: '' });
      this.getOptions(nextProps.measureId, nextProps.geographicTypeId);
    }
  }

  async getOptions(measureId, geographicTypeId) {
    if (measureId && geographicTypeId) {
      try {
        const response = await axios(`https://ephtracking.cdc.gov/apigateway/api/v1/stratificationlevel/${measureId}/${geographicTypeId}/0`);
        console.log(response);
        this.setState({
          options: response.data
        })
      } catch (error) {
        console.log(error);
      }
    }
  }

  handleChange(event) {
    this.props.handleSelect(event.target.value);
    this.setState({value: event.target.value});
  }

  render() {
    const { value, options } = this.state;
    const disabled = this.props.measureId === null || this.props.geographicTypeId === null;

    const optionsToRender = options.map((item, index) => (
      <option key={index} value={item.id}>{item.name}</option>
    ));
    optionsToRender.unshift([
      <option key="-1" value="" disabled>Select stratification level</option>,
    ]);

    return (
      <div className="field">
        <label className="label">Stratification level</label>
        <div className="control">
          <div className="select">
            <select value={value} onChange={this.handleChange} disabled={disabled}>
              {optionsToRender}
            </select>
          </div>
        </div>
      </div>
    );
  }
}

SelectStratificationLevel.propTypes = {
  handleSelect: PropTypes.func.isRequired,
  measureId: PropTypes.string,
  geographicTypeId: PropTypes.string
};

export default SelectStratificationLevel;
