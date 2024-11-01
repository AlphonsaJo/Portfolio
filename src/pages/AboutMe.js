import React from 'react';
import './AboutMe.css';
import LeetCodeStats from '../components/LeetCodeStats';

const AboutMe = () => {
  return (
    <div className="about-me">
      {/* About Me Section */}
      <div className="content-container">
        <h2 className="title">About Me</h2>
        <p className="description">
        I’m a dedicated Computer Science Engineering student with a strong interest in Data Science and Cloud Computing. Throughout my studies, I’ve actively worked on a wide range of projects, gaining experience in cloud computing, data science, machine learning, and embedded systems. I’m skilled in developing complete applications, from backend systems and databases to responsive, interactive frontends.
        My passion lies in using data to solve real-world problems and creating scalable solutions on cloud platforms. I enjoy building machine learning models that can make meaningful predictions and insights, as well as implementing efficient cloud-based systems that improve access and performance. I’m driven to keep learning and applying my skills to projects that make a positive impact, using technology to tackle new challenges and grow my expertise in these exciting fields.
        </p>

      </div>

      {/* LeetCode Stats Section */}
      <div className="leetcode-stats-container">
        <LeetCodeStats />
      </div>
    </div>
  );
};

export default AboutMe;
