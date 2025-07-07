import React from "react";

export const SectionList = ({
  sections,
  moveSection,
  updateSection,
  removeSection,
  Section,
}) => (
  <div className="section-list">
    {sections.map((section, index) => (
      <Section
        key={section.id}
        index={index}
        section={section}
        moveSection={moveSection}
        updateSection={(newData) => updateSection(section.id, newData)}
        removeSection={removeSection}
      />
    ))}
  </div>
);
