import React, { useEffect, useRef, useState } from "react";
import Stepper from "../Stepper";
import "./VideoPlayer.css";
import { useRecoilState } from "recoil";
import { currentStateState } from "../../state";
import Loader from "../Loader";
import { videoVolume } from "../../data/settings";

const totalSteps = 13;

const VideoPlayer = ({ currentInfo, preloadedDataList }) => {
  const [currentState, setCurrentState] = useRecoilState(currentStateState);

  const videoRef = useRef(null);

  const handleNext = () => {
    if (currentState < totalSteps) setCurrentState(currentState + 1);
  };

  const handlePrevious = () => {
    if (currentState > 1) setCurrentState(currentState - 1);
  };

  useEffect(() => {
    // Start playing audio when component mounts
    const vid = videoRef.current;
    if (currentInfo && vid) {
      vid.volume = videoVolume;
      const handleTimeUpdate = () => {
        if (vid.currentTime >= currentInfo.toTime) {
          videoRef.current.currentTime = currentInfo.toTime;
          vid.pause();
        }
      };

      vid.addEventListener("timeupdate", handleTimeUpdate);
      return () => {
        // Clean up: pause audio when component unmounts
        vid.removeEventListener("timeupdate", handleTimeUpdate);
      };
    }
  }, [currentInfo]);

  useEffect(() => {
    if (currentInfo) {
      videoRef.current.currentTime = currentInfo.fromTime;
      videoRef.current.play();
    }
  }, [currentState]);

  return (
    <>
      <div className="video-container">
        <div className="vignette-overlay"></div>
        <video ref={videoRef} id="video-player" playsInline preload="auto" src={preloadedDataList["/media/video/final.1.3.mp4"]}>
        </video>
        <Stepper
          currentStep={currentState}
          totalSteps={totalSteps}
          onNext={handleNext}
          onPrev={handlePrevious}
        />
      </div>
    </>
  );
};

export default VideoPlayer;
