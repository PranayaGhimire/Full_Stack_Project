import React, { useEffect, useState } from "react";
import "../App.css";
const DarkModeToggle = () => {
  // State to track the current mode
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedMode = localStorage.getItem("darkMode");
    return savedMode ? JSON.parse(savedMode) : false;
  });
  // Effect to apply the mode to the body element
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
    localStorage.setItem("darkMode", JSON.stringify(isDarkMode));
  }, [isDarkMode]);
  //Toggle between dark and light mode
  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
  };
  return (
    <button onClick={toggleMode} className="fixed top-20">
      {isDarkMode ? (
        <span role="img" aria-label="sun">
          🌞
        </span>
      ) : (
        <span role="img" aria-label="moon">
          🌜
        </span>
      )}
      {isDarkMode ? " Light Mode" : " Dark Mode"}
    </button>
  );
};

export default DarkModeToggle;
