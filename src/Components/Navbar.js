import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../Styles/layout.css';

function Navbar() {
  const location = useLocation();
  const sloPages = [
    '/curricular-literacy',
    '/critical-thinking',
    '/written-communication',
    '/oral-communication',
    '/collaboration',
    '/professionalism',
    '/learning-mindset'
  ];

  return (
    <nav className="navbar">
      <img src="./GeneralVisuals/DaVinciH.png" alt="Logo" className="navbar-logo" />
      <img src="./GeneralVisuals/logo.png" alt="Logo" className="navbar-logo" />
      <ul>
        <li className={(location.pathname === '/') ? 'active-link' : ''}>
          <Link to="/">Home</Link>
        </li>
        <li className={(location.pathname === '/slo-reflections') || (sloPages.includes(location.pathname)) ? 'active-link' : ''}>
          <Link to="/slo-reflections">SLO Reflections</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;