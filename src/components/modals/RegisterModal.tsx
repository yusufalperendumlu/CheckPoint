import { useState } from "react";
import { Link } from "@tanstack/react-router";

import { FaGoogle, FaGithub, FaEye, FaEyeSlash } from "react-icons/fa";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const RegisterModal = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <div className="flex flex-col space-y-4 p-4 w-[20rem] rounded-lg shadow-lg">
      <div className="flex flex-col space-y-2">
        <h1 className="text-2xl font-semibold text-white">Sign up</h1>
        <p className="text-sm text-gray-500">
          Create an account to get started.
        </p>
        <p className="text-sm text-gray-500">
          If you are going to sign in with your corporate email, go directly to
          the sign in page.
        </p>
      </div>

      <Input type="text" placeholder="Username" />
      <Input type="email" placeholder="Email" />

      <div className="relative flex items-center">
        <Input
          type={showPassword ? "text" : "password"}
          placeholder="Password"
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

      <div className="relative flex items-center">
        <Input
          type={showConfirmPassword ? "text" : "password"}
          placeholder="Confirm Password"
        />
        <span
          onClick={toggleConfirmPasswordVisibility}
          className="absolute right-0 mr-2 cursor-pointer"
        >
          {showConfirmPassword ? (
            <FaEyeSlash className="h-4 w-4 text-white" />
          ) : (
            <FaEye className="h-4 w-4 text-white" />
          )}
        </span>
      </div>

      <Button
        title="Sign up"
        className="bg-white text-black cursor-pointer hover:bg-gray-200"
      />

      <p className="text-sm text-gray-500">
        Already have an account?{" "}
        <Link
          to={"/login"}
          className="text-white hover:underline cursor-pointer"
        >
          Sign in
        </Link>
      </p>

      <div className="flex flex-col items-center justify-center space-y-8 mt-4">
        <p className="flex items-center w-full text-sm text-gray-500">
          <span className="flex-1 h-px bg-gray-300"></span>
          <span className="px-4">Or sign up with</span>
          <span className="flex-1 h-px bg-gray-300"></span>
        </p>
        <div className="flex items-center space-x-4 z-30">
          <button className="flex items-center justify-center p-2 rounded-full bg-white text-black cursor-pointer hover:bg-gray-200">
            <FaGoogle />
          </button>
          <button className="flex items-center justify-center p-2 rounded-full bg-white text-black cursor-pointer hover:bg-gray-200">
            {" "}
            <FaGithub />
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegisterModal;
