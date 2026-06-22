import React from "react";
import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.branding}>
          <h2>Ritik Yadav</h2>
          <p>Passionate Developer & Data Scientist</p>
        </div>

        <nav className={styles.navLinks}>
          <h3>Quick Links</h3>
          <ul>
            <li><Link className={styles.link} to="/">Home</Link></li>
            <li><Link className={styles.link} to="/projects">Projects</Link></li>
            <li><Link className={styles.link} to="/about">About</Link></li>
            <li><Link className={styles.link} to="/feedback">Contact</Link></li>
          </ul>
        </nav>

        <div className={styles.contactInfo}>
          <h3>Contact</h3>
          <p>Email: hritikyadav256@gmail.com</p>
          <p>Phone: +91 6392204964</p>
          <p>Location: Azamgarh, Uttar Pradesh</p>
        </div>
      </div>

      <div className={styles.copy}>
        &copy; {new Date().getFullYear()} Ritik Yadav. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
