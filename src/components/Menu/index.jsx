import React, { useEffect, useState } from "react";
import ProgressBar from "./ProgressBar";
import "./Menu.css";
import LangButton from "./Button/LangButton";
import MuteButton from "./Button/MuteButton";
import TranscriptButton from "./Button/TranscriptButton";
import ContentButton from "./Button/ContentButton";
import HelpButton from "./Button/HelpButton";
import { totalStates } from "../../data/steps";
import AutoPlayButtton from "./Button/AutoPlayButton";
import Badge from "../Badge";

const Menu = ({
  onButtonOneClick,
  onButtonTwoClick,
  currentState,
  currentInfo,
  currentStateTimeProgress,
}) => {
  const [percentage, setPercentage] = useState(0);
  const [resetControl, setResetControl] = useState(0);

  const requestControl = () => {
    setResetControl(!resetControl);
  };

  useEffect(() => {
    if (!currentInfo) return;
    setPercentage((currentState - 1 + currentStateTimeProgress) / totalStates);
  }, [currentStateTimeProgress, currentInfo, currentState]);
  return (
    <>
      <div className="menu-backdrop">
        <div className="menu">
          <ProgressBar percentage={percentage} />
          <ContentButton
            currentInfo={currentInfo}
            currentState={currentState}
            setC
          />

          <div className="right">
            <MuteButton />
            <LangButton />
            <TranscriptButton
              currentInfo={currentInfo}
              requestControl={requestControl}
              resetControl={resetControl}
            />
            <HelpButton
              currentInfo={currentInfo}
              requestControl={requestControl}
              resetControl={resetControl}
            />
          </div>

          <Badge
            badges={currentInfo ? currentInfo.badge : []}
            currentStateTimeProgress={currentStateTimeProgress}
          />
        </div>
      </div>

      <div className="bottom right">
        <span className="hideOnSmallDevices">
          <AutoPlayButtton />
        </span>
      </div>
    </>
  );
};

export default Menu;
