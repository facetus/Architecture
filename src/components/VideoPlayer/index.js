import React, { useRef } from "react";
import Stepper from "../Stepper";
import "./VideoPlayer.css";
import { useRecoilState } from "recoil";
import { currentStateState } from "../../state";

const totalSteps = 14;

const VideoPlayer = () => {
  const [currentState, setCurrentState] = useRecoilState(currentStateState);
  const videoRef = useRef(null);

  const handleNext = () => {
    const currentTime = videoRef.current.currentTime;
    videoRef.current.currentTime = currentTime + 1;
    videoRef.current.play();

    if (currentState < totalSteps) setCurrentState(currentState + 1);
  };

  const handlePrevious = () => {
    const currentTime = videoRef.current.currentTime;
    videoRef.current.currentTime = Math.max(0, currentTime - 1);
    if (currentState > 1) setCurrentState(currentState - 1);
  };

  return (
    <div className="video-container">
      <div className="vignette-overlay"></div>
      <video ref={videoRef} playsInline>
        <source src="/εισοδος_εξοδος.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <Stepper
        currentStep={currentState}
        totalSteps={totalSteps}
        onNext={handleNext}
        onPrev={handlePrevious}
      />
    </div>
  );
};

export default VideoPlayer;
