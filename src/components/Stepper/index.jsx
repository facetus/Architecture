import React, { useEffect } from "react";
import "./Stepper.css"; // Import your CSS file

const Stepper = ({ currentStep, totalSteps, onNext, onPrev }) => {

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === 'ArrowLeft' && currentStep > 1) {
        onPrev();
      } else if (event.key === 'ArrowRight' && currentStep < totalSteps) {
        onNext();
      }
    };

    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [currentStep, totalSteps, onNext, onPrev]);


  return (
    <div className="stepper">
      <div
        className={"stepButton" + (currentStep <= 1 ? " inActive" : "")}
        onClick={onPrev}
      >
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
      <div
        className={"stepButton" + (currentStep >= totalSteps ? " inActive" : "")}
        onClick={onNext}
      >
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
