import React from "react";

const AboutPreview = ({ data }) => (
  <p className="about-text">{data.text || "Информация о себе"}</p>
);

export default AboutPreview;
