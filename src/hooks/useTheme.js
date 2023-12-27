import { useState } from "react";

export const useTheme = () => {
  const [darkMode, setDarkMode] = useState(true);

  function toggleDarkMode() {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  }
  return { darkMode, toggleDarkMode };
};
