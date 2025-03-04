import React from "react";

const Button = ({ onClick, darkMode }) => {
  return (
    <div>
      <button
        className={`p-2 rounded-lg ${
          darkMode ? "bg-gray-800 text-white" : "bg-gray-200 text-black"
        } transition`}
        onClick={onClick}
      >
        {darkMode ? "🌙 Dark Mode" : "☀️ Light Mode"}
      </button>
    </div>
  );
};

export default Button;
