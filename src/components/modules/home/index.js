import React from "react";
import Switch from "../../ui/switch/switch";
import { useTheme } from "../../../hooks/useTheme";

const Home = () => {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <div>
      <h1 className={`text-4xl font-bold ${darkMode ? "dark" : "light"}`}>
        Luxury Cart!
      </h1>
      <Switch onChange={toggleDarkMode} />
    </div>
  );
};

export default Home;
