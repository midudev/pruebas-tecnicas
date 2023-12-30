export interface ReadingListStore {
  readingList: Array<Book['ISBN']>
  setReadingList: (newReadingList: ReadingListStore['readingList']) => void
  toggleBook: (book: Book['ISBN']) => void
}
