import React from 'react';
import './CircularProgressBar.css';

const CircularProgressBar = ({ value,label }) => {
  return (
    <div className="circular-progress">
      <svg viewBox="0 0 100 100">
        <circle className="outer" cx="50" cy="50" r="45"></circle>
        <circle className="inner" cx="50" cy="50" r="45" strokeDasharray={`${value} 100`}></circle>
      </svg>
      <div className="progress-value">{label}</div>
    </div>
  );
};

export default CircularProgressBar;