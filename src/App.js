import React from 'react';
import {
  HashRouter as Router,
  Route
} from 'react-router-dom';

import Home from './pages/Home';
import Layout from './components/Layout';
import GetMeasures from './pages/GetMeasures';
import GetGeographicLevels from './pages/GetGeographicLevels';
import GetStates from './pages/GetStates';
import GetYears from './pages/GetYears';

const App = () => (
  <Router>
    <Layout>
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/getMeasures" component={GetMeasures} />
        <Route path="/getGeographicLevels" component={GetGeographicLevels} />
        <Route path="/getStates" component={GetStates} />
        <Route path="/getYears" component={GetYears} />
      </div>
    </Layout>
  </Router>
);

export default App;
