import React from "react";
import Button from ".."; // Assuming you have a Button component

const mute = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="22"
    height="18"
    viewBox="0 0 22 18"
    fill="none"
  >
    <path
      d="M10 2L5 6H1V12H5L10 16V2Z"
      stroke="black"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="turnWhite"
    />
    <path
      d="M18.07 1.92993C19.9447 3.80521 20.9978 6.34829 20.9978 8.99993C20.9978 11.6516 19.9447 14.1947 18.07 16.0699M14.54 5.45993C15.4773 6.39757 16.0039 7.66911 16.0039 8.99493C16.0039 10.3208 15.4773 11.5923 14.54 12.5299"
      stroke="black"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="turnWhite"
    />
  </svg>
);

const unMute = (
  <svg
    width="23"
    height="16"
    viewBox="0 0 23 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10 1L5 5H1V11H5L10 15V1Z"
      stroke="#272727"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      className="turnWhite"
    />
    <path
      d="M22 5L16 11"
      stroke="#272727"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      className="turnWhite"
    />
    <path
      d="M16 5L22 11"
      stroke="#272727"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      className="turnWhite"
    />
  </svg>
);

const onChangeHandler = (change) => {
  console.log(change);
  console.log(document.getElementById("audio-player"));
  document.getElementById("audio-player").muted = change;
};

const MuteButton = () => {
  return (
    <Button
      icon={mute}
      activeIcon={unMute}
      changeToActiveColors={false}
      onChangeHandler={onChangeHandler}
    ></Button>
  );
};

export default MuteButton;
