import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import RatingPage from './components/RatingPage';
import ViewFeedbackPage from './components/ViewFeedbackPage';
import Navigation from './components/Navigation';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/rate" element={<RatingPage />} />
          <Route path="/feedback" element={<ViewFeedbackPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;