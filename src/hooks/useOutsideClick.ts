import { useEffect, useRef } from "react";

type Callback = () => void;

export function useOutsideClick<T extends HTMLElement = HTMLElement>(callback: Callback) {
    const ref = useRef<T>(null);

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            const target = e.target as HTMLElement;

            const clickedInSelectDropdown = target.closest(".select-content");

            if (ref.current && !ref.current.contains(e.target as Node) && !clickedInSelectDropdown) {
                callback();
            }
        }

        document.addEventListener("mousedown", handleClickOutside);

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        }
    }, [callback])

    return ref;
}