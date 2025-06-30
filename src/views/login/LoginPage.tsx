import { useState } from "react";

import { images } from "@/constants";
import BreadcrumbCustom from "@/components/breadcrumb/Breadcrumb";
import LoginModal from "@/components/modals/LoginModal";
import clsx from "clsx";

const LoginPage = () => {
  const chooseButtonStyle =
    "bg-green-950 opacity-70 hover:text-white transition-all duration-200 cursor-pointer";
  const personalRounded = "rounded-l-full";
  const enterpriseRounded = "rounded-r-full";

  return (
    <div className="grid grid-cols-2 h-screen overflow-hidden bg-[#0C0C0C] select-none">
      <div className="relative">
        <img
          src={images.person_image}
          alt="Hello"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 "></div>
      </div>

      <div className="flex items-center justify-center flex-col">
        <LoginModal />
      </div>

      <div className="fixed top-8 left-1/2 ml-8 text-gray-200 hover:text-white">
        <BreadcrumbCustom url="/login" name="Sign in" />
      </div>
    </div>
  );
};

export default LoginPage;
