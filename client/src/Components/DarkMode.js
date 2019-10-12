import React from "react";
import { useDarkMode } from "./../Hooks/useDarkMode";

const DarkMode = () => {
  const [darkMode, setDarkMode] = useDarkMode(false);
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };

  return (
    <button
      onClick={toggleMode}
      className={darkMode ? "toggle toggled" : "toggle"}
    >
      Dark Mode Toggle
    </button>
  );
};

export default DarkMode;
