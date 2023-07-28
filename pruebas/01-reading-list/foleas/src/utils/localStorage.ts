export const getLocalStorage = (key: string) => {
  const localStorage = window.localStorage.getItem(key);
  if (localStorage !== null) {
    const localStorageJson = JSON.parse(localStorage) as
      | string
      | number
      | Array<string>;
    return localStorageJson;
  }
  return false;
};

export const setLocalStorage = (
  key: string,
  value: string | number | Array<string>
) => window.localStorage.setItem(key, JSON.stringify(value));
