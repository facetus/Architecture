import React, { useState } from "react";
import "./loader.css";
import Button from "../Menu/Button";

function Loader({ progress, active, setCurrentState }) {
  const [start, setStart] = useState(false);
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
            <img src="/media/icons/loaderLogo.svg" className="logo" />
            <div className="loaderBar">
              <div
                className="progressBar"
                style={{ width: progress * 100 + "%" }}
              ></div>
            </div>
            <Button
              className={active ? "show" : "hidden"}
              cta="start"
              onChangeHandler={(value) => {
                if (value) {
                  console.log("setting");
                  setStart(value);
                  setCurrentState(1);
                }
              }}
            ></Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Loader;
