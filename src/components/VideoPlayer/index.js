import React, { useEffect, useRef, useState } from "react";
import Stepper from "../Stepper";
import "./VideoPlayer.css";
import { useRecoilState } from "recoil";
import { currentStateState } from "../../state";
import Loader from "../Loader";

const totalSteps = 14;

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
    if (currentInfo) {
      const vid = videoRef.current;
      const handleTimeUpdate = () => {
        console.log("video", vid.currentTime, vid.duration);

        if (vid.currentTime > currentInfo.toTime) {
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
        <video ref={videoRef} playsInline preload="auto" src={preloadedDataList["/media/video/beta1.0.mp4"]}>
          {/* <source
            src={preloadedDataList["/media/video/beta1.0.mp4"]}
            type="video/mp4"
          /> */}
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
