import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
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
import './navbar.css';

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const location = useLocation();
  const sloPages = [
    '/curricular-literacy',
    '/critical-thinking',
    '/written-communication',
    '/oral-communication',
    '/collaboration',
    '/professionalism',
    '/learning-mindset'
  ];

  const gradePages = [
    '/tenth-grade',
    '/eleventh-grade',
    '/twelfth-grade'
  ];

  return (
    <div>
      <nav className="navbar">
        <img src="/DaVinciH.png" alt="Logo" className="navbar-logo" />
        <img src="/logo.png" alt="Logo" className="navbar-logo" />
        <ul>
          <li className={(location.pathname === '/') ? 'active-link' : ''}>
            <Link to="/">Home</Link>
          </li>
          <li className={(location.pathname === '/graduate-profile') || (sloPages.includes(location.pathname)) ? 'active-link' : ''}>
            <Link to="/graduate-profile">Graduate Profile</Link>
          </li>
          <li className={(location.pathname === '/slo-reflections') || (gradePages.includes(location.pathname)) ? 'active-link' : ''}>
            <Link to="/slo-reflections">SLO Reflections</Link>
          </li>
        </ul>
      </nav>
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
    </div>
  );
}

export default App;