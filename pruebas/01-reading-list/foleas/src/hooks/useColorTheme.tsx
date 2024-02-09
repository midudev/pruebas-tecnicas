import { useEffect, useState } from "react";
import { getLocalStorage, setLocalStorage } from "../utils/localStorage";

export const UseColorTheme = () => {
  const colorThemeLocalStorage = getLocalStorage("theme")
    ? getLocalStorage("theme")
    : "light";

  const [theme, setTheme] = useState(colorThemeLocalStorage as string);

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove("dark", "light");
    root.classList.add(theme);
    setLocalStorage("theme", theme);
  }, [theme]);

  return { theme, setTheme };
};
