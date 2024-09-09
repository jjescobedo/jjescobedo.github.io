import React from 'react';
import useSaveLastPage from '../../Hooks/useSaveLastPage';
import '../../Styles/content.css';
import '../../Styles/page.css';

function LearningMindset() {
  useSaveLastPage();
  return (
    <div>
      <div>
        <h1 className="page-header-left-1">Learning Mindset</h1>
        <hr/>
      </div>
      <div>
        <div className="slo-content-container">
          <img src="./Artifacts/lu-logo.png" alt="Artifact 1" className="left-slo-image"/>
          <div className="slo-text-container">
            <h3 className="page-header-left-3">Latinos Unidos, Sophomore Year</h3>
            <div className="text-box">
              <h4 className="page-header-left-4">Running the Club</h4>
            </div>
            <div className="text-box">
              <p className="body-text-left">My objective was to create an engaging experience for club members, create engaging events for the general student body, and make sure all of our actions aligned with our mission</p>
            </div>
            <div className="text-box">
              <p className="body-text-left">I managed everything having to do with paperwork, almost all outreach to other organizaitons, as well as running meetings and additional events themselves.</p>
            </div>
            <div className="text-box">
              <p className="body-text-left">I strengthened my learning mindset because there were so many challenges that came with running a club like Latinos Unidos, challenges I'd never encountered before. All the challenges I encountered, I ultimately overcame in order to keep my club running.</p>
            </div>
            <div className="text-box">
              <p className="body-text-left">In running Latinos Unidos, I've learned how to do so much from fostering communication with national organizations to figuring out accurate bookkeeping with Adela. However many challenges were thrown my way, and there were many, I've loved tackling each one of them. I've set myself up to be able to run other organizations later in my life.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LearningMindset;