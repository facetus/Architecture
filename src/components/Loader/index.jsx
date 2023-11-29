import React, { useEffect, useState } from "react";
import "./loader.css";
import MuteButton from "../Menu/Button/MuteButton";
import LangButton from "../Menu/Button/LangButton";
import data from "../../data/steps";

function Loader({ setCurrentState, setPreloadedDataList }) {
  const [progress, setProgress] = useState(0);
  const [progressPerItem, setProgressPerItem] = useState({});
  const [sizePerItem, setSizePerItem] = useState({});
  const [start, setStart] = useState(false);

  const audioList = data
    .map(({ audio }) => {
      return [audio.gr, audio.en];
    })
    .flat();

  const preloadList = ["/media/video/beta1.0.mp4", ...audioList];

  const totalPreloadingItems = preloadList.length;

  useEffect(() => {
    console.log(progress);
  }, [progress]);

  useEffect(() => {
    setProgress(
      (
        Object.values(progressPerItem)
          .map(({ loaded }) => loaded)
          .reduce(
            (accumulator, currentValue) => accumulator + currentValue,
            0
          ) /
        Object.values(progressPerItem)
          .map(({ total }) => total)
          .reduce((accumulator, currentValue) => accumulator + currentValue, 0)
      ).toFixed(2)
    );
  }, [progressPerItem]);

  useEffect(() => {
    if (!setPreloadedDataList) return;
    const addUrlMapping = (originalUrl, preloadedUrl) => {
      setPreloadedDataList((prevMappings) => {
        const newMapping = { ...prevMappings };
        newMapping[originalUrl] = preloadedUrl;
        return newMapping;
      });
    };

    const addProgress = (originalUrl, progress) => {
      setProgressPerItem((prevMappings) => {
        const newMapping = { ...prevMappings };
        newMapping[originalUrl] = progress;
        return newMapping;
      });
    };

    preloadList.forEach((url) => {
      const xhr = new XMLHttpRequest();
      xhr.withCredentials = true;
      xhr.responseType = "blob";

      xhr.addEventListener("progress", function (e) {
        if (e.lengthComputable) {
          addProgress(url, { loaded: e.loaded, total: e.total });
        }
      });

      xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
          addUrlMapping(url, URL.createObjectURL(xhr.response));
        } else {
          addProgress(url, { loaded: 0, total: 0 });
        }
      });

      xhr.open("GET", url);
      xhr.send();
    });
  }, [setPreloadedDataList]);

  return (
    <div id="container-loader" className={start ? "hidden" : "show"}>
      <div id="loader" className={start ? "hidden" : "show"}>
        <img src="/media/icons/building-1.svg" className="building top right" />
        <img
          src="/media/icons/building-2.svg"
          className="building bottom left"
        />
        <div className="center-container middle">
          <div className="loaderContent">
            <div className="logoContainer">
              <img src="/media/icons/logo.svg" className="logo" />
              <span className="gr">Ζαγορίσια Αρχιτεκτονική</span>
              <span className="en">Zagorochoria Architecture</span>
            </div>
            <div
              className={progress >= 1.0 ? "loaderBar active" : "loaderBar"}
              onClick={() => {
                if (progress >= 1.0) {
                  setStart(true);
                  setCurrentState(1);
                }
              }}
            >
              <div className="cta">
                <span className="gr">Ας ξεκινήσουμε</span>
                <span className="en">Lets Begin</span>
              </div>
              <div
                className="progressBar"
                style={{ width: progress * 100 + "%" }}
              ></div>
            </div>
            <div className="loaderControl">
              <MuteButton />
              <LangButton />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Loader;
