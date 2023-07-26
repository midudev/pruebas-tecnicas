export const parseDataStorage = (nameValue: string) => {
  const getListBook = localStorage.getItem(nameValue)
  return getListBook ? JSON.parse(getListBook) : null
}
