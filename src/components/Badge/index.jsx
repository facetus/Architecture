import React, { useEffect, useRef, useState } from "react";
import "./Badge.css"; // Import your CSS file
import { gsap } from "gsap";

function showAnimation(divElement) {
  if (divElement) {
    const tl = gsap.timeline({});

    tl.from(divElement, {
      y: "-200%", // Start off-screen above
      duration: 1, // Animation duration
      ease: "power2.inOut", // Easing function
    })
      .to(divElement, {
        scale: 1.05, // Slight pop in scale
        y: "70%",
        duration: 0.2,
        ease: "power2.inOut",
      })
      .to(divElement, {
        scale: 1, // Return to original scale
        duration: 0.1,
      });
  }
}

const icon = (
  <svg
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M20 25.0001C26.4433 25.0001 31.6666 19.7767 31.6666 13.3334C31.6666 6.89009 26.4433 1.66675 20 1.66675C13.5567 1.66675 8.33331 6.89009 8.33331 13.3334C8.33331 19.7767 13.5567 25.0001 20 25.0001Z"
      stroke="#B73F08"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M13.6834 23.15L11.6667 38.3333L20 33.3333L28.3334 38.3333L26.3167 23.1333"
      stroke="#B73F08"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Badge = ({ badges, currentStateTimeProgress }) => {
  const showTime = 5000;
  const [currentBadge, setCurrentBadge] = useState(-1);

  const badgeRef = useRef(null);

  useEffect(() => {
    setCurrentBadge(0);
  }, [badges]);

  useEffect(() => {
    if (currentStateTimeProgress > (currentBadge + 1) / (badges.length + 1)) {
      setCurrentBadge(currentBadge + 1);
    }
  }, [currentStateTimeProgress, badges]);

  useEffect(() => {
    showAnimation(badgeRef.current);
  }, [currentBadge]);

  return (
    <div className="top center-container">
      <div
        ref={badgeRef}
        className={
          currentBadge >= 0 && badges[currentBadge]
            ? "badge show"
            : "badge hide"
        }
      >
        {icon}
        <span className="badge-text">{badges[currentBadge] || ""}</span>
      </div>
    </div>
  );
};

export default Badge;
