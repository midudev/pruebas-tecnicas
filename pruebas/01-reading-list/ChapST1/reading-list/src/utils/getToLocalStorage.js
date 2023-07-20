export function getToLocalStorage ({ key }) {
  return JSON.parse(localStorage.getItem(key))
}
