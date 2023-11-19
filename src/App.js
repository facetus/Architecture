import logo from "./logo.svg";
import "./App.css";
import VideoPlayer from "./components/VideoPlayer";
import Menu from "./components/Menu";
import Badge from "./components/Badge";
import { useRecoilState } from "recoil";
import { currentStateState } from "./state";
import data from "./data/steps";

function App() {
  const [currentState, setCurrentState] = useRecoilState(currentStateState);

  const currentInfo = data.find(({ id }) => {
    return id === currentState;
  });

  return (
    <>
      <VideoPlayer></VideoPlayer>
      <Menu currentState={currentState} currentInfo={currentInfo}></Menu>
      <div className="topCenter-container ">
        <Badge>{currentInfo.badge}</Badge>
      </div>
    </>
  );
}

export default App;
