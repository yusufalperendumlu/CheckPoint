"use client";
import { buttonVariants, Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import clsx from "clsx";

function InputOTPComponent({
  setValidEmail,
}: {
  setValidEmail: (valid: boolean) => void;
}) {
  return (
    <>
      <div className="flex flex-col items-center w-full h-full p-4 mt-2 rounded-lg shadow-lg bg-[#0C0C0C]">
        <InputOTP maxLength={6}>
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
          </InputOTPGroup>
          <InputOTPSeparator />
          <InputOTPGroup>
            <InputOTPSlot index={3} />
            <InputOTPSlot index={4} />
            <InputOTPSlot index={5} />
          </InputOTPGroup>
        </InputOTP>
        <div className="flex items-center justify-end mt-8 gap-x-4 ml-4 ">
          <Button
            type="button"
            title="Cancel"
            onClick={() => {
              setValidEmail(false);
            }}
            className="bg-white text-black cursor-pointer hover:bg-gray-200 w-1/2"
          />
          <Link
            to="/home"
            className={clsx(
              buttonVariants({ variant: "link" }),
              "bg-white text-black cursor-pointer hover:bg-gray-200 w-1/2"
            )}
          >
            Login
          </Link>
        </div>
      </div>
    </>
  );
}

export default InputOTPComponent;
