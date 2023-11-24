import React from "react";
import "./Card.css"; // Import your CSS file

const Card = ({ title, children, onClose, className }) => {
  return (
    <div className={className ? "card " + className : "card"}>
      <div className="card-header">
        <h3 className="title">{title}</h3>
        <button className="close-btn" onClick={onClose}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M18 6L6 18"
              stroke="#272727"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M6 6L18 18"
              stroke="#272727"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
      <div className="card-body">{children}</div>
    </div>
  );
};

export default Card;
