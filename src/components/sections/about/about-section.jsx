import React from "react";
import { Layout } from "../../ui/layout/layout";

const AboutSection = ({ data, onChange }) => (
  <Layout>
    <textarea
      placeholder="О себе"
      value={data.text || ""}
      onChange={(e) => onChange({ ...data, text: e.target.value })}
    />
  </Layout>
);

export default AboutSection;
