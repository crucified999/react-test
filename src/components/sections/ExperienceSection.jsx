import React from "react";
import { Layout } from "../ui/layout";

const ExperienceSection = ({ data, onChange }) => (
  <Layout>
    <input
      type="text"
      placeholder="Должность"
      value={data.position || ""}
      onChange={(e) => onChange({ ...data, position: e.target.value })}
    />
    <input
      type="text"
      placeholder="Компания"
      value={data.company || ""}
      onChange={(e) => onChange({ ...data, company: e.target.value })}
    />
    <input
      type="text"
      placeholder="Период"
      value={data.period || ""}
      onChange={(e) => onChange({ ...data, period: e.target.value })}
    />
    <textarea
      placeholder="Описание"
      value={data.description || ""}
      onChange={(e) => onChange({ ...data, description: e.target.value })}
    />
  </Layout>
);

export default ExperienceSection;
