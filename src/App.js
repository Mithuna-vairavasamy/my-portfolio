import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ProfileCard from './Component/ProfileCard';
import Education from './Component/Education';

function App() {
  return (
    <Router basename="/my-portfolio">
      <div
        className="App"
        style={{
          textAlign: 'center',
          background: '#0a0a0a',
          color: 'white',
          minHeight: '100vh',
          padding: '20px'
        }}
      >
        <Routes>
          <Route path="/" element={<ProfileCard />} />
          <Route path="/education" element={<Education />} />  {/* Remove /my-portfolio here */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
