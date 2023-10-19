import { useEffect, useState } from "react";

export default function useLocalStorage<T>(key: string, defaultValue: T): [T, (value: T) => void] {
  const [storedValue, setStoredValue] = useState(defaultValue);

  useEffect(() => {
    const item = localStorage.getItem(key);
    if (!item) localStorage.setItem(key, JSON.stringify(defaultValue))
    setStoredValue((item ? JSON.parse(item) : defaultValue) as T)

    function handler(e: StorageEvent) {
      if (e.key !== key) return;

      const ls = localStorage.getItem(key)
      setStoredValue(JSON.parse(ls ?? "") as T)
    }

    window.addEventListener("storage", handler)
    return () => {
      window.removeEventListener("storage", handler)
    };
  }, [key, defaultValue])

  const setValue = (value: T) => {
    try {
      setStoredValue(value);

      localStorage.setItem(key, JSON.stringify(value));
      if (typeof window !== "undefined") {
        window.dispatchEvent(new StorageEvent("storage", { key }))
      }
    } catch (e) { console.error(e) }
  };

  return [storedValue, setValue];
}