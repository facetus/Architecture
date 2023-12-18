import React, { useEffect, useRef, useState } from "react";
import "./Badge.css"; // Import your CSS file
import { gsap } from "gsap";

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
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12.9999 25.0001C19.4432 25.0001 24.6666 19.7767 24.6666 13.3334C24.6666 6.89009 19.4432 1.66675 12.9999 1.66675C6.5566 1.66675 1.33325 6.89009 1.33325 13.3334C1.33325 19.7767 6.5566 25.0001 12.9999 25.0001Z"
      fill="#FCDACB"
      stroke="#B73F08"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const Badge = ({ badges, currentStateTimeProgress }) => {
  const [currentBadge, setCurrentBadge] = useState(-1);
  const [inTransition, setInTransition] = useState(false);
  const [hidden, setHidden] = useState(true);
  const [badgeText, setBadgeText] = useState("");
  const badgeRef = useRef(null);

  function showAnimation(divElement, onComplete = () => {}) {
    if (divElement) {
      setInTransition(true);
      const tl = gsap.timeline({
        onComplete: () => {
          setInTransition(false);
          setHidden(false);
          onComplete();
        }, // Resolve the Promise when the animation completes
      });

      tl.to(divElement, {
        y: "-1vh",
        scale: 1.02, // Slight pop in scale
        duration: 1,
        ease: "power2.inOut",
      })
        .to(divElement, {
          y: "-1vh",
          scale: 1.06, // Slight pop in scale
          duration: 0.2,
          ease: "power2.inOut",
        })
        .to(divElement, {
          scale: 1, // Return to original scale
          duration: 0.1,
        });
    }
  }

  function hideAnimation(divElement, onComplete = () => {}) {
    if (divElement) {
      setInTransition(true);
      const tl = gsap.timeline({
        onComplete: () => {
          setInTransition(false);
          setHidden(true);
          onComplete();
        }, // Resolve the Promise when the animation completes
      });

      tl.to(divElement, {
        y: "-100dvh", // Start off-screen above
        duration: 1, // Animation duration
        ease: "power2.inOut", // Easing function
      });
    }
  }

  useEffect(() => {
    if (!hidden)
      hideAnimation(badgeRef.current, () => {
        setCurrentBadge(0);
        if (badges[0]) {
          setBadgeText(badges[0]);
          showAnimation(badgeRef.current);
        }
      });
    else {
      setCurrentBadge(0);
      if (badges[0]) {
        setBadgeText(badges[0]);
        showAnimation(badgeRef.current);
      }
    }
  }, [badges]);

  useEffect(() => {
    if (
      !inTransition &&
      !hidden &&
      currentStateTimeProgress > (currentBadge + 1) / (badges.length + 1)
    ) {
      hideAnimation(badgeRef.current, () => {
        setBadgeText(badges[currentBadge + 1]);
        setCurrentBadge(currentBadge + 1);
        showAnimation(badgeRef.current);
      });
    }
  }, [currentStateTimeProgress]);

  return (
    <div className="badge-container" ref={badgeRef}>
      <div
        className={
          currentBadge >= 0 && badges[currentBadge]
            ? "badge show"
            : "badge hide"
        }
      >
        {icon}
        <span className="badge-text">{badgeText}</span>
      </div>
    </div>
  );
};

export default Badge;
