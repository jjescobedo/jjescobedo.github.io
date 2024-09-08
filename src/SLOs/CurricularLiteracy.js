import React from 'react';
import '../content.css';
import '../page.css';

function CurricularLiteracy() {
  return (
    <div>
      <div>
        <h1 className="page-header-left-1">Curricular Literacy</h1>
        <hr/>
      </div>
      <div>
        <div className="slo-content-container">
          <img src="/congressional-student-leadership-council.jpg" alt="Artifact 1" className="left-slo-image"/>
          <div className="slo-text-container">
            <h3 className="page-header-left-3">Extracurricular, Junior Year</h3>
            <div className="text-box">
              <h4 className="page-header-left-4">
                Congressional Student Leadership Council
              </h4>
            </div>
            <div className="text-box">
              <p className="body-text-left">
                The goal of the program is to allow local students to work directly with their elected officials and staff to develop leadership skills, learn how government works, and engage with our community.
                </p>
            </div>
            <div className="text-box">
              <p className="body-text-left">
                In the Leadership Council, everyone in the cohort would meet biweekly virtually for several hours to discuss pressing political issues. We would receive an in-depth background on the issues prior to our meetings and would attend seminars with experts on the specific issue every meeting. The culmination of the program was hosting a summit with an issue the cohort agree was the most important to spread information on, we settled on the mental health crisis.
              </p>
            </div>
            <div className="text-box">
              <p className="body-text-left">
                This activity enhanced my Curricular Literacy because it taught me a lot of very important information about each political issue itself, and I learned how government officials work to address them.
              </p>
            </div>
            <div className="text-box">
              <p className="body-text-left">
                This Leadership Council forced me to think a lot more about politics than I had before. Despite its ending, I still find myself wanting to learn more about the issues we discussed and stay updated with the current news.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CurricularLiteracy;