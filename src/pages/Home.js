// Home.js
import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <div className="hero-section">
        <h1 className="hero-title">Welcome to My Portfolio!</h1>
        <p className="hero-subtitle">Explore my projects and publications!</p>
        <a href="/projects" className="cta-button">View Projects</a>
      </div>
    </div>
  );
};

export default Home;