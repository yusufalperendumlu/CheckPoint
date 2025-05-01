import clsx from "clsx";
import { MdOutlineApi } from "react-icons/md";

import { Link } from "@tanstack/react-router";
import { buttonVariants } from "@/components/ui/button";
import ParticlesBackground from "@/components/modals/ParticlesBackground";

const LandingPage = () => {
  return (
    <>
      <ParticlesBackground />

      <div className="relative z-10 h-[100vh] overflow-hidden  transition-all duration-200">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 mt-20">
          <div className="flex flex-col justify-center items-start space-y-8 p-4">
            <span className="flex items-center justify-center w-16 h-16 rounded-full bg-black text-white">
              <MdOutlineApi size={40} />
            </span>
            <h1 className="text-5xl flex flex-col font-extrabold text-neutral-200">
              API Health Check <span className="mt-4">for Developers</span>
            </h1>
            <p className="text-lg font-semibold  w-3/4 text-gray-500">
              Check the health of your API endpoints with ease. Our tool
              provides a simple and efficient way to monitor the status of your
              APIs.
            </p>
            <div className="flex flex-col space-y-4 w-1/3">
              <Link
                to="/login"
                className={clsx(
                  buttonVariants({ variant: "link" }),
                  " bg-black text-white rounded-full px-4 py-6 transition-all duration-200 text-base font-bold "
                )}
              >
                Explore
              </Link>
            </div>
          </div>
          <div className="">
            <img
              className="object-fill"
              src="https://assets.api.uizard.io/api/cdn/stream/4ed19f60-a89f-40e4-bc19-03d383610725.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
