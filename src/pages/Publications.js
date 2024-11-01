import React from 'react';
import './Publications.css'; // Add a CSS file for Publications styles

const Publications = () => {
  return (
    <div className="publications">
      <h2>Publications</h2>
      <div className="publication-list">
        <div className="publication-item">
          <h3>Exploring TCP Congestion Control: A Comprehensive Analysis of Cubic, RENO, and VENO Algorithms Using Hybrid Methodology and Machine Learning</h3>
          <p>TCP congestion control is essential for maintaining network stability and efficient data transfer in the context of contemporary networking. Three well-known algorithms: Cubic, RENO, and VENO were used in this study to analyze TCP congestion in detail with a specific focus on validating the superiority of the Cubic Algorithm. This work introduces a novel hybrid methodology combining machine learning techniques and human intervention.</p>
          <a href="https://link.springer.com/chapter/10.1007/978-981-97-4228-8_19" className="publication-link">Read More</a>
        </div>

        <div className="publication-item">
          <h3>Efficient Airlift and Enhanced Care: Unmanned Aerial Vehicles and Droid Solutions for Battlefield Casualty Evacuation</h3>
          <p>In modern military operations, timely and effective medical evacuation is crucial for reducing soldier casualties and enhancing combat effectiveness. This research presents an investigation into the use of Unmanned Aerial Vehicles (UAVs) and Droids as innovative solutions for battlefield casualty evacuation. By leveraging these unmanned systems, this research aims to optimize the response time and medical care quality in combat scenarios considering various battlefield conditions and scenarios.</p>
          <a href="https://ieeexplore.ieee.org/document/10511139" className="publication-link">Read More</a>
        </div>
        {/* Add more publications as needed */}
      </div>
    </div>
  );
};

export default Publications;