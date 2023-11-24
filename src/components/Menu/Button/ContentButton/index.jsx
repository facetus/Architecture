import React from "react";
import Button from ".."; // Assuming you have a Button component
import ListViewSteps from "../../ListViewSteps";

const contentIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      d="M3 12H15"
      stroke="black"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="turnWhite"
    />
    <path
      d="M3 6H21"
      stroke="black"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="turnWhite"
    />
    <path
      d="M3 18L9 18"
      stroke="black"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="turnWhite"
    />
  </svg>
);

const contentIconActive = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      d="M3 12H15"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M3 6H21"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M3 18L9 18"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ContentButton = ({ currentInfo, currentState }) => {
  return (
    <Button
      icon={contentIcon}
      activeIcon={contentIconActive}
      changeToActiveColors={true}
      cardClassName={"left"}
      title={
        <>
          <img src="/media/icons/logo.svg" className="logo" />{" "}
          <span className="gr">Ζαγορίσια Αρχιτεκτονική</span>
        </>
      }
      initActive
      sideContent={
        <div className="sideNote">
          <div className="group">{currentInfo.group}</div>
          <div className="title">{currentInfo.title}</div>
        </div>
      }
    >
      <ListViewSteps currentState={currentState}></ListViewSteps>
    </Button>
  );
};

export default ContentButton;
