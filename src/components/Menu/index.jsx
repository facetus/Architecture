import React from "react";
import Button from "./Button"; // Assuming you have a Button component
import ProgressBar from "./ProgressBar";
import "./Menu.css";
import ListViewSteps from "./ListViewSteps";
import LangButton from "./LangButton";

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
    />
    <path
      d="M3 6H21"
      stroke="black"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M3 18L9 18"
      stroke="black"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
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
    />
    <path
      d="M18.07 1.92993C19.9447 3.80521 20.9978 6.34829 20.9978 8.99993C20.9978 11.6516 19.9447 14.1947 18.07 16.0699M14.54 5.45993C15.4773 6.39757 16.0039 7.66911 16.0039 8.99493C16.0039 10.3208 15.4773 11.5923 14.54 12.5299"
      stroke="black"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);


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
    />
    <path
      d="M7 7C14.2 7 16 7 16 7"
      stroke="black"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M7 10C11 10 12 10 12 10"
      stroke="black"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M7 13C13.4 13 15 13 15 13"
      stroke="black"
      strokeWidth="2"
      strokeLinecap="round"
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

const Menu = ({
  onButtonOneClick,
  onButtonTwoClick,
  currentState,
  currentInfo,
}) => {
  return (
    <div className="menu">
      <ProgressBar percentage={0.6} />
      <Button
        icon={contentIcon}
        activeIcon={contentIconActive}
        changeToActiveColors={true}
        title="Ζαγορίσια Αρχιτεκτονική"
        sideContent={
          <div className="sideNote">
            <div className="group">{currentInfo.group}</div>
            <div className="title">{currentInfo.title}</div>
          </div>
        }
      >
        <ListViewSteps currentState={currentState}></ListViewSteps>
      </Button>

      <div className="right">
        <Button
          icon={mute}
          activeIcon={<></>}
          changeToActiveColors={false}
        ></Button>
        <LangButton/>
        <Button
          icon={message}
          activeIcon={messageActive}
          changeToActiveColors={true}
          title={currentInfo.title}
        >
          {currentInfo.content}
        </Button>
      </div>
    </div>
  );
};

export default Menu;
