import { LocalStore } from "@/types";

export const persistData= <T>(key:string, value: T) => {
  localStorage.setItem(key, JSON.stringify({...value}));
};

export const clearData = (key: string) => {
  localStorage.removeItem(key);
};

export const getData = <T>(key: string): T | null => {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : null;
}

export const subscribeToStorage = (key: string, callback: (value: LocalStore) => void) => {
  window.addEventListener('storage', (event) => {
    if (event.key === key) {
      const data = getData<LocalStore>(key);
      if (data) {
        callback(data);
      }
    }
  });
}

export const unsuscribeToStorage = (key: string) => {
  window.removeEventListener('storage', (event) => {
    if (event.key === key) {
      return;
    }
  });
}
