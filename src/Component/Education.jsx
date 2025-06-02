import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Education.css';

const Education = () => {
  const navigate = useNavigate();

  const timelineData = [
    {
      year: '2021',
      title: 'High School',
      description: 'Completed 12th at Sri Sankara Vidyalaya School with 96.7%. Secured 100 in Commerce and Business Mathematics.',
    },
    {
      year: '2022',
      title: 'University',
      description: 'Started BCA at Stella Maris College. Focused on core programming and computer applications.',
    },
    {
      year: '2023',
      title: 'Internship',
      description: 'Full Stack Developer Internship at Ozzitech Company. Worked on real-world web apps.',
    },
    {
      year: '2024',
      title: 'Workshop',
      description: 'Completed MERN stack workshop and developed real-time applications.',
    },
    {
      year: '2025',
      title: 'Award',
      description: 'Received General Proficiency Award for outstanding academic performance.',
    },
  ];

  return (
    <section className="education-section" id="education">
      {/* Back button */}
      <button
        className="back-button"
        onClick={() => navigate('/')}
        aria-label="Go back to home"
      >
        ←Back
      </button>

      <h1 className="name-heading">
        <span className="white-text">Mithuna </span>
        <span className="highlight-text">Malini</span>
      </h1>
      <h2 className="education-title">Education</h2>
      <div className="timeline-container">
        <div className="timeline-line"></div>
        {timelineData.map((item, index) => (
          <div
            key={index}
            className={`timeline-block ${index % 2 === 0 ? 'left' : 'right'}`}
          >
            <div className="timeline-dot"></div>
            <div className="timeline-year">{item.year}</div>
            <div className="timeline-box">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
