export default function useLocalStorage<T>() {
  const setValue = (key: string, value: T) => {
    window.localStorage.setItem(key, JSON.stringify(value));
  };

  const getValue = (key: string) => {
    const value = window.localStorage.getItem(key);
    return value ? JSON.parse(value) : null;
  };

  const removeValue = (key: string) => {
    window.localStorage.removeItem(key);
  };

  return { setValue, getValue, removeValue };
}
