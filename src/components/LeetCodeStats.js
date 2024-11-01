import React, { useState, useEffect } from 'react';
import './LeetCodeStats.css';

const LeetCodeStats = () => {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Your LeetCode username
  const USERNAME = 'alj46';

  useEffect(() => {
    const fetchLeetCodeStats = async () => {
      try {
        // Use LeetCode API proxy service
        const response = await fetch(`https://leetcode-stats-api.herokuapp.com/${USERNAME}`);

        if (!response.ok) {
          throw new Error('Failed to fetch LeetCode stats');
        }

        const data = await response.json();
        setStats(data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch LeetCode stats');
        setLoading(false);
      }
    };

    fetchLeetCodeStats();
  }, []);

  if (loading) return <div>Loading LeetCode stats...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="leetcode-stats">
      <h2>LeetCode Stats</h2>
      <div className="stats-grid">
        <div className="stat-item">
          <strong>Easy</strong>
          <span>{stats?.easySolved} solved</span>
        </div>
        <div className="stat-item">
          <strong>Medium</strong>
          <span>{stats?.mediumSolved} solved</span>
        </div>
        <div className="stat-item">
          <strong>Hard</strong>
          <span>{stats?.hardSolved} solved</span>
        </div>
        <div className="stat-item">
          <strong>Total</strong>
          <span>{stats?.totalSolved} solved</span>
        </div>
        <div className="stat-item">
          <strong>Acceptance Rate</strong>
          <span>{stats?.acceptanceRate}%</span>
        </div>
      </div>
    </div>
  );
};

export default LeetCodeStats;