import './src/scss/styles.scss'
import { ReadingList } from './src/js/classes/ReadingList'
import { App } from './src/js/classes/App'

const readingList = new ReadingList()
const app = new App()

const { booksAvailable, addedBooks } = readingList

app.initApp(booksAvailable, addedBooks)
