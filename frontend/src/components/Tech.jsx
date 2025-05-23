import React from "react";
import { technologies } from "../constants";
import styles from "./Tech.module.css";

const Tech = () => {
  return (
    <section className={styles.main_container}>
      <p className={styles.intro}>Technologies</p>
      <h3 className={styles.heading}>Tech Stack</h3>
      <div className={styles.technology_container}>
        {technologies.map((tech, index) => (
          <div className={styles.technology_card} key={index}>
            <div className={styles.icon_wrapper}>
              <img src={tech.icon} className={styles.icon} alt={tech.name} />
            </div>
            <p className={styles.name}>{tech.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Tech;
