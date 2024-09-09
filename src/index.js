import React from 'react';
import ReactDOM from 'react-dom/client';
import './Styles/index.css';
import './Styles/content.css';
import './Styles/page.css';
import './Styles/button.css';
import './Styles/layout.css';
import './Styles/startup.css'
import './Styles/slo-reflections.css'
import App from './Pages/App';
import reportWebVitals from './Utils/reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
