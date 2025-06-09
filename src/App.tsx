import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import RatingPage from './components/RatingPage';
import ViewFeedbackPage from './components/ViewFeedbackPage';
import AboutPage from './components/AboutPage';
import CommunityPage from './components/CommunityPage';
import SettingsPage from './components/SettingsPage';
import Navigation from './components/Navigation';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/rate" element={<RatingPage />} />
          <Route path="/feedback" element={<ViewFeedbackPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/community" element={<CommunityPage />} />
          <Route path="/settings" element={<SettingsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;