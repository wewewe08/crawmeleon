import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import Home from './Home.jsx'
import Header from "./Header.jsx"

import reportWebVitals from './reportWebVitals.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <Home />
  </React.StrictMode>
);

reportWebVitals();
