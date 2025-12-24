import React from "react";
import styles from "./Contact.module.css";

const Contact = () => {
  return (
    <div className={styles.contactContainer}>
      <h2 className={styles.heading}>Get in Touch</h2>
      <p className={styles.subheading}>
        Feel free to connect with me through the following platforms.
      </p>

      <div className={styles.contactOptions}>
        <a
          href="https://github.com/yourgithub"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.contactCard}
        >
          <p>GitHub</p>
        </a>

        <a
          href="https://linkedin.com/in/yourlinkedin"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.contactCard}
        >
          <p>LinkedIn</p>
        </a>

        <a href="mailto:yourmail@example.com" className={styles.contactCard}>
          <p>Email</p>
        </a>

        <a href="tel:+91XXXXXXXXXX" className={styles.contactCard}>
          <p>Phone</p>
        </a>
      </div>
    </div>
  );
};

export default Contact;
