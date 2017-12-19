import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// CSS framework, see https://bulma.io
import 'bulma/css/bulma.css'

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
