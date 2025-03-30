import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/sidebar/AppSidebar";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="flex w-full items-baseline justify-center overflow-x-hidden">
        <SidebarTrigger className="absolute top-4 left-4 z-50" />
        {children}
      </main>{" "}
    </SidebarProvider>
  );
};

export default MainLayout;
