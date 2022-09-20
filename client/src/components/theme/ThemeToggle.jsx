import React, { useContext } from "react";
import { HiSun, HiMoon } from "react-icons/hi";
import { ThemeContext } from "../../context/ThemeContext";
import "./theme.css";

const ThemeToggle = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div className="themeWrapper">
      {theme === "dark" ? (
        <div
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="toggleTheme"
        >
          <HiSun className="themeIcon" /> Light Mode
        </div>
      ) : (
        <div
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="toggleTheme"
        >
          <HiMoon className="themeIcon" /> Dark Mode
        </div>
      )}
    </div>
  );
};

export default ThemeToggle;
