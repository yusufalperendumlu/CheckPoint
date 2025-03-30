import MainLayout from "@/components/MainLayout";
import UrlBar from "@/components/home/UrlBar";
import SystemStatus from "@/components/home/SystemStatus";

const HomePage = () => {
  return (
    <>
      <MainLayout>
        <div className="h-full flex flex-col">
          <div className="w-full flex items-center justify-center mt-20">
            <UrlBar />
          </div>
          <div className="w-full flex items-center justify-center mt-20">
            <SystemStatus />
          </div>
        </div>
      </MainLayout>
    </>
  );
};

export default HomePage;
