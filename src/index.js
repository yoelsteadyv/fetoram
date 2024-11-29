import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import axios from "axios"
import App from './App';

axios.defaults.withCredentials = true

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

