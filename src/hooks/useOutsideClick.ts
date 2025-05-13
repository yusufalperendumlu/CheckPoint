import { useEffect, useRef } from "react";

type Callback = () => void;

export function useOutsideClick<T extends HTMLElement = HTMLElement>(callback: Callback) {
    const ref = useRef<T>(null);

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (ref.current && !ref.current.contains(e.target as Node)) {
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