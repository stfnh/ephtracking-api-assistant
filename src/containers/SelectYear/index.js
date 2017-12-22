import React, { Component } from 'react'
import PropTypes from 'prop-types';
import axios from 'axios';

class SelectYear extends Component {
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
    this.getOptions(this.props.contentAreaId);
  }measureId

  componentWillReceiveProps(nextProps) {
    if (nextProps.measureId !== this.props.measureId) {
      this.setState({ value: '' });
      this.getOptions(nextProps.measureId);
    }
  }

  async getOptions(measureId) {
    if (measureId) {
      try {
        const response = await axios(`https://ephtracking.cdc.gov/apigateway/api/v1/getYears/${measureId}`);
        console.log(response);
        this.setState({
          options: response.data.reverse()
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
    const disabled = this.props.measureId === null;

    const optionsToRender = options.map((item, index) => (
      <option key={index} value={item}>{item}</option>
    ));
    optionsToRender.unshift([
      <option key="-1" value="" disabled>Select year</option>,
      <option key="allyears" value="ALL">ALL</option>
    ]);

    return (
      <div className="field">
        <label className="label">Year</label>
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

SelectYear.propTypes = {
  handleSelect: PropTypes.func.isRequired,
  measureId: PropTypes.string
};

export default SelectYear;
