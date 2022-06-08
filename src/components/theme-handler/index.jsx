import React from "react";
import "./style-handler.css";

export const ThemeHandler = () => {
  const [theme, setTheme] = React.useState("light");

  const handleThemeChange = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }

  return (
    <div className={`theme-block-handler ${theme}`}>
      <button className={theme} onClick={handleThemeChange} >Handle</button>
    </div>
  );
};
