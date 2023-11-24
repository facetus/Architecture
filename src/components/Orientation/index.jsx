import React, { useEffect, useState } from "react";

const OrientationComponent = () => {
  const screen = window.screen;
  const [message, setMessage] = useState("");
  const handleOrientationChange = () => {
    const { type } = screen.orientation;

    setMessage(type);
  };

  useEffect(() => {
    handleOrientationChange();

    window.addEventListener("orientationchange", handleOrientationChange);

    return () => {
      window.removeEventListener("orientationchange", handleOrientationChange);
    };
  }, []);

  return (
    <div>
      <p>{message}</p>
      {/* Your content */}
    </div>
  );
};

export default OrientationComponent;
