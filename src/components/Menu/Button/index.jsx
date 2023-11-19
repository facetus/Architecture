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
}) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  useEffect(() => {
    onChangeHandler && onChangeHandler(isActive);
  }, [isActive]);

  return (
    <div className={"button-container " + className}>
      <div
        className={
          isActive && changeToActiveColors ? "button active " : "button "
        }
        onClick={handleClick}
      >
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
          >
            {children}
          </Card>
        </div>
      )}
    </div>
  );
};

export default Button;
