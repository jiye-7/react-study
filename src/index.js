import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AppMentors from './AppMentors';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppMentors />
  </React.StrictMode>
);

reportWebVitals();
