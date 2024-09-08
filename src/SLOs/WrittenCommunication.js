import React from 'react';
import '../content.css';
import '../page.css';

function WrittenCommunication() {
  return (
    <div>
      <div>
        <h1 className="page-header-left-1">Written Communication</h1>
        <hr/>
      </div>
      <div>
        <div className="slo-content-container">
        <embed src="/ai4genes-schizophrenia-report.pdf" type="application/pdf" width="600" height="600" className="left-slo-pdf-1"/>
          <div className="slo-text-container">
            <h3 className="page-header-left-3">Extracurricular, Junior Year</h3>
            <div className="text-box">
              <h4 className="page-header-left-4">ai4genes at UC Davis</h4>
            </div>
            <div className="text-box">
              <p className="body-text-left">
                My objective was to create a research paper on how different protein-coding mutations affect risk of a disease.
              </p>
            </div>
            <div className="text-box">
              <p className="body-text-left">
                I wrote a research paper in standard research paper format, with an introduction, methods, results, and discussion section. I also included a references portion.
              </p>
            </div>
            <div className="text-box">
              <p className="body-text-left">
                The project required a very strict formatting in the writing of the paper so it can be understood by a multitude of people. The layout, organization, and stylization was all very purposeful and required a strict adherence to standard English language conventions.
              </p>
            </div>
            <div className="text-box">
              <p className="body-text-left">
                Writing this paper took many, many attempts and drafts before I wrote something that I was proud of. I had to learn how to write in a way that was both informative while being able to engage a wide variety of readers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WrittenCommunication;