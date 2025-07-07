import React from "react";
import styles from "./certificates.module.css";

const CertificatesPreview = ({ data }) => (
  <div className={styles.item}>
    <h3>{data.title || "Название сертификата"}</h3>
    <div className="issuer">{data.issuer || "Организация"}</div>
    <div className="date">{data.date || "Дата получения"}</div>
  </div>
);

export default CertificatesPreview;
