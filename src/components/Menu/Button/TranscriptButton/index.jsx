import React from "react";
import Button from ".."; // Assuming you have a Button component

const message = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      d="M3 15C3 15.5304 3.21071 16.0391 3.58579 16.4142C3.96086 16.7893 4.46957 17 5 17H17L21 21V5C21 4.46957 20.7893 3.96086 20.4142 3.58579C20.0391 3.21071 19.5304 3 19 3H5C4.46957 3 3.96086 3.21071 3.58579 3.58579C3.21071 3.96086 3 4.46957 3 5V15Z"
      stroke="black"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="turnWhite"
    />
    <path
      d="M7 7C14.2 7 16 7 16 7"
      stroke="black"
      strokeWidth="2"
      strokeLinecap="round"
      className="turnWhite"
    />
    <path
      d="M7 10C11 10 12 10 12 10"
      stroke="black"
      strokeWidth="2"
      strokeLinecap="round"
      className="turnWhite"
    />
    <path
      d="M7 13C13.4 13 15 13 15 13"
      stroke="black"
      strokeWidth="2"
      strokeLinecap="round"
      className="turnWhite"
    />
  </svg>
);

const messageActive = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      d="M3 15C3 15.5304 3.21071 16.0391 3.58579 16.4142C3.96086 16.7893 4.46957 17 5 17H17L21 21V5C21 4.46957 20.7893 3.96086 20.4142 3.58579C20.0391 3.21071 19.5304 3 19 3H5C4.46957 3 3.96086 3.21071 3.58579 3.58579C3.21071 3.96086 3 4.46957 3 5V15Z"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M7 7C14.2 7 16 7 16 7"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M7 10C11 10 12 10 12 10"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M7 13C13.4 13 15 13 15 13"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const TranscriptButton = ({ currentInfo, requestControl, resetControl }) => {
  return (
    <Button
      icon={message}
      activeIcon={messageActive}
      changeToActiveColors={true}
      title={currentInfo.title}
      requestControl={requestControl}
      resetControl={resetControl}
      cardClassName={"right"}
    >
      <>
        <span className="gr">
          {currentInfo.content.gr.map(({ text }) => text).join(" ")}
        </span>
        <span className="en">
          {currentInfo.content.en.map(({ text }) => text).join(" ")}
        </span>
      </>
    </Button>
  );
};

export default TranscriptButton;
