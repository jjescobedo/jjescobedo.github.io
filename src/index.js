import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './content.css';
import './page.css';
import './button.css';
import './layout.css';
import './startup.css'
import './slo-reflections.css'
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
