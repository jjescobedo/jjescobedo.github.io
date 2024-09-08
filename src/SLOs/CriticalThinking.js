import React from 'react';
import '../content.css';
import '../page.css';

function CriticalThinking() {
  return (
    <div>
      <div>
        <h1 className="page-header-left-1">Critical Thinking</h1>
        <hr/>
      </div>
      <div>
        <div className="slo-content-container">
          <img src="/classsync-logo.png" alt="Artifact 1" className="left-slo-image"/>
          <div className="slo-text-container">
            <h3 className="page-header-left-3">Project Invent, Junior Year</h3>
            <div className="text-box">
              <h4 className="page-header-left-4">ClassSync</h4>
            </div>
            <div className="text-box">
              <p className="body-text-left">
                Our objective was to create something completely new with a large technological component that benefitted something within the Da Vinci community.
              </p>
            </div>
            <div className="text-box">
              <p className="body-text-left">
                For this project, I had to learn how to use several new software tools to optimize our production of the ClassSync app. ClassSync, currently, is a device that manages a lot of the menial tasks that teachers have to do in the classroom. I contributed to the original structure of the database in Python. I designed some portions of the application's appearance in an online tool called Figma. I also designed the entirety of the physical device in a different tool called OnShape, a 3D-modeling software.
              </p>
            </div>
            <div className="text-box">
              <p className="body-text-left">
                When I first started working on ClassSync, I don't think anyone on the team knew how long we would be working on it. I think ClassSync is the ultimate critical thinking project because as we progressed through the project, we discovered new things we had to learn in order to progress more. All of us contributing to ClassSync constantly had to adapt our thinking and skillset in order to make ClassSync functional.
              </p>
            </div>
            <div className="text-box">
              <p className="body-text-left">
                I learned how much work it takes to develop a new product almost completely from scratch and I also learned how so many things could go wrong if you don't plan right. On portions of the project that we didn't completely plan out, we almost always had to give up and start from the drawing board after getting stuck.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CriticalThinking;