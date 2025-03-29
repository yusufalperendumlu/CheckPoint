import { ISidebarType } from "@/types/sidebar.type";

const SidebarItems: ISidebarType[] = [
    {
        label: "Add endpoint",
        href: "/addEndpoint",
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