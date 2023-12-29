import { useState } from "react";

export const useTheme = () => {
  const [darkMode, setDarkMode] = useState(false);

  function toggleDarkMode() {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  }
  return { darkMode, toggleDarkMode };
};
