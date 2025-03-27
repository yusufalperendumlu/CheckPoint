import { images } from "@/constants";

import BreadcrumbCustom from "@/components/breadcrumb/Breadcrumb";
import LoginModal from "@/components/modals/LoginModal";

const LoginPage = () => {
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

      <div className="flex items-center justify-center">
        <LoginModal />
      </div>

      <div className="fixed top-8 left-1/2 ml-8">
        <BreadcrumbCustom url="/login" name="Sign in" />
      </div>
    </div>
  );
};

export default LoginPage;
