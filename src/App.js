import "./App.css";
import VideoPlayer from "./components/VideoPlayer";
import Menu from "./components/Menu";
import Badge from "./components/Badge";
import { useRecoilState } from "recoil";
import { currentStateState } from "./state";
import data from "./data/steps";
import AudioPlayer from "./components/AudioPlayer";
import { useEffect, useState } from "react";
import Loader from "./components/Loader";
import OrientationComponent from "./components/Orientation";
import VHSetter from "./components/VHSetter";

function App() {
  const [currentState, setCurrentState] = useRecoilState(currentStateState);
  const [currentStateTimeProgress, setCurrentStateTimeProgress] = useState(0);

  const currentInfo = data.find(({ id }) => {
    return id === currentState;
  });

  const moveNext = (currentState) => {
    setCurrentState(currentState + 1);
  };

  return (
    <>
      {/* <OrientationComponent></OrientationComponent> */}
      <VHSetter />
      <VideoPlayer currentInfo={currentInfo}></VideoPlayer>
      {currentInfo && (
        <>
          <AudioPlayer
            audioId={currentState}
            currentState={currentState}
            currentInfo={currentInfo}
            setCurrentStateTimeProgress={setCurrentStateTimeProgress}
            moveNext={moveNext}
          ></AudioPlayer>
          <Menu
            currentState={currentState}
            currentInfo={currentInfo}
            currentStateTimeProgress={currentStateTimeProgress}
          ></Menu>
          <Badge
            badges={currentInfo.badge}
            currentStateTimeProgress={currentStateTimeProgress}
          />
        </>
      )}
    </>
  );
}

export default App;
