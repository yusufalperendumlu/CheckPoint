import { Link, useLocation } from "@tanstack/react-router";
import SidebarItem from "@/utils/SidebarItems";

import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

export function AppSidebar() {
  const location = useLocation(); // Şu anki sayfanın yolunu al

  return (
    <Sidebar variant="sidebar" className="top-18 dark text-white">
      <SidebarHeader className="text-center py-8">Username</SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {SidebarItem.map((item) => {
                const isActive = location.pathname === item.href;
                return (
                  <SidebarMenuItem
                    key={item.label}
                    className="relative py-4 cursor-pointer transition duration-300 ease-in-out"
                  >
                    <SidebarMenuButton asChild>
                      <Link to={item.href}>
                        <span
                          className={`group ${isActive ? "font-bold" : ""}`}
                        >
                          {item.label}
                        </span>
                        <span
                          className={`absolute left-0 bottom-0 h-[2px] bg-red-500 transition-all duration-300 ease-in-out ${
                            isActive ? "w-full" : "w-0"
                          }`}
                        />
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
