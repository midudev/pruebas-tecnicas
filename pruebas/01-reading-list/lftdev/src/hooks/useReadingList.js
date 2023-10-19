import useLocalStorage from './useLocalStorage'

export default function useReadingList (initialReadingList) {
  const [readingList, setReadingList] = useLocalStorage('readingList', initialReadingList)
  const addToReadingList = (book) => Array.isArray(book)
    ? setReadingList(book)
    : setReadingList(readingList.toSpliced(readingList.length, 1, book))

  const removeFromReadingList = book => setReadingList(readingList.filter(item => item !== book))
  return [
    readingList,
    addToReadingList,
    removeFromReadingList
  ]
}
