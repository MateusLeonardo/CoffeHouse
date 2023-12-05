import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.scss'
import { makeServer } from './api/mirageServer';

// Inicialize o MirageJS somente em ambiente de desenvolvimento
if (process.env.NODE_ENV === 'development') {
  makeServer({ environment: 'development' });
}


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
