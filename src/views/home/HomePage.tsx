import MainLayout from "@/components/MainLayout";
import UrlBar from "@/components/home/UrlBar";
import ControllerList from "@/components/home/ControllerList";

const HomePage = () => {
  return (
    <>
      <MainLayout>
        <div className="h-full flex flex-col">
          <div className="w-full flex items-center justify-center mt-20">
            <UrlBar />
          </div>
          <div className="w-full flex items-center justify-center mt-20">
            <ControllerList />
          </div>
        </div>
      </MainLayout>
    </>
  );
};

export default HomePage;
