import React from 'react';
import {
  HashRouter as Router,
  Route
} from 'react-router-dom';

import Home from './pages/Home';
import GetMeasures from './pages/GetMeasures';
import Layout from './components/Layout';

const App = () => (
  <Router>
    <Layout>
      <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/getMeasures" component={GetMeasures} />
      </div>
    </Layout>
  </Router>
);

export default App;
