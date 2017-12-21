import React from 'react';
import {
  HashRouter as Router,
  Route
} from 'react-router-dom';

import Home from './pages/Home';
import Layout from './components/Layout';
import GetMeasures from './pages/GetMeasures';
import GetGeographicLevels from './pages/GetGeographicLevels';

const App = () => (
  <Router>
    <Layout>
      <div>
        <Route exact path="/" component={Home} />
        <Route exact path="/getMeasures" component={GetMeasures} />
        <Route exact path="/getGeographicLevels" component={GetGeographicLevels} />
      </div>
    </Layout>
  </Router>
);

export default App;
