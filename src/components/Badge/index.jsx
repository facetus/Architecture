import React from "react";
import "./Badge.css"; // Import your CSS file

const Badge = ({  children }) => {
  const icon = (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20 25.0001C26.4433 25.0001 31.6666 19.7767 31.6666 13.3334C31.6666 6.89009 26.4433 1.66675 20 1.66675C13.5567 1.66675 8.33331 6.89009 8.33331 13.3334C8.33331 19.7767 13.5567 25.0001 20 25.0001Z"
        stroke="#B73F08"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.6834 23.15L11.6667 38.3333L20 33.3333L28.3334 38.3333L26.3167 23.1333"
        stroke="#B73F08"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );

  return (
    <div className="badge">
      {icon}
      <span className="badge-text">{children}</span>
    </div>
  );
};

export default Badge;
