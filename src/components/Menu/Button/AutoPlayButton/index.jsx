import React from "react";
import Button from ".."; // Assuming you have a Button component
import "./AutoPlayButton.css";
import { useRecoilState } from "recoil";
import { autoPlayState } from "../../../../state";

const off = (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      y="6"
      width="24"
      height="13"
      rx="6.5"
      fill="#666666"
      className="outer-rect"
    />
    <rect
      x="2"
      y="8"
      width="9"
      height="9"
      rx="4.5"
      fill="white"
      className="inner-rect"
    />
  </svg>
);
const AutoPlayButtton = ({ currentInfo }) => {
  const [autoPlay, setAutoPlay] = useRecoilState(autoPlayState);


  return (
    <Button
      changeToActiveColors={false}
      icon={off}
      initActive={autoPlay}
      onChangeHandler={setAutoPlay}
      cta={
        <>
          <span className="gr">Αυτόματη Αναπαραγωγή</span>
          <span className="en">Auto Play</span>
        </>
      }
    ></Button>
  );
};

export default AutoPlayButtton;
