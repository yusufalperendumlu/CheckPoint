import MainLayout from "@/components/MainLayout";
import UrlBar from "@/components/home/UrlBar";
import SystemStatus from "@/components/home/SystemStatus";

const HomePage = () => {
  return (
    <MainLayout>
      <div className="w-full h-full flex justify-center items-start overflow-x-hidden">
        <div className="max-w-5xl w-full px-4 md:px-10 py-16 flex flex-col gap-16">
          <div className="flex justify-center">
            <SystemStatus />
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default HomePage;
