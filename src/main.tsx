import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <React.Suspense fallback={<div />}>
      <App />
    </React.Suspense>
  </React.StrictMode>,
  document.getElementById('root'),
);
