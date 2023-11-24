import React from "react";
import Button from ".."; // Assuming you have a Button component

const elIcon = (
  <svg
    width="23"
    height="14"
    viewBox="0 0 23 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0.842023 13.5V0.899999H9.22102V2.952H3.18202V6.003H8.34802V7.92H3.18202V11.43H9.28402V13.5H0.842023ZM10.6091 13.5L15.2531 0.899999H17.8181L22.5611 13.5H19.8971L16.5041 4.014L13.2191 13.5H10.6091Z"
      fill="black"
      className="fill"
    />
  </svg>
);

const enIcon = (
  <svg
    width="22"
    height="13"
    viewBox="0 0 22 13"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0 0H9.252V1.944H2.25V5.31H8.73V7.146H2.25V10.908H9.378V12.852H0V0Z"
      fill="#272727"
      className="fill"
    />
    <path
      d="M11.2479 0H13.6239L19.4919 9.468H19.5279V0H21.6699V12.852H19.2939L13.4439 3.402H13.3899V12.852H11.2479V0Z"
      fill="#272727"
      className="fill"
    />
  </svg>
);

const LangButton = () => {
  var langStyle = document.getElementById("langStyle");
  if (!langStyle) {
    const langStyle = document.createElement("style");
    langStyle.id = "langStyle";
    document.head.appendChild(langStyle);
    return;
  }

  const changeLang = (isEN) => {
    var langStyle = document.getElementById("langStyle");
    langStyle.textContent = isEN
      ? ".gr { display: none ! important}"
      : ".en { display: none ! important}";
  };

  return (
    <Button
      icon={elIcon}
      activeIcon={enIcon}
      changeToActiveColors={false}
      onChangeHandler={changeLang}
    ></Button>
  );
};

export default LangButton;
