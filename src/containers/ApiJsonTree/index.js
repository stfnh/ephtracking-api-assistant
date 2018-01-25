import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import JSONTree from 'react-json-tree'
import Spinner from 'react-spinkit';

import './ApiJsonTree.css';

export class ApiJsonTree extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      data: null,
      isLoading: true,
      error: null
     }
  }

  componentDidMount() {
    this.getData(this.props.url);  
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.url !== nextProps.url) {
      this.getData(nextProps.url);
    }
  } 

  async getData(url) {
    try {
      const response = await axios(url);
      this.setState({
        data: response.data,
        isLoading: false
      })
    } catch (error) {
      console.error(error);
      this.setState({
        isLoading: false,
        error: error.message
      })
    }
  }

  render() { 
    const { data, isLoading, error } = this.state;
    return ( 
      <div>
        { isLoading && error === null
          ?
          <Spinner className="spinner" name="circle" color="steelblue"/>          
          :
          <JSONTree data={data} theme="monokai" />
        }
        { error &&
          <div className="notification is-danger">{error}</div>
        }
      </div>
    );
  }
}

ApiJsonTree.propTypes = {
  url: PropTypes.string.isRequired
}
 
export default ApiJsonTree;
