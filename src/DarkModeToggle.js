import React from "react";
import useDarkMode from "use-dark-mode";
import "./DarkModeToggle.css";

const DARK_EMOJI = "🌙";
const LIGHT_EMOJI = "☀️";

const DarkModeToggle = () => {
  const { value, toggle } = useDarkMode();
  return (
    <div
      className="DarkModeToggle icon-button"
      onClick={toggle}
      title="Change appearance"
    >
      {value ? DARK_EMOJI : LIGHT_EMOJI}
    </div>
  );
};

export default DarkModeToggle;
