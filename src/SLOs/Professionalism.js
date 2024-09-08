import React from 'react';
import useSaveLastPage from '../useSaveLastPage';
import '../content.css';
import '../page.css';

function Professionalism() {
  useSaveLastPage();
  return (
    <div>
      <div>
        <h1 className="page-header-left-1">Professionalism</h1>
        <hr/>
      </div>
      <div>
        <div className="slo-content-container">
        <embed src="/portmoto-snippet.pdf" type="application/pdf" width="600" height="600" className="left-slo-pdf-2"/>
          <div className="slo-text-container">
            <h3 className="page-header-left-3">Internship, Sophomore Year</h3>
            <div className="text-box">
              <h4 className="page-header-left-4">Portmoto</h4>
            </div>
            <div className="text-box">
              <p className="body-text-left">My objective was to document my experiments on OpenAI API prompts to perform a certain task.</p>
            </div>
            <div className="text-box">
              <p className="body-text-left">I had to document how I created a prompt for the OpenAI API to extract powerful or emotion-evoking quotes from a certain body of text. It was made for students' reflections of a project to make their reflection stronger or to summarize of the project.</p>
            </div>
            <div className="text-box">
              <p className="body-text-left">This project greatly enhanced my professionalism because I had to attend two virtual meetings a week and complete deliverables on time, while making sure to perform my duties to the best of my ability. I also made sure to organize my thought process while making the prompt, documenting as professionally as I could.</p>
            </div>
            <div className="text-box">
              <p className="body-text-left">This was one of my first job experiences outside of my family and I strived to impress and I really got to develop my professionalism in communications, meetings, and my work.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Professionalism;