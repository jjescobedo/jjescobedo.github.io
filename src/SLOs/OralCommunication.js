import React from 'react';
import '../content.css';
import '../page.css';

function OralCommunication() {
  return (
    <div>
      <div>
        <h1 className="page-header-left-1">Oral Communication</h1>
        <hr/>
      </div>
      <div>
        <div className="content-container-1">
          <img src="/cte-flyer.png" alt="Artifact 1" className="left-slo-image"/>
          <div className="text-container">
            <h3 className="page-header-left-3">CTESA, Junior Year</h3>
            <div className="text-box">
              <h4 className="page-header-left-4">CTE Spring Advisory</h4>
            </div>
            <div className="text-box">
              <p className="body-text-left">
                The objective was to speak for 10 minutes about your story/journey with a CTE pathway at a DJUSD school at a virtual conference.
              </p>
            </div>
            <div className="text-box">
              <p className="body-text-left">
                I spent hours perfecting a script to use for the conference. I also worked with a third-party hired by DJUSD to make my reading of the script incredibly engaging to a large audience for the full ten minutes.
              </p>
            </div>
            <div className="text-box">
              <p className="body-text-left">
                While learning to make my reading more engaging, I learned several oral communication concepts such as how to use specific inflection and pitch to highlight the subject of whatever you're speaking about. During the conference, I had to combine everything I learned to speak for the longest amount of time I'd ever presented, by myself.
              </p>
            </div>
            <div className="text-box">
              <p className="body-text-left">
                This activity forced me to adapt a lot as my default presenting style is serious and somewhat monotonous, but I had to bring a lot of emotion and energy into my voice to keep the audience engaged. I know now when to implement different emotions to my voice to accentuate a certain point.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OralCommunication;