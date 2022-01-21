import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import NavbarProvider from 'context/NavbarContext';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <NavbarProvider>
      <App />
    </NavbarProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
