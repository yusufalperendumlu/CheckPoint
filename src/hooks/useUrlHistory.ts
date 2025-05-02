import { useState, useEffect, useRef } from "react";

const STORAGE_KEY = "urlHistory";
const MAX_HISTORY = 5;

export const useUrlHistory = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [history, setHistory] = useState<string[]>([]);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
    setHistory(stored);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const addUrl = (url: string) => {
    const updated = [url, ...history.filter((u) => u !== url)].slice(
      0,
      MAX_HISTORY
    );
    setHistory(updated);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  };

  return { history, addUrl, isOpen, setIsOpen, dropdownRef };
};
