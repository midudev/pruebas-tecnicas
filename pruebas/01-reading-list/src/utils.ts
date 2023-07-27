export function parseLocalStorageData<T>(key: string, defaultValue: T): T {
    try {
      const item = localStorage.getItem(key);
      return item ? (JSON.parse(item) as T) : defaultValue;
    } catch (error) {
      console.error(`Error parsing data from localStorage for key: ${key}`, error);
      return defaultValue;
    }
  }
  
