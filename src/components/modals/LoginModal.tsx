import { useState } from "react";
import { Link } from "@tanstack/react-router";
import clsx from "clsx";

import { FaGoogle, FaGithub, FaEye, FaEyeSlash } from "react-icons/fa";

import useLocalStorage from "@/hooks/useLocalStorage";

import { buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const LoginModal = () => {
  const [isLoggedIn, setIsLoggedIn] = useLocalStorage("isLoggedIn", false);
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSignIn = () => {
    setIsLoggedIn(true);
  };

  return (
    <div className="w-[20rem] h-[28rem] flex flex-col space-y-4 p-4 mt-2 rounded-lg shadow-lg">
      <h1 className="text-2xl font-semibold text-white">Sign in</h1>
      <p className="text-sm text-gray-500">
        Please sign in to continue to your account.
      </p>

      <Input
        type="text"
        placeholder="Username"
        className="focus:bg-gray-900 transition-all duration-200"
      />
      <div className="relative flex items-center justify-between">
        <Input
          type={showPassword ? "text" : "password"}
          placeholder="Password"
          className="focus:bg-gray-900 transition-all duration-200"
        />
        <span
          onClick={togglePasswordVisibility}
          className="absolute right-0 mr-2 cursor-pointer"
        >
          {showPassword ? (
            <FaEyeSlash className="h-4 w-4 text-white" />
          ) : (
            <FaEye className="h-4 w-4 text-white" />
          )}
        </span>
      </div>

      <Link
        to="/password-reset"
        className="flex justify-end text-sm text-gray-200 hover:underline cursor-pointer"
      >
        Forgot your password?
      </Link>

      <Link
        to="/home"
        onClick={handleSignIn}
        className={clsx(
          buttonVariants({ variant: "link", size: "default" }),
          "bg-white text-black cursor-pointer hover:bg-gray-200"
        )}
      >
        Sign in
      </Link>

      <p className="text-sm text-gray-500">
        Don't have an account?{" "}
        <Link
          to={"/register"}
          className="text-white hover:underline cursor-pointer"
        >
          Sign up
        </Link>
      </p>

      <div className="flex flex-col items-center justify-center space-y-8 mt-4">
        <p className="flex items-center w-full text-sm text-gray-500">
          <span className="flex-1 h-px bg-gray-300"></span>
          <span className="px-4">Or sign in with</span>
          <span className="flex-1 h-px bg-gray-300"></span>
        </p>
        <div className="flex items-center space-x-4 z-30">
          <button className="flex items-center justify-center p-2 rounded-full bg-white text-black cursor-pointer hover:bg-gray-200">
            <FaGoogle />
          </button>
          <button className="flex items-center justify-center p-2 rounded-full bg-white text-black cursor-pointer hover:bg-gray-200">
            <FaGithub />
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
