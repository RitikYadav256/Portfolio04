import React from "react";
import { services, coding, certification,education} from "../constants";
import styles from "./About.module.css";
import stylesHero from "./Hero.module.css"; 
import Folder from "./Folder/Folder";

const About = () => {
  return (
    <section className={styles.main_container}>
      
      {/* Coding Profile Cards */}
      <h1 className={styles.Code}>Coding Profile</h1>
      <div className={styles.coding_prof}>
        {Object.values(coding).map((card, index) => (
          <div className={styles.Coding} key={index}>
            <div>
              <img className={styles.logo} src={card.logo} alt="Logo" />
            </div>
            <div className={styles.id}>
              <a href={card.link} target="_blank" rel="noopener noreferrer">
                {card._id}
              </a>
            </div>
            <div className={styles.info}>
              <div className={styles.txt}>
                <div className={styles.total}>Total: {card.total}</div>
                <div className={styles.easy}>Easy: {card.easy}</div>
                <div className={styles.medium}>Medium: {card.medium}</div>
                <div className={styles.hard}>Hard: {card.hard}</div>
              </div>
              <div>
                <img className={styles.pro_pic} src={card.prof} alt="Profile" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Certification Section */}
      <h1 className={styles.Code}>Certifications</h1>
      <div className={styles.certification_section}>
        {Object.values(certification).map((obj, index) => (
          <div className={styles.card} key={index}>
            <div className={styles.name}>Name: {obj.name}</div>
            <img className={styles.certificate_img} src={obj.certificate} alt={obj.name} />
          </div>
        ))}
      </div>

      {/* Education Section */}
      <h1 className={styles.Code}>Education</h1>
      <div className={styles.education_section}>
        {education.map((edu, index) => (
          <div className={styles.edu_card} key={index}>
            <img className={styles.edu_logo} src={edu.location} alt={`${edu.institution} logo`} />
            <div className={styles.edu_details}>
              <h3 className={styles.institution}>{edu.institution}</h3>
              <p className={styles.degree}>{edu.degree} - {edu.field}</p>
              <p className={styles.duration}>{edu.duration}</p>
              {edu.cgpa && <p className={styles.cgpa}>CGPA: {edu.cgpa}</p>}
              {edu.percentage && <p className={styles.percentage}>Percentage: {edu.percentage}</p>}
            </div>
          </div>
        ))}
      </div>

    </section>
  );
};

export default About;
