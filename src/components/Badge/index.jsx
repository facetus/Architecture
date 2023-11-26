import React, { useEffect, useRef, useState } from "react";
import "./Badge.css"; // Import your CSS file
import { gsap } from "gsap";

function showAnimation(divElement) {
  if (divElement) {
    const tl = gsap.timeline({});

    tl.from(divElement, {
      y: "-100dvh", // Start off-screen above
      duration: 1, // Animation duration
      ease: "power2.inOut", // Easing function
    })
      .to(divElement, {
        scale: 1.05, // Slight pop in scale
        y: window.screen.width < 410 ? "100px" : "0",
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
    xmlns="http://www.w3.org/2000/svg"
    width="26"
    height="40"
    viewBox="0 0 26 40"
    fill="none"
    className="badge-icon"
  >
    <path
      d="M6.68329 23.1501L4.66663 38.3334L13 33.3334L21.3333 38.3334L19.3166 23.1334"
      fill="#FCDACB"
    />
    <path
      d="M6.68329 23.1501L4.66663 38.3334L13 33.3334L21.3333 38.3334L19.3166 23.1334"
      stroke="#B73F08"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M12.9999 25.0001C19.4432 25.0001 24.6666 19.7767 24.6666 13.3334C24.6666 6.89009 19.4432 1.66675 12.9999 1.66675C6.5566 1.66675 1.33325 6.89009 1.33325 13.3334C1.33325 19.7767 6.5566 25.0001 12.9999 25.0001Z"
      fill="#FCDACB"
      stroke="#B73F08"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
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
    <div className="top center-container badge-container">
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
