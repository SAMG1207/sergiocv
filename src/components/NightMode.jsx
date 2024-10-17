import React from "react";

export const NightMode = ({ toggleDarkMode, darkmode }) => {
  return (
    <div className="d-flex justify-items-centee">
      <button
        className={` w-75 text start btn btn-${darkmode ? "light" : "dark"} `}
        onClick={toggleDarkMode}
      >
        {darkmode ? "☀️ Light Mode" : "🌙 Night Mode"}
      </button>
    </div>
  );
};
