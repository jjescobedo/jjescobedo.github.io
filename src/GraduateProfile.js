import React from 'react';
import { Link } from 'react-router-dom';
import useSaveLastPage from './useSaveLastPage';
import './content.css';
import './page.css';
import './button.css';

function GraduateProfile() {
  useSaveLastPage();
  return (
    <div className="graduate-profile-container">
      <div className="button-container">
        <div className="button-item">
          <p>Curricular Literacy</p>
          <Link to="/curricular-literacy">
            <img src="/SLO-imgs/Curricular-Literacy-Icon.png" alt="Curricular Literacy" className="button-image" />
          </Link>
        </div>
        <div className="button-item">
          <p>Critical Thinking</p>
          <Link to="/critical-thinking">
            <img src="/SLO-imgs/Critical-Thinking-Icon.png" alt="Critical Thinking" className="button-image" />
          </Link>
        </div>
        <div className="button-item">
          <p>Written Communication</p>
          <Link to="/written-communication">
            <img src="/SLO-imgs/Written-Communication-Icon.png" alt="Written Communication" className="button-image" />
          </Link>
        </div>
        <div className="button-item">
          <p>Oral Communication</p>
          <Link to="/oral-communication">
            <img src="/SLO-imgs/Oral-Communication-Icon.png" alt="Oral Communication" className="button-image" />
          </Link>
        </div>
        <div className="button-item">
          <p>Collaboration</p>
          <Link to="/collaboration">
            <img src="/SLO-imgs/Collaboration-Icon.png" alt="Collaboration" className="button-image" />
          </Link>
        </div>
        <div className="button-item">
          <p>Professionalism</p>
          <Link to="/professionalism">
            <img src="/SLO-imgs/Professionalism-Icon.png" alt="Professionalism" className="button-image" />
          </Link>
        </div>
        <div className="button-item">
          <p>Learning Mindset</p>
          <Link to="/learning-mindset">
            <img src="/SLO-imgs/Learning-Mindset-Icon.png" alt="Learning Mindset" className="button-image" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default GraduateProfile;