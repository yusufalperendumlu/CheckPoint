import { IconType } from "react-icons";

export interface ISidebarType {
    id: number;
    label: string;
    href: string;
    icon?: IconType;
    secondaryIcon?: IconType;
    onClick?: () => void;
    active: boolean;
}