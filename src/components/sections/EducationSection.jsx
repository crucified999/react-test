import React from "react";
import { Layout } from "../ui/layout";

const EducationSection = ({ data, onChange }) => (
  <Layout>
    <input
      type="text"
      placeholder="Учебное заведение"
      value={data.institution || ""}
      onChange={(e) => onChange({ ...data, institution: e.target.value })}
    />
    <input
      type="text"
      placeholder="Специальность"
      value={data.degree || ""}
      onChange={(e) => onChange({ ...data, degree: e.target.value })}
    />
    <input
      type="text"
      placeholder="Период"
      value={data.period || ""}
      onChange={(e) => onChange({ ...data, period: e.target.value })}
    />
  </Layout>
);

export default EducationSection;
