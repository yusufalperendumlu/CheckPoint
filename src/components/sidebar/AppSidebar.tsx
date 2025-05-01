import { Link, useLocation, useNavigate } from "@tanstack/react-router";
import { FaUserAlt, FaAngleUp } from "react-icons/fa";
import { MdOutlineApi } from "react-icons/md";

import SidebarItem from "@/utils/SidebarItems";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import {
  Sidebar,
  SidebarHeader,
  SidebarGroupLabel,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter,
} from "@/components/ui/sidebar";

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import clsx from "clsx";

export function AppSidebar() {
  const location = useLocation(); // Şu anki sayfanın yolunu al
  const navigate = useNavigate();

  const handleSignOut = () => {
    localStorage.removeItem("isLoggedIn");

    navigate({ to: "/" });
  };

  return (
    <Sidebar
      className="w-64 h-screen bg-[var(--color-background)] text-[var(--color-text)] shadow-lg fixed top-0 left-0 z-10"
      variant="inset"
    >
      <SidebarHeader>
        <div className="flex items-center justify-center p-4">
          <h1 className="text-lg font-semibold flex flex-wrap gap-x-2">
            <MdOutlineApi size={30} />
            CheckPoint
          </h1>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {SidebarItem.map((item) => (
                <SidebarMenuItem
                  key={item.id}
                  className={clsx(
                    "hover:bg-[rgba(255,255,255,0.1)] rounded-full py-2",
                    location.pathname === item.href &&
                      "bg-[rgba(255,255,255,0.1)]"
                  )}
                >
                  <SidebarMenuButton asChild>
                    <a href={item.href}>
                      <div className="flex items-center gap-2">
                        {item.icon && (
                          <item.icon
                            size={location.pathname === item.href ? 22 : 20}
                          />
                        )}
                        {item.secondaryIcon && (
                          <item.secondaryIcon
                            size={location.pathname === item.href ? 22 : 20}
                          />
                        )}
                      </div>
                      <span>{item.label}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <SidebarMenuButton className="hover:bg-[rgba(255,255,255,0.1)] rounded-full cursor-pointer py-6 px-4">
                  <div className="flex items-center gap-2">
                    <Avatar>
                      <AvatarImage src="https://github.com/shadcn.png" />
                    </Avatar>

                    <span>Username</span>
                  </div>
                  <FaAngleUp size={20} className="ml-auto" />
                </SidebarMenuButton>
              </DropdownMenuTrigger>

              <DropdownMenuContent
                side="top"
                className="w-60 bg-[var(--color-bar)] text-[var(--color-text)] shadow-lg rounded-lg border-none transition-all duration-200 ease-in-out  border-b-2 border-b-[var(--color-card)]"
              >
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup className="py-2 cursor-pointer">
                  <DropdownMenuItem>Account</DropdownMenuItem>
                  <DropdownMenuItem>Billing</DropdownMenuItem>
                  <DropdownMenuItem onClick={handleSignOut}>
                    Sign out
                  </DropdownMenuItem>
                </DropdownMenuGroup>
              </DropdownMenuContent>
            </DropdownMenu>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
