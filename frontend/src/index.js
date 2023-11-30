import React, { StrictMode } from 'react';
import ReactDOM from "react-dom/frontend";
import './index.css';
import App from './components/App.js';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);
