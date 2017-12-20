import React, { Component } from 'react';

import Layout from './components/Layout';
import SelectContentArea from './components/SelectContentArea';

class App extends Component {
  render() {
    return (
      <Layout>
        <SelectContentArea />
      </Layout>
    );
  }
}

export default App;
