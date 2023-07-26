const listBooksStorage = 'listBooks'

export function getStorageReadingList(): string[] {
  const list = localStorage.getItem(listBooksStorage)

  if (!list) return []

  return JSON.parse(list) as string[]
}

export type ActionsStorage = 'add' | 'remove'

export function setStorageReadingList(bookISBN: string) {
  const list = getStorageReadingList()

  if (!list) {
    localStorage.setItem(listBooksStorage, JSON.stringify([bookISBN]))
  } else {
    localStorage.setItem(listBooksStorage, JSON.stringify([...list, bookISBN]))
  }
}

export function deleteBookStorageReadingList(bookISBN: string) {
  const list = getStorageReadingList()

  if (!list) {
    throw new Error('The Reading List is already empty')
  } else {
    const newList = list.filter((ISBN) => ISBN !== bookISBN)
    localStorage.setItem(listBooksStorage, JSON.stringify(newList))
  }
}

export function isBookInStorage(ISBN: string): boolean {
  return getStorageReadingList().includes(ISBN)
}
