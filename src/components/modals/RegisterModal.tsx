import { useState } from "react";
import { Link } from "@tanstack/react-router";
import clsx from "clsx";

import { FaGoogle, FaGithub, FaEye, FaEyeSlash } from "react-icons/fa";

import { RootState } from "@/store";
import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import InputOTPComponent from "@/components/modals/InputOTP";
import { useDispatch, useSelector } from "react-redux";
import { postEnterpriseRegisterRequest } from "@/store/enterpriseRegister/enterpriseRegisterAction";

const RegisterModal = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state: RootState) => state.loading);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [enterprise, setEnterprise] = useState(false);
  const [validEmail, setValidEmail] = useState(false);

  console.log(loading);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <div className="relative w-[20rem] h-[34rem] flex items-center justify-center overflow-hidden p-4 rounded-lg shadow-lg">
      {/* Personal Register */}
      <div
        className={clsx(
          "absolute inset-0 flex flex-col space-y-4 px-2 transition-transform duration-500 ease-in-out",
          !enterprise ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex flex-col space-y-2">
          <h1 className="text-2xl font-semibold text-white">Sign up</h1>
          <p className="text-sm text-gray-500">
            Create an account to get started.
          </p>
          <p className="text-sm text-gray-500">
            If you are going to sign in with your corporate email,{" "}
            <span
              onClick={() => setEnterprise(true)}
              className="text-white hover:underline cursor-pointer"
            >
              go to enterprise sign up.
            </span>
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
              <FaGithub />
            </button>
          </div>
        </div>
      </div>

      {/* Enterprise Register */}
      <div
        className={clsx(
          "absolute inset-0 py-2 flex flex-col space-y-4 px-2 transition-transform duration-500 ease-in-out",
          enterprise ? "translate-x-0" : "translate-x-full"
        )}
      >
        <h1 className="text-2xl font-semibold text-white">
          Enterprise Sign up
        </h1>
        <p className="text-sm text-gray-500">
          Please enter your email to receive a verification code.
        </p>

        {!validEmail ? (
          <>
            <Input
              type="email"
              placeholder="Corporate Email"
              className="focus:bg-gray-900 transition-all duration-200"
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className="relative flex items-center">
              <Input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
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
            <div className="relative flex items-center">
              <Input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm Password"
                onChange={(e) => setPassword(e.target.value)}
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
              variant={"link"}
              title={loading ? "Sending..." : "Send Verification Code"}
              onClick={() =>
                dispatch(
                  postEnterpriseRegisterRequest({
                    mail: email,
                    password: password,
                  })
                )
              }
              className={clsx(
                "bg-white text-black cursor-pointer hover:bg-gray-200",
                !email || !password ? "opacity-50 cursor-not-allowed" : ""
              )}
              disabled={!email || !password}
            />

            <Button
              variant="link"
              title="Back"
              onClick={() => setEnterprise(false)}
              className="text-white text-sm underline cursor-pointer"
            />
          </>
        ) : (
          <InputOTPComponent setValidEmail={setValidEmail} />
        )}
      </div>
    </div>
  );
};

export default RegisterModal;
