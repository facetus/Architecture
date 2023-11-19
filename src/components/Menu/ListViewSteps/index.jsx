import React from "react";
import "./ListViewSteps.css"; // Import your CSS file
import data from "../../../data/steps"; // Import your JSON file

const bullet = (
  <div className="bullet">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="11"
      height="11"
      viewBox="0 0 11 11"
      fill="none"
    >
      <circle cx="5.5" cy="5.5" r="5.5" fill="#326D43" />
    </svg>
  </div>
);

const activeBullet = (
  <div className="bullet">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="11"
      height="11"
      viewBox="0 0 11 11"
      fill="none"
    >
      <circle cx="5.5" cy="5.5" r="5.5" fill="#326D43" />
      <circle cx="5.5" cy="5.5" r="2.5" fill="white" />
    </svg>
  </div>
);

const emptyBullet = <div className="bullet"></div>;

const ListViewSteps = ({ currentState }) => {
  const renderList = () => {
    let prevGroup = "";

    return data.map((item, index) => {
      const { title, group, id } = item;
      if (prevGroup !== group.props.children[0].props.children) {
        prevGroup = group.props.children[0].props.children;
        return (
          <div key={index}>
            <div className="group-style">
              {emptyBullet}
              {<div>{group}</div>}
            </div>

            <div className="title-style">
              {id === currentState ? activeBullet : bullet}
              <div className={id === currentState ? "active" : ""}>{title}</div>
            </div>
          </div>
        );
      }

      return (
        <div key={index} className="title-style">
          {id === currentState ? activeBullet : bullet}
          <div className={id === currentState ? "active" : ""}>{title}</div>
        </div>
      );
    });
  };

  return (
    <div className="list-view">
      {renderList()}
      <div className="borderLeft"></div>
    </div>
  );
};

export default ListViewSteps;
