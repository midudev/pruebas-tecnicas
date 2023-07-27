import { useState, useEffect } from 'react'
import { library } from '../../books.json'
import { Library, Book, BookItem } from './types'
import BookList from './components/BookList'
import Slider from './components/Slider'
import Modal from './components/Modal'
import CategoryDropdown from './components/CategoryDropdown'
import ReadingList from './components/ReadingList'

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
      <section className={`flex flex-col h-screen lg:flex-row ${modal ? 'blur-lg' : ''}`}>
        <section className="flex flex-col w-full px-5 py-5 lg:m-10">
          <h1 className='font-bold text-4xl pb-2 text-center md:text-left' data-testid="totalbooks">{`${filteredBooks.library.length} libros disponibles`}</h1>
          <h2 className='font-bold text-xl mb-5 text-neutral-300 text-center md:text-left' data-testid="totalreadinglist">{`${readingList.length} en la lista de lectura`}</h2>
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
      <section onClick={() => toggleModal(false)} className={`fixed ${!modal ? 'hidden' : ''} inset-0 bg-neutral-900 bg-opacity-90 overflow-y-auto h-full w-full`} data-testid="modal">
        <Modal readingList={readingList} selectedBook={selectedBook} removeOrAddToReadingList={removeOrAddToReadingList} />
      </section>
    </>
  )
}

export default App
