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
import GetData from './pages/GetData';
import Contentareas from './pages/Contentareas';
import Indicators from './pages/Indicators';
import Measures from './pages/Measures';
import Geographiclevels from './pages/Geographiclevels';
import Geography from './pages/Geography';
import Measurestratification from './pages/Measurestratification';
import Stratificationlevel from './pages/Stratificationlevel';

const App = () => (
  <Router>
    <Layout>
      <div>
        <Route exact path="/" component={Home} />
        <Route path="/getMeasures" component={GetMeasures} />
        <Route path="/getGeographicLevels" component={GetGeographicLevels} />
        <Route path="/getStates" component={GetStates} />
        <Route path="/getYears" component={GetYears} />
        <Route path="/getData" component={GetData} />
        <Route path="/contentareas" component={Contentareas} />
        <Route path="/indicators" component={Indicators} />
        <Route path="/measures" component={Measures} />
        <Route path="/geographiclevels" component={Geographiclevels} />
        <Route path="/geography" component={Geography} />
        <Route path="/measurestratification" component={Measurestratification} />
        <Route path="/stratificationlevel" component={Stratificationlevel} />
      </div>
    </Layout>
  </Router>
);

export default App;
