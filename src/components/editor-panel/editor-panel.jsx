import React from "react";
import { SectionList } from "../section-list/section-list";
import styles from "./editor-panel.module.css";

export const EditorPanel = ({
  sections,
  newSectionType,
  setNewSectionType,
  addSection,
  isSectionExists,
  moveSection,
  updateSection,
  removeSection,
  darkMode,
  setDarkMode,
  Section,
}) => (
  <div className={styles.panel}>
    <div className={styles.controls}>
      <select
        value={newSectionType}
        onChange={(e) => setNewSectionType(e.target.value)}
      >
        <option value="experience">Опыт работы</option>
        <option value="education">Образование</option>
        <option value="skills">Навыки</option>
        <option value="certificates">Сертификаты</option>
        <option value="about">О себе</option>
      </select>
      <button
        onClick={addSection}
        disabled={isSectionExists}
        className={`${isSectionExists ? styles.disabled : ""}`}
      >
        Добавить секцию
      </button>
      <button onClick={setDarkMode}>
        {darkMode ? "Светлая тема" : "Темная тема"}
      </button>
    </div>
    <SectionList
      sections={sections}
      moveSection={moveSection}
      updateSection={updateSection}
      removeSection={removeSection}
      Section={Section}
    />
  </div>
);
