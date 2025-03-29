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
  return (
    <Sidebar variant="sidebar" className="top-18 dark text-white">
      <SidebarHeader className="text-center py-8">Username</SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {SidebarItem.map((item) => (
                <SidebarMenuItem
                  key={item.label}
                  className="py-4 border-b-2 cursor-pointer"
                >
                  <SidebarMenuButton asChild>
                    {/* <a href={item.href}>
                      <item.icon />
                      
                    </a> */}
                    <span>{item.label}</span>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
