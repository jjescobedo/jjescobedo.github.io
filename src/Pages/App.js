import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import GraduatePortfolio from './GraduateProfile';
import SLOReflections from './SLOReflections';
import CurricularLiteracy from './SLOs/CurricularLiteracy';
import CriticalThinking from './SLOs/CriticalThinking';
import WrittenCommunication from './SLOs/WrittenCommunication';
import OralCommunication from './SLOs/OralCommunication';
import Collaboration from './SLOs/Collaboration';
import Professionalism from './SLOs/Professionalism';
import LearningMindset from './SLOs/LearningMindset';
import TenthGrade from './GradeYearReflections/TenthGrade';
import EleventhGrade from './GradeYearReflections/EleventhGrade';
import TwelfthGrade from './GradeYearReflections/TwelfthGrade';
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
          <Route path="/graduate-profile" element={<GraduatePortfolio />} />
          <Route path="/slo-reflections" element={<SLOReflections />} />
          <Route path="/curricular-literacy" element={<CurricularLiteracy />} />
          <Route path="/critical-thinking" element={<CriticalThinking />} />
          <Route path="/written-communication" element={<WrittenCommunication />} />
          <Route path="/oral-communication" element={<OralCommunication />} />
          <Route path="/collaboration" element={<Collaboration />} />
          <Route path="/professionalism" element={<Professionalism />} />
          <Route path="/learning-mindset" element={<LearningMindset />} />
          <Route path="/tenth-grade" element={<TenthGrade />} />
          <Route path="/eleventh-grade" element={<EleventhGrade />} />
          <Route path="/twelfth-grade" element={<TwelfthGrade />} />
        </Routes>
      </div>
      <Footer /> 
    </div>
  );
}

export default App;