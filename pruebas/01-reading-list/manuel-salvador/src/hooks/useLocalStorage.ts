import { useEffect, useState } from 'react';

type SetValue<T> = (value: T) => void;

export default function useLocalStorage<T>(key: string, initialValue: T): [T, SetValue<T>] {
  const [item, setItem] = useState<T>(initialValue);

  useEffect(() => {
    const localStorageItem = localStorage.getItem(key);
    if (!localStorageItem) {
      localStorage.setItem(key, JSON.stringify(initialValue));
    } else {
      setItem(JSON.parse(localStorageItem));
    }
  }, [key]);

  const saveItem = (value: T) => {
    setItem(value);
    localStorage.setItem(key, JSON.stringify(value));
  };

  return [item, saveItem];
}
