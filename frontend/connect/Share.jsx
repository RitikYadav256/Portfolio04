import React from 'react';
import { FaLinkedin, FaEnvelope, FaWhatsapp } from 'react-icons/fa';
import styles from './Share.module.css';

const Share = ({ url = window.location.href, title = 'Link-'}) => {
  const linkedinShare = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
  const whatsappShare = `https://api.whatsapp.com/send?text=${encodeURIComponent(title)}%20${encodeURIComponent(url)}`;
  const gmailShare = `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(url)}`;

  return (
    <div className={styles.shareContainer}>
      <div className={styles.Exit}><button onClick={()=>{window.location.href="/Post"}}>X</button></div>
      <h2 className={styles.heading}>🔗 Share this page</h2>
      <div className={styles.buttonGroup}>
        <a href={linkedinShare} target="_blank" rel="noopener noreferrer" className={styles.shareButton}>
          <FaLinkedin className={styles.icon} /> LinkedIn
        </a>
        <a href={gmailShare} className={styles.shareButton}>
          <FaEnvelope className={styles.icon} /> Gmail
        </a>
        <a href={whatsappShare} target="_blank" rel="noopener noreferrer" className={styles.shareButton}>
          <FaWhatsapp className={styles.icon} /> WhatsApp
        </a>
      </div>
    </div>
  );
};

export default Share;
