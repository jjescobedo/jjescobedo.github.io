import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import SLOReflections from './SLOReflections';
import CurricularLiteracy from './SLOs/CurricularLiteracy';
import CriticalThinking from './SLOs/CriticalThinking';
import WrittenCommunication from './SLOs/WrittenCommunication';
import OralCommunication from './SLOs/OralCommunication';
import Collaboration from './SLOs/Collaboration';
import Professionalism from './SLOs/Professionalism';
import LearningMindset from './SLOs/LearningMindset';
import Footer from '../Components/Footer';
import Navbar from '../Components/Navbar'
import '../Styles/layout.css';

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  return (
    <div>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/slo-reflections" element={<SLOReflections />} />
          <Route path="/curricular-literacy" element={<CurricularLiteracy />} />
          <Route path="/critical-thinking" element={<CriticalThinking />} />
          <Route path="/written-communication" element={<WrittenCommunication />} />
          <Route path="/oral-communication" element={<OralCommunication />} />
          <Route path="/collaboration" element={<Collaboration />} />
          <Route path="/professionalism" element={<Professionalism />} />
          <Route path="/learning-mindset" element={<LearningMindset />} />
        </Routes>
      </div>
      <Footer /> 
    </div>
  );
}

export default App;