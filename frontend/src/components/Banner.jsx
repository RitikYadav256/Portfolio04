import { useNavigate } from "react-router-dom";
import style from "./Banner.module.css";
import img1 from "../assets/company/Prof Pic.jpg";

export function Banner() {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate("/feedback");
  };

  return (
    <section className={style.heroSection}>
      <div className={style.heroContent}>
        <div className={style.heroLabel}>Portfolio Highlights</div>
        <h2 className={style.heroTitle}>
          Data applications, web systems, and real-world analytics.
        </h2>
        <p className={style.heroSubtitle}>
          Crafting responsive full stack solutions with JavaScript, React, Node, MongoDB, and data-driven models.
        </p>
        <div className={style.badges}>
          <span>Python</span>
          <span>Machine Learning</span>
          <span>Tableau</span>
          <span>MongoDB</span>
        </div>
        <div className={style.ctaRow}>
          <button onClick={handleContactClick} className={style.primaryButton}>
            Let&apos;s Connect
          </button>
          <a
            href="https://github.com/RitikYadav256"
            target="_blank"
            rel="noreferrer"
            className={style.secondaryButton}
          >
            View GitHub
          </a>
        </div>
        <div className={style.highlightGrid}>
          <div className={style.highlightCard}>
            <h3>Data to decisions</h3>
            <p>End-to-end analytics workflows with insights that support smarter business moves.</p>
          </div>
          <div className={style.highlightCard}>
            <h3>Full stack delivery</h3>
            <p>Modern web apps built with React, Node, Express and MongoDB for fast, scalable experiences.</p>
          </div>
          <div className={style.highlightCard}>
            <h3>Visual clarity</h3>
            <p>Dashboards and reports designed to communicate metrics clearly and professionally.</p>
          </div>
        </div>
      </div>

      <div className={style.heroVisual}>
        <div className={style.profileCard}>
          <img src={img1} className={style.profileAvatar} alt="Profile" />
          <div>
            <p className={style.profileName}>Ritik Yadav</p>
            <p className={style.profileRole}>Data Scientist & Developer</p>
          </div>
        </div>
        <div className={style.contactLinks}>
          <a href="mailto:hritikyadav256@gmail.com">hritikyadav256@gmail.com</a>
          <a href="tel:+916392204964">+91 63922 04964</a>
        </div>
      </div>
    </section>
  );
}
