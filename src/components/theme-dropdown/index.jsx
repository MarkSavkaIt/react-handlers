import React from "react";
import "./style-dropdown.css";

export const ThemeDropdown = () => {
  const [theme, setTheme] = React.useState("light");

  return (
    <div className={`theme-block-dropdown ${theme}`}>
      <select className={theme} onChange={(e) => setTheme(e.target.value)}>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>
    </div>
  );
};
