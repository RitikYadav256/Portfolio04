import React from "react";
import styles from "./Cv.module.css";
import ResumePDF from "../assets/PDF.pdf";

const Cv = ({ setCvShower }) => {
  return (
    <div className={styles.resumeContainer}>
      <h2 className={styles.heading}>My Resume</h2>
      <p className={styles.subheading}>
        View or download my resume by clicking the button below.
      </p>

      <div className={styles.buttonContainer}>
        <a
          href={ResumePDF}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.downloadButton}
        >
          View Resume
        </a>
        <button
          type="button"
          onClick={() => setCvShower(false)}
          className={styles.button1}
        >
          Exit
        </button>
      </div>

      <iframe
        src={ResumePDF}
        className={styles.pdfViewer}
        title="Resume PDF"
      ></iframe>
    </div>
  );
};

export default Cv;
