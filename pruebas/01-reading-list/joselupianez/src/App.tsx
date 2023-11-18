import { useState, useEffect } from 'react'
import { library } from '../../books.json'
import { Library, Book, BookItem } from './types'
import Header from './components/Header'
import BookList from './components/BookList'
import Slider from './components/Slider'
import Modal from './components/Modal'
import CategoryDropdown from './components/CategoryDropdown'
import ReadingList from './components/ReadingList'
import { useTranslation } from 'react-i18next'

function App() {
  const categoryList = library.map((book) => book.book.genre)
  const [filteredBooks, setFilteredBooks] = useState<Library>({library: library})
  const [readingList, setReadingList] = useState<BookItem[]>([])
  const [modal, setModal] = useState<boolean>(false)
  const [selectedBook, setSelectedBook] = useState<Book>(library[0].book)
  const minBookPages = Math.min(...library.map((book) => book.book.pages))
  const maxBookPages = Math.max(...library.map((book) => book.book.pages))
  const [pages, setPages] = useState<number[]>([minBookPages, maxBookPages])
  const categories = ["Todas", ...new Set(categoryList)]
  const [category, setCategory] = useState<string>(categories[0])
  const { t } = useTranslation()

  function toggleModal(book: Book | false) {
    if(book){
      setSelectedBook(book)
    }
    setModal((prevState) => !prevState)
  }

  function removeOrAddToReadingList(book: Book, add: boolean) {
    let newReadingList = [] as BookItem[]
    if(!add) {
      newReadingList = readingList.filter(item => item.book.title !== book.title)
    } else {
      newReadingList = [...readingList, {book: book}]
    }
    setReadingList(newReadingList) 
    setModal(false)
  }

  useEffect(() => {
    const booksByCategory = category != "Todas" ? library.filter(books => books.book.genre === category) : library
    const newBookList = {library: [...booksByCategory.filter(books => books.book.pages >= pages[0] && books.book.pages <= pages[1] && !readingList.find(item => item.book.title === books.book.title))]}
    setFilteredBooks(newBookList)

    if (readingList.length > 0) {
      localStorage.setItem('readingList', JSON.stringify(readingList))
    }
  }, [pages, readingList, category])

  useEffect(() => {
    const existingReadingList = JSON.parse(localStorage.getItem('readingList') || '[]') as BookItem[]
    if (existingReadingList) {
      setReadingList(existingReadingList)
    }
  }, [])
  
  window.addEventListener('storage', () => {
    const existingReadingList = JSON.parse(localStorage.getItem('readingList') || '[]') as BookItem[]
    if (existingReadingList) {
      setReadingList(existingReadingList)
    }
  })

  return (
    <>
      <section className={modal ? 'blur-lg lg:blur-sm' : ''}>
        <Header />
        <section className='container mx-auto mt-10 px-5'>
            <section className='flex flex-col lg:flex-row'>
              <section className='w-full'>
                <h1 className='text-blue-600 font-bold text-4xl pb-2 text-center md:text-left' data-testid="totalbooks">{`${filteredBooks.library.length} ${t("available")}`}</h1>
                <h2 className='font-bold text-xl mb-5 text-neutral-300 text-center md:text-left' data-testid="totalreadinglist">{`${readingList.length} ${t("reading")}`}</h2>
                <section className='flex flex-col md:flex-row gap-4 mb-4 items-center bg-neutral-900 p-10 rounded-md'>
                  <Slider pages={[minBookPages, maxBookPages]} setPages={setPages} />
                  <CategoryDropdown currentCategory={category} categories={categories} setCategory={setCategory} />
                </section>
                <BookList library={filteredBooks} toggleModal={toggleModal} />
              </section>
              {readingList.length > 0 && (
                <ReadingList readingList={readingList} toggleModal={toggleModal} />
              )}
            </section>
        </section>
      </section>
      <Modal modal={modal} setModal={setModal} readingList={readingList} selectedBook={selectedBook} removeOrAddToReadingList={removeOrAddToReadingList} />
    </>
  )
}

export default App
