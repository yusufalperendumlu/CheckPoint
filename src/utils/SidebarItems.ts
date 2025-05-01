import { FaHome, FaPlus,FaListUl  } from "react-icons/fa";
import { IoAnalyticsSharp } from "react-icons/io5";



import { ISidebarType } from "@/types/sidebar.type";

const SidebarItems: ISidebarType[] = [
    {
        id: 1,
        label: "Home",
        href: "/home",
        icon: FaHome,
        active: true
    },
    {
        id: 2,
        label: "Add endpoint",
        href: "/add-endpoint",
        icon: FaPlus,
        active: true
    }, 
    {
        id: 3,
        label: "List endpoint",
        href: "/list-endpoint",
        icon: FaListUl,
        active: true
    },
    {
        id: 4,
        label: "Analysis",
        href: "/analysis",
        icon: IoAnalyticsSharp,
        active: true
    }
]

export default SidebarItems;