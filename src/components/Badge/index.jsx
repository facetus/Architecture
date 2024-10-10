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
    <g id="Group">
      <g id="Vector">
        <path
          d="M6.68317 23.15L4.6665 38.3334L12.9998 33.3334L21.3332 38.3334L19.3165 23.1334"
          fill="#FAF4E9"
        />
        <path
          d="M6.68317 23.15L4.6665 38.3334L12.9998 33.3334L21.3332 38.3334L19.3165 23.1334"
          stroke="#736446"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <path
        id="Vector_2"
        d="M12.9999 25C19.4432 25 24.6666 19.7767 24.6666 13.3334C24.6666 6.89003 19.4432 1.66669 12.9999 1.66669C6.5566 1.66669 1.33325 6.89003 1.33325 13.3334C1.33325 19.7767 6.5566 25 12.9999 25Z"
        fill="#FAF4E9"
        stroke="#736446"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </g>
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
