import React, { useEffect, useState } from "react";
import "./Orientation.css"

const OrientationComponent = () => {
  const screen = window.screen;
  const [isLandscape, setLandscape] = useState(true);
  const handleOrientationChange = () => {
    const { type } = screen.orientation;
    if (type.includes("portrait")) {
      setLandscape(false);
    } else {
      setLandscape(true);
    }
  };

  useEffect(() => {
    handleOrientationChange();

    window.addEventListener("orientationchange", handleOrientationChange);

    return () => {
      window.removeEventListener("orientationchange", handleOrientationChange);
    };
  }, []);

  if (!isLandscape)
    return (
      <div id="orientation-overlay">
        <img src="/media/icons/rotate-t.gif" width="400"/>
      </div>
    );

  return <></>;
};

export default OrientationComponent;
