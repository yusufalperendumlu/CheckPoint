import { useState } from "react";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import { Link } from "@tanstack/react-router";

import { Input } from "@/components/ui/input";
import { Button, buttonVariants } from "@/components/ui/button";

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [nextStep, setNextStep] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleBackArrowClick = () => {
    setSubmitted(false);
    setNextStep(false);
    setPassword("");
    setConfirmPassword("");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!nextStep) {
      // First step: email entry
      setSubmitted(true);
      setNextStep(true);
      return;
    }

    // Second step: reset password
    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    // Simulate success
    setSuccess(true);
    setTimeout(() => {
      window.location.href = "/login"; // Or use navigate()
    }, 2000);
  };

  return (
    <div className="bg-[var(--color-card)] w-[30rem] h-[32rem] overflow-hidden relative rounded-2xl">
      <div className="absolute top-8 left-6 z-10">
        {nextStep && !success && (
          <button
            onClick={handleBackArrowClick}
            className="flex items-center text-gray-400 hover:text-white cursor-pointer transition duration-200 ease-in-out"
          >
            <MdOutlineArrowBackIosNew size={20} />
          </button>
        )}
      </div>

      <div
        className="w-full h-full flex items-center transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(${nextStep ? "-100%" : "0%"})` }}
      >
        {/* Step 1: Email Entry */}
        <form
          onSubmit={handleSubmit}
          className="w-full flex-shrink-0 px-8 py-8 space-y-2"
        >
          <h2 className="text-xl font-semibold text-white ">Forgot Password</h2>
          <Input
            type="email"
            placeholder="Your email address"
            className="w-full"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Button
            variant={"link"}
            className="w-full bg-[var(--color-button)] text-white cursor-pointer"
            title="  Send Reset Link
"
          />

          <div className="flex flex-col">
            <p className="text-sm text-gray-500">
              Remember your password?{" "}
              <Link to="/login" className={buttonVariants({ variant: "link" })}>
                Sign in
              </Link>
            </p>
            <p className="text-sm text-gray-500">
              Don't have an account?{" "}
              <Link
                to="/register"
                className={buttonVariants({ variant: "link" })}
              >
                Sign up
              </Link>
            </p>
          </div>
        </form>

        {/* Step 2: Password Reset */}
        <form
          onSubmit={handleSubmit}
          className="w-full flex-shrink-0 px-8 py-8 space-y-6"
        >
          {!success ? (
            <>
              <h2 className="text-xl font-bold text-white">
                Reset Your Password
              </h2>
              <Input
                type="password"
                placeholder="New password"
                className="w-full"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Input
                type="password"
                placeholder="Confirm new password"
                className="w-full"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              {error && <p className="text-red-500">{error}</p>}
              <Button
                variant={"link"}
                className="w-full cursor-pointer bg-[var(--color-button)] text-white"
                title="Reset Password"
              />
            </>
          ) : (
            <p className="text-gray-400">
              Your password has been updated successfully. Redirecting to
              login...
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
