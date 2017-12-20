import React, { Component } from 'react'
import axios from 'axios';

class SelectContentArea extends Component {

  constructor() {
    super();
    this.state = {
      options: []
    };
  }

  async componentDidMount() {
    try {
      const response = await axios(' https://ephtracking.cdc.gov/apigateway/api/v1/contentareas/0/0/json');
      this.setState({
        options: response.data        
      })
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    const options = this.state.options.map((item, index) => (
      <option key={index} value={item.id}>{item.name}</option>
    ));
    options.unshift(
      <option key="-1" value="" disabled>Select content area</option>      
    );

    return (
      <div className="select">
        <select value="">
          {options}
        </select>
      </div>
    );
  }
}

export default SelectContentArea;
