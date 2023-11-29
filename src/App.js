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
  const [preloadedDataList, setPreloadedDataList] = useState({});

  const currentInfo = data.find(({ id }) => {
    return id === currentState;
  });

  const moveNext = (currentState) => {
    setCurrentState(currentState + 1);
  };

  useEffect(() => {
    console.log(preloadedDataList);
  }, [preloadedDataList]);

  return (
    <>
      {/* <OrientationComponent></OrientationComponent> */}
      <Loader
        preloadedDataList={preloadedDataList}
        setPreloadedDataList={setPreloadedDataList}
        setCurrentState={setCurrentState}
      ></Loader>
      <VHSetter />
      <VideoPlayer
        currentInfo={currentInfo}
        preloadedDataList={preloadedDataList}
      ></VideoPlayer>
      <AudioPlayer
        audioId={currentState}
        currentState={currentState}
        currentInfo={currentInfo}
        setCurrentStateTimeProgress={setCurrentStateTimeProgress}
        moveNext={moveNext}
        preloadedDataList={preloadedDataList}
      ></AudioPlayer>
      {currentInfo && (
        <>
          <Menu
            currentState={currentState}
            currentInfo={currentInfo}
            currentStateTimeProgress={currentStateTimeProgress}
          ></Menu>
        </>
      )}
    </>
  );
}

export default App;
