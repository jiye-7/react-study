import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AppCard from './AppCard';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppCard />
  </React.StrictMode>
);

reportWebVitals();
