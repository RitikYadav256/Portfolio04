import React, { useEffect, useState } from "react";
import stylesHero from "./Hero.module.css";
import ComputerCanvas from "./canvas/Computers";

const Hero = () => {
  const [scale, setScale] = useState(0.75); // Default scale

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 480) {
        setScale(0.5); // Smaller scale for mobile screens
      } else {
        setScale(0.75); // Default scale for larger screens
      }
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className={stylesHero.heroSection}>
      
      <ComputerCanvas scale={scale} />
    </section>
  );
};

export default Hero;
