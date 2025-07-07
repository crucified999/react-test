import React from "react";
import { Layout } from "../../ui/layout/layout";
import styles from "./skills-section.module.css";

const SkillsSection = ({ data, onChange }) => {
  const handleSkillChange = (index, value) => {
    const newSkills = [...data.items];

    newSkills[index] = value;
    onChange({ ...data, items: newSkills });
  };

  const addSkill = () => {
    onChange({ ...data, items: [...data.items, ""] });
  };

  const removeSkill = (index) => {
    const newSkills = [...data.items];

    newSkills.splice(index, 1);
    onChange({ ...data, items: newSkills });
  };

  return (
    <Layout>
      {data.items.map((skill, index) => (
        <div key={index} className={styles.item}>
          <input
            type="text"
            placeholder="Навык"
            value={skill}
            onChange={(e) => handleSkillChange(index, e.target.value)}
          />
          <button onClick={() => removeSkill(index)} className={styles.button}>
            ×
          </button>
        </div>
      ))}
      <button onClick={addSkill} className={styles.button}>
        + Добавить навык
      </button>
    </Layout>
  );
};

export default SkillsSection;
