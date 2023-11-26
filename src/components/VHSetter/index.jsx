import React, { useEffect } from 'react';

const VHSetter = () => {
  const setVH = () => {
    // Calculate viewport height in vh units
    let vh = window.innerHeight * 0.01;
    // Set the value in the --vh custom property to the root of the document
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  };

  useEffect(() => {
    // Set initial value on component mount
    setVH();

    // Event listener for window resize
    const handleResize = () => {
      // Recalculate and set vh units on window resize
      setVH();
    };

    // Attach resize event listener
    window.addEventListener('resize', handleResize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Empty dependency array to run this effect only once on mount

  return null; // This component doesn't render anything
};

export default VHSetter;

