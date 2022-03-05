import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/App';

import 'styles/tailwind.css';
import 'styles/global.css';

ReactDOM.render(
  <React.StrictMode>
    <React.Suspense fallback={<div />}>
      <App />
    </React.Suspense>
  </React.StrictMode>,
  document.getElementById('root'),
);
