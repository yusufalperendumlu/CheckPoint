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

  const handleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <header
      className={clsx(
        "sticky top-0 w-full",
        darkMode ? "bg-[#171010]" : "bg-[#F5F5F5]"
      )}
    >
      <div
        className={clsx(
          "flex justify-between items-center py-4 px-8",
          darkMode ? "text-white" : "text-black"
        )}
      >
        <h1 className="text-2xl font-semibold">{title}</h1>

        <div className="flex space-x-4">
          <Toggle darkMode={darkMode ?? true} onDarkMode={handleDarkMode} />
          {localStorage.getItem("isLoggedIn") === "true" ? (
            <>
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
            </>
          ) : (
            <span className=" p-2 rounded-full cursor-pointer hover:scale-105 transition-all duration-300 ease-in-out hover:bg-gray-700">
              <FaUserAlt className="h-6 w-6" />
            </span>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
