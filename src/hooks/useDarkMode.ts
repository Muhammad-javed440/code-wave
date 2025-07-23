// hooks/useDarkMode.ts
import { useEffect, useState } from "react";

export function useDarkMode() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const classList = document.documentElement.classList;
    const dark = localStorage.getItem("theme") === "dark";

    setIsDark(dark);
    classList.toggle("dark", dark);
  }, []);

  const toggleTheme = () => {
    const classList = document.documentElement.classList;
    const newTheme = !isDark;

    setIsDark(newTheme);
    localStorage.setItem("theme", newTheme ? "dark" : "light");
    classList.toggle("dark", newTheme);
  };

  return [isDark, toggleTheme] as const;
}
