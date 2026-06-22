import React from "react";
import { useNavigate } from "react-router-dom";
import stylesHero from "./Hero.module.css";
import profilePic from "../assets/company/Prof Pic.jpg";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className={stylesHero.heroSection}>
      <div className={stylesHero.heroFrame}>
        <div className={stylesHero.heroContent}>
          <span className={stylesHero.heroBadge}>Welcome on board</span>
          <h1 className={stylesHero.heroName}>Ritik Yadav</h1>
          <p className={stylesHero.heroDescription}>
            Full Stack Developer & Data Scientist building modern web experiences, data-driven dashboards, and polished applications for growth.
          </p>

          <div className={stylesHero.heroActions}>
            <button className={stylesHero.primaryButton} onClick={() => navigate("/feedback")}>Contact Me</button>
            <a
              className={stylesHero.secondaryButton}
              href="https://github.com/RitikYadav256"
              target="_blank"
              rel="noreferrer"
            >
              View GitHub
            </a>
          </div>

          <div className={stylesHero.heroStats}>
            <div className={stylesHero.heroStatItem}>
              <strong>3+</strong>
              <span>Full stack systems</span>
            </div>
            <div className={stylesHero.heroStatItem}>
              <strong>5+</strong>
              <span>Analytics dashboards</span>
            </div>
            <div className={stylesHero.heroStatItem}>
              <strong>100+</strong>
              <span>Problem-solving hours</span>
            </div>
          </div>
        </div>

        <div className={stylesHero.heroPanel}>
          <div className={stylesHero.heroCard}>
            <img
              className={stylesHero.cardImage}
              src={profilePic}
              alt="Profile"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
