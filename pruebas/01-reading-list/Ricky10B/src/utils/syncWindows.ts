import { IISBNProp } from "../interfaces/interfacesComponents"

interface SyncWindowsLibraryProp {
  addBookToReadingList: ({ ISBN }: IISBNProp) => void,
  removeBookFromReadingList: ({ ISBN }: IISBNProp) => void
}

interface SyncWindowsFiltersProps {
  handleNewGenre: ({ genre }: { genre: string }) => void
}

interface DataWindowsLibraryProps extends SyncWindowsLibraryProp {
  totalNewValues: number,
  totalOldValues: number,
  newReadingList: string[],
  oldReadingList: string[]
}

interface DataWindowsFiltersProps extends SyncWindowsFiltersProps {
  genre: string
}

interface ISyncWindows extends SyncWindowsFiltersProps, SyncWindowsLibraryProp {}

export function syncWindows ({
  handleNewGenre,
  addBookToReadingList,
  removeBookFromReadingList
}: ISyncWindows) {
  window.addEventListener('storage', event => {
    console.log(event);
    const { key, newValue, oldValue } = event

    const dataOldValue = JSON.parse(oldValue || '{}')
    const dataNewValue = JSON.parse(newValue || '{}')

    if (
      key === '__REDUX__STORE__filters' &&
      dataNewValue.filterGenre !== dataOldValue.filterGenre
    ) {
      const genre = dataNewValue.filterGenre ?? ''
      syncWindowsFilters({ handleNewGenre, genre })
    }

    if (key === '__REDUX__STORE__library') {
      const totalOldValues = dataOldValue.readingList?.length ?? 0
      const totalNewValues = dataNewValue.readingList?.length ?? 0

      syncWindowsLibrary({
        addBookToReadingList,
        removeBookFromReadingList,
        totalOldValues,
        totalNewValues,
        newReadingList: dataNewValue.readingList,
        oldReadingList: dataOldValue.readingList
      })
    }
  })
}

export function syncWindowsFilters ({
  handleNewGenre,
  genre
}: DataWindowsFiltersProps) {
  handleNewGenre({ genre })
}

export function syncWindowsLibrary ({
  addBookToReadingList,
  removeBookFromReadingList,
  totalNewValues,
  totalOldValues,
  newReadingList,
  oldReadingList
}: DataWindowsLibraryProps) {
  if (totalOldValues < totalNewValues) {
    const [ISBN] = newReadingList.filter((ISBNOfBook: string) =>
      !oldReadingList.includes(ISBNOfBook)
    )
    
    addBookToReadingList({ ISBN })
  }

  if (totalOldValues > totalNewValues) {
    const [ISBN] = oldReadingList.filter((ISBNOfBook: string) =>
      !newReadingList.includes(ISBNOfBook)
    )
    
    removeBookFromReadingList({ ISBN })
  }
}
