import React from "react";
import { experiences } from "../constants";
import styles from "./Experience.module.css";
import { AiFillLike } from "react-icons/ai";
import { FaShareSquare } from "react-icons/fa";

const Experience = () => {
  return (
    <section className={styles.main_container}>
    
      <div className={styles.introCard}>
  <div className={styles.cardHeader}>
    <p className={styles.intro}>Experience</p>
  </div>
  <div className={styles.cardBody}>
    <p className={styles.about}>
      As a Full Stack Developer, I specialize in crafting end-to-end web applications using a diverse tech stack, including React.js, Node.js, Express.js, and MongoDB. With a solid foundation in HTML, CSS, and JavaScript, I focus on building seamless, user-friendly interfaces and robust backend services. Currently pursuing my degree at Lovely Professional University, I am dedicated to creating efficient, scalable solutions while continuously improving my skills in full-stack development.
    </p>
  </div>
</div>

      <h3 className={styles.heading}>Projects</h3>
      <div className={styles.experience_container}>
        
        {experiences.map((experience, index) => (
          <div className={styles.experience_card} key={index}>
            
            <div className={styles.company_info}>
              <div
                className={styles.icon_wrapper}
                style={{ background: experience.iconBg }}
              >
                <img 
                src={experience.proj}
                className={styles.proj_pic}
                ></img>
                
              </div>
              <div>
                <h4 className={styles.title}>{experience.title}</h4>
                <p className={styles.company}>{experience.company_name}</p>
                <p className={styles.date}>{experience.date}</p>
              </div>
            </div>
            
            <ul className={styles.points}>
            <h3>Description:</h3>
              {experience.points.map((point, idx) => (
                <li key={idx} className={styles.point}>
                  {point}
                </li>
              ))}
              <div className={styles.connect}>
                <div className={styles.like}><AiFillLike /></div>
                <div className={styles.share}><FaShareSquare /></div>
              </div>
              <div className={styles.comment}><input placeholder="Comment"></input></div>
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
