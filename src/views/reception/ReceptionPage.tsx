import clsx from "clsx";

const ReceptionPage = () => {
  return (
    <>
      <div className="h-[100vh] w-full overflow-hidden  bg-[#423F3E]">
        <div
          className={clsx(
            "container mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 mt-20"
          )}
        >
          <div className="flex flex-col justify-center items-start space-y-8 p-4">
            <h1 className="text-5xl flex flex-col font-extrabold text-gray-200">
              API Health Check{" "}
              <span className="mt-4">
                for{" "}
                <span className="bg-[rgba(35,98,73,0.83)] px-0.5">
                  Developers
                </span>
              </span>
            </h1>
            <p className="text-lg font-semibold text-white w-3/4">
              Check the health of your APIs and ensure they are running
              smoothly. Use this tool to verify the status of your APIs and
              troubleshoot any issues that may arise during development or
              production. API Health Check is a free tool that allows you to
              monitor the status of your APIs and receive alerts when they are
              down or experiencing issues. Get started by entering the URL of
              your API below.
            </p>
          </div>
          <div className="border-2 border-gray-200 rounded-sm">
            <img
              className="w-full h-full object-fill"
              src="https://imagedelivery.net/PVooPtpJE-25QaNkbEuXvw/0117d73b-b327-45ff-f333-0af511c52b00/public"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ReceptionPage;
