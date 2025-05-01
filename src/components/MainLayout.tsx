import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/sidebar/AppSidebar";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="relative h-screen overflow-x-hidden select-none bg-[var(--color-background)]">
      <SidebarProvider>
        <AppSidebar />
        <SidebarTrigger />
        <div className="absolute left-64 z-10 right-0 top-0 bottom-0 flex my-2 mr-2">
          <div className="w-full h-full overflow-auto bg-[var(--color-page)] rounded-2xl">
            {children}
          </div>
        </div>
      </SidebarProvider>
    </main>
  );
};

export default MainLayout;
