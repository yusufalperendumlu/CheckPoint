import React from "react";
import { Link } from "@tanstack/react-router";
import clsx from "clsx";

import { FaUserAlt } from "react-icons/fa";

import useLocalStorage from "@/hooks/useLocalStorage";

import { buttonVariants } from "@/components/ui/button";
import Toggle from "@/components/toggle/Toggle";

interface IHeaderProps {
  title: string;
  isDarkMode?: boolean;
}

const Header: React.FC<IHeaderProps> = ({ title, isDarkMode }) => {
  const [darkMode, setDarkMode] = useLocalStorage("darkMode", isDarkMode);

  console.log(darkMode);

  const handleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <header className="bg-gray-800 w-full">
      <div className="flex justify-between items-center py-4 px-8 text-white">
        <h1 className="text-2xl font-semibold">{title}</h1>

        {/* <span
          className="border-2  p-2 rounded-full cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out hover:bg-gray-700 select-none"
          onClick={handleDarkMode}
        >
          {darkMode === true ? "🌞" : "🌜"}
        </span> */}

        <div className="flex space-x-4">
          <Toggle darkMode={darkMode ?? true} onDarkMode={handleDarkMode} />
          <Link
            to="/login"
            className={clsx(
              buttonVariants({
                variant: `${darkMode ? "secondary" : "default"}`,
              }),
              "cursor-pointer"
            )}
          >
            Sign in
          </Link>
          <Link
            to="/register"
            className={clsx(
              buttonVariants({
                variant: `${!darkMode ? "secondary" : "default"}`,
              }),
              "cursor-pointer"
            )}
          >
            Sign up
          </Link>
        </div>
        {/* <span className="border-2 border-gray-300 p-2 rounded-full cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out hover:bg-gray-700">
          <FaUserAlt className="h-6 w-6" />
        </span> */}
      </div>
    </header>
  );
};

export default Header;
