import React from "react";
import clsx from "clsx";

interface IToggleProps {
  darkMode: boolean;
  onDarkMode: () => void;
}

const Toggle: React.FC<IToggleProps> = ({ darkMode, onDarkMode }) => {
  return (
    <>
      <div className="flex items-center gap-3">
        <button
          onClick={onDarkMode}
          className={clsx(
            `relative w-14 h-8 rounded-full p-1 transition duration-300`,
            {
              "bg-gray-700": darkMode,
              "bg-gray-300": !darkMode,
            }
          )}
          aria-label="Toggle dark mode"
          title="Toggle dark mode"
        >
          <div
            className={`w-6 h-6 rounded-full shadow-md transform transition duration-300 cursor-pointer ${
              darkMode ? "translate-x-6 bg-gray-900" : "translate-x-0 bg-white "
            }`}
          />
        </button>
      </div>
    </>
  );
};

export default Toggle;
