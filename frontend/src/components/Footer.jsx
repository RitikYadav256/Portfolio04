import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>

        {/* About / Branding */}
        <div className={styles.branding}>
          <h2>Ritik Yadav</h2>
          <p>Passionate Developer|Data Scientist</p>
        </div>

        {/* Quick Links */}
        <nav className={styles.navLinks}>
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#about">About</a></li>
            <li><a href="#coding">Coding Profile</a></li>
            <li><a href="#certification">Certification</a></li>
            <li><a href="#education">Education</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>

        {/* Contact Info */}
        <div className={styles.contactInfo}>
          <h3>Contact Me</h3>
          <p>Email: hritikyadav256@gmail.com</p>
          <p>Phone: +91 6392204964</p>
          <p>Location: Azamgarh, Uttar Pradesh, India</p>
        </div>

       

      </div>

      <div className={styles.copy}>
        &copy; {new Date().getFullYear()} Ritik Yadav. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
