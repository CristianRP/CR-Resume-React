import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
require('bootstrap-loader');
require('font-awesome-webpack-sass');
const json = require('./resume.json'); // load resume data file

ReactDOM.render(
  <App jsonObject={json} />,
  document.getElementById('root')
);

registerServiceWorker();
