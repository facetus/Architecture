import React, { useEffect, useState } from "react";
import "./Button.css"; // Import your CSS file
import Card from "../Card";

const Button = ({
  icon,
  title,
  children,
  className,
  sideContent,
  changeToActiveColors,
  activeIcon,
  onChangeHandler,
  cardClassName,
  cta,
  initActive,
  requestControl,
  resetControl,
}) => {
  const [isActive, setIsActive] = useState(initActive);
  const [classNamesList, setClassNameList] = useState([]);

  const handleClick = () => {
    if (requestControl) requestControl();
    setTimeout(() => {
      setIsActive(!isActive);
    }, 100);
  };

  useEffect(() => {
    setIsActive(initActive);
  }, [resetControl, initActive]);

  useEffect(() => {
    onChangeHandler && onChangeHandler(isActive);

    const classNameN = [className];
    classNameN.push("button");
    if (cta) classNameN.push("noRound");
    if (isActive) {
      if (changeToActiveColors) classNameN.push("active");
      else classNameN.push("selected");
    }
    setClassNameList(classNameN);
  }, [isActive]);

  return (
    <div className={"button-container " + className}>
      <div className={classNamesList.join(" ")} onClick={handleClick}>
        {cta && <div className="cta">{cta}</div>}
        <div className="icon">{isActive && activeIcon ? activeIcon : icon}</div>
      </div>

      {sideContent && <div className="sideContent">{sideContent}</div>}

      {isActive && title && (
        <div className="content">
          <Card
            onClose={() => {
              setIsActive(false);
            }}
            title={title}
            className={cardClassName}
          >
            {children}
          </Card>
        </div>
      )}
    </div>
  );
};

export default Button;
