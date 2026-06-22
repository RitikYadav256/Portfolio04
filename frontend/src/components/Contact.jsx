import React from "react";
import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <section className={styles.contactContainer}>
      <div className={styles.headerRow}>
        <div>
          <p className={styles.subtitle}>Contact</p>
          <h2 className={styles.heading}>Let’s build something impactful together</h2>
        </div>
        <a href="mailto:hritikyadav256@gmail.com" className={styles.ctaLink}>
          Say hello
        </a>
      </div>

      <div className={styles.contactGrid}>
        <div className={styles.card}>
          <h3>Email</h3>
          <p>hritikyadav256@gmail.com</p>
        </div>
        <div className={styles.card}>
          <h3>Phone</h3>
          <p>+91 6392204964</p>
        </div>
        <div className={styles.card}>
          <h3>Location</h3>
          <p>Azamgarh, Uttar Pradesh, India</p>
        </div>
        <div className={styles.card}>
          <h3>LinkedIn</h3>
          <a href="https://linkedin.com/in/ritik-yadav21/" target="_blank" rel="noreferrer">
            linkedin.com/in/ritik-yadav21/
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
