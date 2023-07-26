import { type FilesExtensionToDownload, type Book } from '~/types/types'

export function removeAccents(str: string) {
  return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
}

export function downloadFromLocalStorage(
  key: string,
  type: FilesExtensionToDownload = 'json'
) {
  const value = localStorage.getItem(key)

  if (!value) {
    console.warn(`No value found in local storage for key: ${key}`)
    return
  }

  const books = JSON.parse(value) as Book[]
  const booksInReadingList = books.filter((book) => book.isInReadingList)

  const mimeTypes = {
    json: 'application/json',
    csv: 'text/csv',
  }

  let formattedData = ''

  switch (type) {
    case 'json':
      try {
        formattedData = JSON.stringify(booksInReadingList, null, 2)
      } catch (err) {
        console.error('Error parsing JSON:', err)
        return
      }
      break
    case 'csv':
      // Assuming the data is an array of objects. If it's another structure, additional processing is needed.
      try {
        if (booksInReadingList.length === 0) {
          console.warn('No books in reading list for CSV conversion.')
          return
        }
        formattedData = Object.keys(booksInReadingList[0]).join(',') + '\n'
        formattedData += booksInReadingList
          .map((row: Book) => Object.values(row).join(','))
          .join('\n')
      } catch (err) {
        console.error('Error converting to CSV:', err)
        return
      }
      break
    default:
      console.warn(`Unsupported type: ${type}`)
      return
  }

  const blob = new Blob([formattedData], { type: mimeTypes[type] })
  const url = window.URL.createObjectURL(blob)

  const a = document.createElement('a')
  a.style.display = 'none'
  a.href = url
  a.download = `${key}.${type}`

  document.body.appendChild(a)
  a.click()

  window.URL.revokeObjectURL(url)
  document.body.removeChild(a)
}
