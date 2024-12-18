import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import axios from "axios"
import App from './App';
import api from './api/api'; // Menambahkan import untuk api.js

// import dotenv from "dotenv"

// dotenv.config()


axios.defaults.withCredentials = true

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

