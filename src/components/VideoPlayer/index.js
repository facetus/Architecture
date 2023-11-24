import React, { useEffect, useRef, useState } from "react";
import Stepper from "../Stepper";
import "./VideoPlayer.css";
import { useRecoilState } from "recoil";
import { currentStateState } from "../../state";
import Loader from "../Loader";

const totalSteps = 14;
const DEBUG = true;

const VideoPlayer = ({ currentInfo }) => {
  const [currentState, setCurrentState] = useRecoilState(currentStateState);
  const [progress, setProgress] = useState(0);

  const videoRef = useRef(null);

  const [preloaded, setPreloaded] = useState(false);

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
      console.log("hi", currentInfo)
      videoRef.current.currentTime = currentInfo.fromTime;
      videoRef.current.play();
    }
  }, [currentState]);

  useEffect(() => {
    if (DEBUG) {
      const xhr = new XMLHttpRequest();
      xhr.withCredentials = true;
      xhr.responseType = "blob";

      xhr.addEventListener("progress", function (e) {
        console.log(e);
        if (e.lengthComputable) {
          const percentComplete = ((e.loaded / e.total) * 100).toFixed(2);
          setProgress(e.loaded / e.total);
          console.log("Progress: " + percentComplete + "%");
        }
      });

      xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
          videoRef.current.src = URL.createObjectURL(xhr.response);
          setPreloaded(true);
        }
      });

      // Check if the video is already in the cache
      const cacheTest = new Image();
      cacheTest.src = "http://localhost:3000/media/video/beta1.0.mp4";
      cacheTest.onload = function () {
        console.log("Video is already cached.");
        // Perform actions when the video is already cached
      };

      // Perform the XMLHttpRequest if the video is not in the cache
      if (!cacheTest.complete) {
        xhr.open("GET", "http://localhost:3000/media/video/beta1.0.mp4");
        xhr.send();
      }
    } else {
      videoRef.current.src = URL.createObjectURL("/media/video/beta1.0.mp4");
    }
  }, []);

  return (
    <>
      <Loader
        active={!preloaded}
        progress={progress}
        setCurrentState={setCurrentState}
      ></Loader>
      <div className="video-container">
        <div className="vignette-overlay"></div>
        <video ref={videoRef} playsInline preload="auto">
          <source type="video/mp4" />
          {/* <source src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" /> */}
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
