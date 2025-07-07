import React, { useState, useEffect } from "react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { Section } from "../section";
import { PreviewPanel } from "../preview-panel/preview-panel";
import { EditorPanel } from "../editor-panel/EditorPanel";

export const ResumeEditor = () => {
  const [sections, setSections] = useState([]);
  const [darkMode, setDarkMode] = useState(false);
  const [newSectionType, setNewSectionType] = useState("experience");

  useEffect(() => {
    const savedSections = localStorage.getItem("resumeSections");
    if (savedSections) {
      setSections(JSON.parse(savedSections));
    }

    const savedTheme = localStorage.getItem("resumeTheme");

    if (savedTheme) {
      setDarkMode(savedTheme === "dark");
    }
  }, []);

  const handleThemeChange = () => {
    setDarkMode(!darkMode);
    localStorage.setItem("resumeTheme", !darkMode ? "dark" : "light");
  };

  const addSection = () => {
    const newSection = {
      id: Date.now().toString(),
      type: newSectionType,
      data: getDefaultData(newSectionType),
    };
    setSections([...sections, newSection]);
    localStorage.setItem("resumeSections", JSON.stringify([...sections, newSection]));
  };

  const getDefaultData = (type) => {
    switch (type) {
      case "experience":
        return { position: "", company: "", period: "", description: "" };
      case "education":
        return { institution: "", degree: "", period: "" };
      case "skills":
        return { items: [""] };
      case "certificates":
        return { title: "", issuer: "", date: "" };
      case "about":
        return { text: "" };
      default:
        return {};
    }
  };

  const updateSection = (id, newData) => {
    setSections(
      sections.map((section) =>
        section.id === id ? { ...section, data: newData } : section
      )
    );
  };

  const removeSection = (id) => {
    setSections(sections.filter((section) => section.id !== id));
    localStorage.setItem("resumeSections", JSON.stringify(sections.filter((section) => section.id !== id)));
  };

  const moveSection = (fromIndex, toIndex) => {
    const newSections = [...sections];
    const [movedSection] = newSections.splice(fromIndex, 1);

    newSections.splice(toIndex, 0, movedSection);
    setSections(newSections);
  };

  const isSectionExists = sections.some(
    (section) => section.type === newSectionType
  );

  return (
    <DndProvider backend={HTML5Backend}>
      <div className={`resume-editor ${darkMode ? "dark" : "light"}`}>
        <EditorPanel
          sections={sections}
          newSectionType={newSectionType}
          setNewSectionType={setNewSectionType}
          addSection={addSection}
          isSectionExists={isSectionExists}
          moveSection={moveSection}
          updateSection={updateSection}
          removeSection={removeSection}
          darkMode={darkMode}
          setDarkMode={handleThemeChange}
          Section={Section}
        />
        <PreviewPanel sections={sections} />
      </div>
    </DndProvider>
  );
};

export default ResumeEditor;
