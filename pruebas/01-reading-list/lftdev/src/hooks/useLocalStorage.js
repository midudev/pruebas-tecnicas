export default function useLocalStorage () {
  const saveList = (key, list) => window.localStorage.setItem(key, JSON.stringify(list))
  function getList (key) {
    const data = window.localStorage.getItem(key)
    if (data) return JSON.parse(data)
  }
  return {
    saveList,
    getList
  }
}
