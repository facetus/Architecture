import React from "react";
import "./Stepper.css"; // Import your CSS file

const Stepper = ({ currentStep, totalSteps, onNext, onPrev }) => {
  const handleNext = () => {
    if (onNext) {
      onNext();
    } else {
      console.log("Next button pressed");
    }
  };

  const handlePrev = () => {
    if (onPrev) {
      onPrev();
    } else {
      console.log("Previous button pressed");
    }
  };

  return (
    <div className="stepper">
      <div className="stepButton"  onClick={handlePrev}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="9"
          height="15"
          viewBox="0 0 9 15"
          fill="none"
        >
          <path
            d="M7.5 1.5L1.5 7.5L7.5 13.5"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="turnWhite"
          />
        </svg>
      </div>
      <span className="step-indicator">
        {currentStep} / {totalSteps}
      </span>
      <div className="stepButton" onClick={handleNext}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="9"
          height="15"
          viewBox="0 0 9 15"
          fill="none"
        >
          <path
            d="M1.5 13.5L7.5 7.5L1.5 1.5"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="turnWhite"
          />
        </svg>
      </div>
    </div>
  );
};

export default Stepper;
