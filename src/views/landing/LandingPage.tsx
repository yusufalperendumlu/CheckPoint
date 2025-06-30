import clsx from "clsx";
import { MdOutlineApi } from "react-icons/md";

import { Link } from "@tanstack/react-router";
import { buttonVariants } from "@/components/ui/button";
import ParticlesBackground from "@/components/modals/ParticlesBackground";
import { useRef } from "react";

const LandingPage: React.FC = () => {
  const imageRef = useRef<HTMLImageElement | null>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (!imageRef.current) return;

    const rect = imageRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const offsetX = (x / rect.width - 0.5) * 25;
    const offsetY = (y / rect.height - 0.5) * 25;

    imageRef.current.style.transform = `rotateX(${offsetY}deg) rotateY(${offsetX}deg)`;
  };

  const handleMouseLeave = () => {
    if (imageRef.current) {
      imageRef.current.style.transform = "scale(1) translate(0px, 0px)";
    }
  };

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
          <div
            className="relative w-full max-w-md overflow-hidden"
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <img
              ref={imageRef}
              className="object-cover w-full h-auto transition-transform duration-200 ease-out will-change-transform"
              src="https://assets.api.uizard.io/api/cdn/stream/4ed19f60-a89f-40e4-bc19-03d383610725.png"
              alt="Hoverable"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
