import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import AppTheme from './theme'
import {ThemeProvider} from '@mui/material'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
    <App />
    
  </React.StrictMode>
);
