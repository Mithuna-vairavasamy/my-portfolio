import React, { useState } from 'react';

// Modal component
const Modal = ({ show, onClose, children }) => {
  if (!show) return null;

  return (
    <>
      <div style={overlayStyle} onClick={onClose} />
      <div style={modalStyle}>
        <button onClick={onClose} style={closeBtnStyle} aria-label="Close modal">&times;</button>
        <div>{children}</div>
      </div>
    </>
  );
};

// Your About content inside the modal
const AboutContent = () => (
  <div style={containerStyle} className="about-container">
    <h3 style={headingStyle}>About Me</h3>
    <p style={textStyle}>
      I'm <strong style={highlightStyle}>Mithuna Malini</strong>, a passionate BCA student at Stella Maris College for Women, Chennai. I specialize in full-stack web development and building real-time applications that solve real-world problems.
    </p>
    <p style={textStyle}>
      With proficiency in <strong style={highlightStyle}>C, Java, Python, React, MongoDB, PostgreSQL, and the MERN stack</strong>, I’ve developed projects like a College Event Management System and a mobile app for campus use.
    </p>
    <p style={textStyle}>
      My academic journey began at <strong style={highlightStyle}>Sri Sankara Vidyalaya</strong>, where I completed my 12th grade with <strong style={highlightStyle}>96.7%</strong>. My college years at Stella Maris were enriched by workshops, hands-on development, leadership experiences, and a <strong style={highlightStyle}>Proficiency Prize</strong>.
    </p>
    <p style={textStyle}>
      I’m a collaborative learner with leadership qualities, always seeking new challenges and contributing meaningfully to any team I’m part of.
    </p>
  </div>
);

// Main component example (or inside your ProfileCard)
const About = () => {
  const [showAbout, setShowAbout] = useState(false);

  return (
    <div>
      <button onClick={() => setShowAbout(true)} style={btnStyle}>About Me</button>

      <Modal show={showAbout} onClose={() => setShowAbout(false)}>
        <AboutContent />
      </Modal>
    </div>
  );
};

/* --- Styles --- */
const overlayStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: 'rgba(20, 20, 20, 0.85)',
  zIndex: 999,
};

const modalStyle = {
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  background: 'linear-gradient(135deg, #1f2937, #374151)', // Dark gray gradient
  color: '#e5e7eb', // Light gray text
  padding: '40px 35px',
  borderRadius: '15px',
  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.5)',
  maxWidth: '800px',
  width: '90%',
  maxHeight: '80vh',
  overflowY: 'auto',
  fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  zIndex: 1000,
};

const closeBtnStyle = {
  position: 'absolute',
  top: '15px',
  right: '20px',
  background: 'transparent',
  border: 'none',
  fontSize: '2rem',
  color: '#9ca3af', // Muted gray for close button
  cursor: 'pointer',
  transition: 'color 0.3s ease',
};

closeBtnStyle[':hover'] = {
  color: '#f87171', // Soft red on hover
};

const containerStyle = {
  textAlign: 'justify',
};

const headingStyle = {
  fontSize: '2.4rem',
  textAlign: 'center',
  marginBottom: '30px',
  fontWeight: '700',
  background: 'linear-gradient(90deg, #3b82f6, #9333ea)', // Gradient text from blue to purple
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  MozBackgroundClip: 'text',
  MozTextFillColor: 'transparent',
  userSelect: 'none',
};

const highlightStyle = {
  color: '#60a5fa', // Soft blue for highlights in text
  fontWeight: '600',
};

const textStyle = {
  fontSize: '1.15rem',
  lineHeight: '1.7',
  marginBottom: '25px',
  color: '#d1d5db', // Slightly lighter gray text
};

const btnStyle = {
  padding: '12px 30px',
  fontSize: '1.15rem',
  borderRadius: '8px',
  border: '2px solid #3b82f6', // blue border
  backgroundColor: 'transparent',
  color: '#3b82f6',
  cursor: 'pointer',
  boxShadow: '0 0 8px #3b82f6',
  transition: 'all 0.3s ease',
};

export default About;
