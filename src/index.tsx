import React from 'react';
import ReactDOM from 'react-dom';

import './services/firebase';
import App from './App';
import { Reset } from './styles/generic/Reset';

ReactDOM.render(
  <React.StrictMode>
    <Reset />
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
