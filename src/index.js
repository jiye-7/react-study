import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import AppProfile from './AppProfile';
import AppCounter from './AppCounter';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppCounter />
  </React.StrictMode>
);

reportWebVitals();
