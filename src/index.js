import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AppProducts from './AppProducts';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppProducts />
  </React.StrictMode>
);

reportWebVitals();
