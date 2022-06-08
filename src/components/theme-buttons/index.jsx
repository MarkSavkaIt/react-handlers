import React from "react";
import "./style-buttons.css";

export const ThemeButtons = () => {
  const [theme, setTheme] = React.useState("light");

  const handleThemeChange = (theme) => {
    setTheme(theme);
  }

  return (
    <div className={`theme-block-buttons ${theme}`}>
      <button className={theme} onClick={() => handleThemeChange('light')} >Light</button>
      <button className={theme} onClick={() => handleThemeChange('dark' )} >Dark</button>
    </div>
  );
};
