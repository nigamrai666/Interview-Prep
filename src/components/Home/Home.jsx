import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import './homeStyle.css';

const HomePage = () => {
  const navigate = useNavigate(); // Initialize navigate function

  const handleClick = () => {
    navigate('/interview-prep'); // Programmatic navigation on button click
  };

  return (
    <div className="home-container">
      {/* Main Section */}
      <section className="intro-section">
        <h1 className="main-title">Welcome to Interview Prep</h1>
        <p className="intro-text">
          Your all-in-one platform to prepare for technical and behavioral interviews.
          Master the skills needed to succeed in coding challenges, system design, and
          soft skills, with expert guidance and resources.
        </p>
        {/* Call handleClick on button click */}
        <button className="cta-button" onClick={handleClick}>
          Start Your Preparation Journey &#8594;
        </button>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <h2 className="features-title">Key Features</h2>
        <div className="features-cards">
          {/* Feature cards */}
          <div className="feature-card">
            <img src="/mock interview.jpg" alt="Mock Interviews" className="feature-image" />
            <h3>Mock Interviews</h3>
            <p>Practice real-world interview scenarios to build confidence.</p>
          </div>
          <div className="feature-card">
            <img src="/interview tips.jpg" alt="Interview Tips" className="feature-image" />
            <h3>Interview Tips</h3>
            <p>Get personalized advice and strategies for acing interviews.</p>
          </div>
          <div className="feature-card">
            <img src="/resources.jpg" alt="Resources" className="feature-image" />
            <h3>Resources</h3>
            <p>Access guides on data structures, algorithms, and soft skills.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
