import { FilesExtensionToDownload, StoredBook } from '~/types/types'

export function removeAccents(str: string) {
  return str.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
}

export function downloadFromLocalStorage(
  key: string,
  type: FilesExtensionToDownload = 'txt'
) {
  const value = localStorage.getItem(key)

  if (!value) {
    console.warn(`No value found in local storage for key: ${key}`)
    return
  }

  let formattedData = value
  const mimeTypes = {
    txt: 'text/plain',
    json: 'application/json',
    csv: 'text/csv',
  }

  switch (type) {
    case 'json':
      try {
        formattedData = JSON.stringify(JSON.parse(value), null, 2)
      } catch (err) {
        console.error('Error parsing JSON:', err)
        return
      }
      break
    case 'csv':
      // Assuming the data is an array of objects. If it's another structure, additional processing is needed.
      try {
        const jsonObj = JSON.parse(value)
        formattedData = Object.keys(jsonObj[0]).join(',') + '\n'
        formattedData += jsonObj
          .map((row: StoredBook) => Object.values(row).join(','))
          .join('\n')
      } catch (err) {
        console.error('Error converting to CSV:', err)
        return
      }
      break
    case 'txt':
      // No formatting needed, just use the raw value
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
