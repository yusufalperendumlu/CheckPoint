import { images } from "@/constants";

import BreadcrumbCustom from "@/components/breadcrumb/Breadcrumb";
import RegisterModal from "@/components/modals/RegisterModal";

const RegisterPage = () => {
  return (
    <div className="grid grid-cols-2 h-screen overflow-hidden bg-[#0C0C0C] select-none">
      <div className="relative">
        <img
          src={images.person_image}
          alt="Welcome"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-60"></div>
      </div>

      <div className="flex items-center justify-center">
        <RegisterModal />
      </div>

      <div className="fixed top-8 left-1/2 ml-8">
        <BreadcrumbCustom url="/register" name="Sign up" />
      </div>
    </div>
  );
};

export default RegisterPage;
