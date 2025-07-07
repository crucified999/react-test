import React from "react";
import { Layout } from "../ui/layout";

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
        <div key={index} className="skill-item">
          <input
            type="text"
            placeholder="Навык"
            value={skill}
            onChange={(e) => handleSkillChange(index, e.target.value)}
          />
          <button
            onClick={() => removeSkill(index)}
            className="remove-skill-btn"
          >
            ×
          </button>
        </div>
      ))}
      <button onClick={addSkill} className="add-skill-btn">
        + Добавить навык
      </button>
    </Layout>
  );
};

export default SkillsSection;
