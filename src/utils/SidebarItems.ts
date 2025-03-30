import { ISidebarType } from "@/types/sidebar.type";

const SidebarItems: ISidebarType[] = [
    {
        label: "Home",
        href: "/home",
        active: true
    },
    {
        label: "Add endpoint",
        href: "/add-endpoint",
        active: true
    }, 
    {
        label: "List endpoint",
        href: "/listEndpoint",
        active: true
    },
    {
        label: "Analysis",
        href: "/analysis",
        active: true
    }
]

export default SidebarItems;