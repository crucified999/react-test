import ExperiencePreview from "../preview-panel-sections/experience/ExperiencePreview";
import EducationPreview from "../preview-panel-sections/education/EducationPreview";
import SkillsPreview from "../preview-panel-sections/skills/SkillsPreview";
import CertificatesPreview from "../preview-panel-sections/certificates/CertificatesPreview";
import AboutPreview from "../preview-panel-sections/about/AboutPreview";
import styles from "./preview-panel.module.css";

export const PreviewPanel = ({ sections }) => {
  return (
    <div className={styles.panel}>
      <div className={styles.preview}>
        <h1>Резюме</h1>
        {sections.map((section) => (
          <div key={section.id} className={styles.section}>
            <h2>
              {
                {
                  experience: "Опыт работы",
                  education: "Образование",
                  skills: "Навыки",
                  certificates: "Сертификаты",
                  about: "О себе",
                }[section.type]
              }
            </h2>
            {section.type === "experience" && (
              <ExperiencePreview data={section.data} />
            )}
            {section.type === "education" && (
              <EducationPreview data={section.data} />
            )}
            {section.type === "skills" && <SkillsPreview data={section.data} />}
            {section.type === "certificates" && (
              <CertificatesPreview data={section.data} />
            )}
            {section.type === "about" && <AboutPreview data={section.data} />}
          </div>
        ))}
      </div>
    </div>
  );
};
