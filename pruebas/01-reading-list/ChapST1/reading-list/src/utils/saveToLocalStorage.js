export function saveToLocalStorage ({ key, value }) {
  localStorage.setItem(key, JSON.stringify(value))
}
