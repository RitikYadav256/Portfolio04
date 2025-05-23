import React, { useState } from "react";
import styles from "./AdminPage.module.css";
import { technologies } from "./constants";

const AdminPage = () => {
  const [projects, setProjects] = useState();
  const [tech, setTechnologies] = useState(technologies);
  const [projectName, setProjectName] = useState("");
  const [projectDesc, setProjectDesc] = useState("");
  const [techName, setTechName] = useState("");
  const [techCategory, setTechCategory] = useState("");

  const addProject = () => {
    if (projectName && projectDesc) {
      setProjects([
        ...projects,
        { name: projectName, description: projectDesc },
      ]);
      setProjectName("");
      setProjectDesc("");
    }
  };

  const addTechnology = () => {
    if (techName && techCategory) {
      setTechnologies([...tech, { name: techName, category: techCategory }]);
      setTechName("");
      setTechCategory("");
    }
  };

  return (
    <div className={styles.adminContainer}>
      <h2>Admin Panel</h2>

      <div className={styles.formSection}>
        <h3>Add Project</h3>
        <input
          type="text"
          placeholder="Project Name"
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
        />
        <textarea
          placeholder="Project Description"
          value={projectDesc}
          onChange={(e) => setProjectDesc(e.target.value)}
        ></textarea>
        <button onClick={addProject}>Add Project</button>
      </div>

      <div className={styles.formSection}>
        <h3>Add Technology</h3>
        <input
          type="text"
          placeholder="Technology Name"
          value={techName}
          onChange={(e) => setTechName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Category"
          value={techCategory}
          onChange={(e) => setTechCategory(e.target.value)}
        />
        <button onClick={addTechnology}>Add Technology</button>
      </div>

      <div className={styles.listSection}>
        <h3>Projects</h3>
        <ul>
          {projects.map((proj, index) => (
            <li key={index}>
              <strong>{proj.name}</strong>: {proj.description}
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.listSection}>
        <h3>Technologies</h3>
        <ul>
          {technologies.map((tech, index) => (
            <li key={index}>
              <strong>{tech.name}</strong> ({tech.category})
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AdminPage;
