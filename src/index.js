import React from 'react';
import ReactDOM from 'react-dom';
import './css/normalize.css';
import './css/index.css';
import App from './js/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
