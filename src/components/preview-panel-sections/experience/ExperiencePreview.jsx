import React from "react";
import styles from "./experience.module.css";

const ExperiencePreview = ({ data }) => (
  <div className={styles.item}>
    <h3>{data.position || "Должность"}</h3>
    <div className="company">{data.company || "Компания"}</div>
    <div className="period">{data.period || "Период работы"}</div>
    <p>{data.description || "Описание обязанностей и достижений"}</p>
  </div>
);

export default ExperiencePreview;
