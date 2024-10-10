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

  const preloadList = [
    "/media/video/final.1.3.mp4",
    "/media/audio/background.mp3",
    ...audioList,
  ];

  const totalPreloadingItems = preloadList.length;

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
      const chunks = [];
      const xhr = new XMLHttpRequest();
      xhr.responseType = "blob";

      xhr.addEventListener("progress", function (e) {
        if (e.lengthComputable) {
          addProgress(url, { loaded: e.loaded, total: e.total });
        }
      });

      xhr.addEventListener("readystatechange", function () {
        if (this.status === 206) {
          chunks.push(this.response);
        } else if (this.readyState === 4) {
          if (this.status === 200) {
            chunks.push(this.response);
            const blob = new Blob(chunks, {
              type: xhr.getResponseHeader("Content-Type"),
            });
            addUrlMapping(url, URL.createObjectURL(blob));
          }
        } else {
          addProgress(url, { loaded: 0, total: 0 });
        }
      });

      xhr.addEventListener("error", function (e) {
        console.error(this.status);
        // Handle the error here, such as displaying an error message or taking appropriate action.
      });

      xhr.open("GET", url);
      xhr.send();
    });
  }, [setPreloadedDataList]);

  const getUrl = (id) => {
    console.log(window.screen.availWidth);
    return window.screen.availWidth < 600
      ? `/media/icons/building-${id}-small.png`
      : `/media/icons/building-${id}.svg`;
  };

  return (
    <div id="container-loader" className={start ? "hidden" : "show"}>
      <div id="loader" className={start ? "hidden" : "show"}>
        <img
          src={getUrl(1)}
          className="building top right"
          alt=""
          width="100vw"
          onLoad={(event) => {
            event.target.className += " loaded";
          }}
        />
        <img
          src={getUrl(2)}
          className="building bottom left"
          width="100vw"
          alt=""
          onLoad={(event) => {
            event.target.className += " loaded";
          }}
        />
        <div className="center-container middle">
          <div className="loaderContent">
            <div className="logoContainer">
              <img src="/media/icons/logo.svg" className="logo" />
              <span className="gr">Ζαγορίσια Αρχιτεκτονική</span>
              <span className="en">Zagorian Αrchitecture</span>
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
                <span className="en">Let's Begin</span>
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

            <img
              className="en"
              alt="espa-logo"
              id="espa-logo"
              src="/media/icons/espa_en.jpeg"
              onLoad={(event) => {
                event.target.style.bottom = "18px";
              }}
            />
            <img
              className="gr"
              alt="espa-logo"
              id="espa-logo"
              src="/media/icons/espa_gr.jpeg"
              onLoad={(event) => {
                event.target.style.bottom = "18px";
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Loader;
