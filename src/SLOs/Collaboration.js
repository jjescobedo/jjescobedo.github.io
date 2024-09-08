import React from 'react';
import '../content.css';
import '../page.css';

function Collaboration() {
  return (
    <div>
      <div>
        <h1 className="page-header-left-1">Collaboration</h1>
        <hr/>
      </div>
      <div>
        <div className="slo-content-container">
        <iframe src="https://mri-scans-2b5e6.web.app/" title="Web App" width="600" height="400" className="left-slo-iframe"iframe/>
          <div className="slo-text-container">
            <h3 className="page-header-left-3">Summer Program, Senior Year</h3>
            <div className="text-box">
              <h4 className="page-header-left-4">AI Scholars Culminating Project</h4>
            </div>
            <div className="text-box">
              <p className="body-text-left">My objective was to create a programming project from scratch that implements a neural network for image classification or segmentation.</p>
            </div>
            <div className="text-box">
              <p className="body-text-left">I led my team to create a fully functional web app from scratch that predicts Alzheimer's disease from MRI scans of the brain.</p>
            </div>
            <div className="text-box">
              <p className="body-text-left">I enhanced my collaboration because organizing 5 people who've never used a programming flow control service such as Github while trying to work on a single program is difficult. We ended up setting up meetings where I would program on my computer on a large television/projector with the team giving ideas and debugging in parallel. This technique allowed us to make the only hosted web application with a user interface and model out of all the groups in the AI Scholars cohort.</p>
            </div>
            <div className="text-box">
              <p className="body-text-left">I'd been a team lead beforehand, however, I had to greatly adjust what I knew in order to help lead my team to success. I collaborated with one other person in my group who had the most understanding of programming in order to develop the means of collaboration for the whole team as described in the text above.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Collaboration;