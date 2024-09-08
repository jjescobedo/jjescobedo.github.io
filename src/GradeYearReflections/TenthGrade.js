import React from 'react';
import '../content.css';
import '../page.css';

function TenthGrade() {
  return (
    <div>
      <div>
      <h1 className="page-header-left-1">10th Grade Reflections</h1>
      <hr></hr>
      </div>
      <div>
        <h3 className="page-header-left-3">Beginning of the Year Goal Setting</h3>
        <p className="body-text-left">
          Of all of the Schoolwide Learning Outcomes (SLOs), what are your strengths?
        </p>
        <p className="body-text-left">
          Of all of the Schoolwide Learning Outcomes (SLOs), what are your areas for growth?  
        </p>
        <p className="body-text-left">
          Which SLO would you most like to improve on this year? Why?
        </p>
      </div>
      <div>
        <h3 className="page-header-left-3">End of the Year Goal Reflections</h3>
        <p className="body-text-left">
          Of all of the Schoolwide Learning Outcomes (SLOs), what are your strengths?  Use the evidence in your portfolio as support.
        </p>
        <p className="body-text-left">
          Of all of the Schoolwide Learning Outcomes (SLOs), what are your areas for growth?  
        </p>
        <p className="body-text-left">
          Examining the SLO that you chose as an area of improvement at the start of the year, how did you learn/ grow/persevere this year?
        </p>
      </div>
    </div>
  );
}

export default TenthGrade;