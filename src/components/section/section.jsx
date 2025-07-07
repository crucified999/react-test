import { useDrag, useDrop } from "react-dnd";
import ExperienceSection from "../sections/ExperienceSection.jsx";
import EducationSection from "../sections/EducationSection.jsx";
import SkillsSection from "../sections/SkillsSection.jsx";
import CertificatesSection from "../sections/CertificatesSection.jsx";
import AboutSection from "../sections/AboutSection.jsx";

const ItemTypes = {
  SECTION: "section",
};

export const Section = ({
  section,
  index,
  moveSection,
  updateSection,
  removeSection,
}) => {
  const renderSectionForm = (section, updateSection) => {
    switch (section.type) {
      case "experience":
        return (
          <ExperienceSection data={section.data} onChange={updateSection} />
        );
      case "education":
        return (
          <EducationSection data={section.data} onChange={updateSection} />
        );
      case "skills":
        return <SkillsSection data={section.data} onChange={updateSection} />;
      case "certificates":
        return (
          <CertificatesSection data={section.data} onChange={updateSection} />
        );
      case "about":
        return <AboutSection data={section.data} onChange={updateSection} />;
      default:
        return null;
    }
  };

  const [{ isDragging }, drag] = useDrag({
    type: ItemTypes.SECTION,
    item: { index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [, drop] = useDrop({
    accept: ItemTypes.SECTION,
    hover: (draggedItem) => {
      if (draggedItem.index !== index) {
        moveSection(draggedItem.index, index);
        draggedItem.index = index;
      }
    },
  });

  const opacity = isDragging ? 0.4 : 1;

  return (
    <div
      ref={(node) => drag(drop(node))}
      style={{ opacity }}
      className="section-editor"
    >
      <div className="section-header">
        <h3>
          {
            {
              experience: "Опыт работы",
              education: "Образование",
              skills: "Навыки",
              certificates: "Сертификаты",
              about: "О себе",
            }[section.type]
          }
        </h3>
        <button onClick={() => removeSection(section.id)}>×</button>
      </div>

      {renderSectionForm(section, updateSection)}
    </div>
  );
};
