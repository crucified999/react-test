import React from "react";
import styles from "./skills.module.css";

const SkillsPreview = ({ data }) => (
  <ul className={styles.list}>
    {data.items.map((skill, i) => skill && <li key={i}>{skill}</li>)}
  </ul>
);

export default SkillsPreview;
