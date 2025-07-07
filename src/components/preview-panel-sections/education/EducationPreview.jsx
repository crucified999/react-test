import React from "react";
import styles from "./education.module.css";

const EducationPreview = ({ data }) => (
  <div className={styles.item}>
    <h3>{data.institution || "Учебное заведение"}</h3>
    <div className="degree">{data.degree || "Специальность"}</div>
    <div className="period">{data.period || "Период обучения"}</div>
  </div>
);

export default EducationPreview;
