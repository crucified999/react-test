import React from "react";
import { Layout } from "../../ui/layout/layout";

const CertificatesSection = ({ data, onChange }) => (
  <Layout>
    <input
      type="text"
      placeholder="Название сертификата"
      value={data.title || ""}
      onChange={(e) => onChange({ ...data, title: e.target.value })}
    />
    <input
      type="text"
      placeholder="Организация"
      value={data.issuer || ""}
      onChange={(e) => onChange({ ...data, issuer: e.target.value })}
    />
    <input
      type="text"
      placeholder="Дата получения"
      value={data.date || ""}
      onChange={(e) => onChange({ ...data, date: e.target.value })}
    />
  </Layout>
);

export default CertificatesSection;
