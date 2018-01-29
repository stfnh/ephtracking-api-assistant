import 'core-js/fn/array/find'; // polyfill for IE support
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// CSS framework, see https://bulma.io
// import 'bulma/css/bulma.css';
import 'font-awesome/css/font-awesome.min.css';
import 'react-checkbox-tree/lib/react-checkbox-tree.css';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
