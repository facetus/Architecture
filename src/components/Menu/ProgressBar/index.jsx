import React from "react";
import "./ProgressBar.css"; // Import your CSS file

const ProgressBar = ({ percentage }) => {
  const filledStyle = {
    width: `${percentage * 100}%`,
  };

  return (
    <div className="progress-bar">
      <div className="filled" style={filledStyle}>
        <div className="filled-total"></div>
      </div>
    </div>
  );
};

export default ProgressBar;
