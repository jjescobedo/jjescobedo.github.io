import React from 'react';
import { Link } from 'react-router-dom';
import './content.css';
import './page.css';
import './button.css';
import './slo-reflections.css'

function SLOReflections() {
  return (
    <div>
    <div>
      <h1 className="page-header-left-1">SLO Reflections</h1>
      <hr/>
    </div>
    <div className="slo-reflections-container">
    <div className="slo-reflections-row">
      <div className="slo-reflection-item">
        <p>Tenth Grade Reflections</p>
        <Link to="/tenth-grade">
          <img src="/Grade-imgs/10th-grade-icon.png" alt="Tenth Grade" className="slo-reflection-image" />
        </Link>
      </div>
      <div className="slo-reflection-item">
        <p>Eleventh Grade Reflections</p>
        <Link to="/eleventh-grade">
          <img src="/Grade-imgs/11th-grade-icon.png" alt="Eleventh Grade" className="slo-reflection-image" />
        </Link>
      </div>
    </div>
    <div className="slo-reflections-row">
      <div className="slo-reflection-item">
        <p>Twelfth Grade Reflections</p>
        <Link to="/twelfth-grade">
          <img src="/Grade-imgs/12th-grade-icon.png" alt="Twelfth Grade" className="slo-reflection-image" />
        </Link>
      </div>
    </div>
  </div>
  </div>
  );
}

export default SLOReflections;