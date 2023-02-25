import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AppTheme from './AppTheme';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppTheme />
  </React.StrictMode>
);

reportWebVitals();
