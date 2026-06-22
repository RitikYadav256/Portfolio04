import React from 'react';
import styles from './Feedbacks.module.css';

function Feedback() {
  return (
    <div className={styles.container}>
      <main>
        <div className={styles.textCenter}>
          <h1 className={styles.heading}>Connect Me</h1>
          <p className={styles.lead}>
            We would love to hear from you. Please fill out the form below to get in touch.
          </p>
        </div>

        <form className={styles.form}>
          <div>
            <label htmlFor="firstName">First name</label>
            <input type="text" id="firstName" className={styles.input} required />
          </div>

          <div>
            <label htmlFor="lastName">Last name</label>
            <input type="text" id="lastName" className={styles.input} required />
          </div>

          <div>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" className={styles.input} required />
          </div>

          <div>
            <label htmlFor="phone">Phone Number</label>
            <input type="tel" id="phone" className={styles.input} required />
          </div>

          <div>
            <label htmlFor="message">Message</label>
            <textarea id="message" className={styles.textarea} rows="5" required />
          </div>

          <button type="submit" className={styles.button}>Send Message</button>
        </form>
      </main>

      <footer className={styles.footer}>
        <p>© 2025 Company Name. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Feedback;
