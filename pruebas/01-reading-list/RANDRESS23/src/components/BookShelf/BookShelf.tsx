import { useRef } from 'react'
import { motion } from 'framer-motion'
import styles from './styles/BookShelf.module.css'
import { SearchIcon } from '../InputSearch/components'
// import SearchIcon from '../../assets/search.svg'

export const BookShelf: React.FC = () => {
  const boxRef = useRef(null)

  return (
    <div className={styles.BookShelf}>
      <div className={styles.Shelf}>
        <div className={styles.ShelfSectionPendingBooks}>
          <div className={styles.ShelfPendingBooks}>
            <div className={styles.TitlesContainer}>
              <motion.h1 className={styles.TitleShelf}>Reading List</motion.h1>
              <motion.p className={styles.SubTitleShelf}>Lorem ipsum dolor sit amet.</motion.p>
            </div>
            <div className={styles.BookSign}>
              <div className={styles.Sign}>Books to read: 10</div>
            </div>
          </div>
          <div
            className={styles.CarouselBooks}
            ref={boxRef}
          >
            <motion.div
              drag='x'
              dragConstraints={boxRef}
              className={styles.BooksContainer}
            >
              <div className={styles.BookReading}>
                <img src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1566425108i/33.jpg" alt="" className={styles.BookCover} />
                <div className={styles.BookColumn}></div>
                <div className={styles.BorderSheets}>
                  <div className={styles.Sheets}></div>
                </div>
                <div className={styles.BookShadow}></div>
              </div>
              <div className={styles.BookReading}>
                <img src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1566425108i/33.jpg" alt="" className={styles.BookCover} />
                <div className={styles.BookColumn}></div>
                <div className={styles.BorderSheets}>
                  <div className={styles.Sheets}></div>
                </div>
                <div className={styles.BookShadow}></div>
              </div>
              <div className={styles.BookReading}>
                <img src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1566425108i/33.jpg" alt="" className={styles.BookCover} />
                <div className={styles.BookColumn}></div>
                <div className={styles.BorderSheets}>
                  <div className={styles.Sheets}></div>
                </div>
                <div className={styles.BookShadow}></div>
              </div>
              <div className={styles.BookReading}>
                <img src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1566425108i/33.jpg" alt="" className={styles.BookCover} />
                <div className={styles.BookColumn}></div>
                <div className={styles.BorderSheets}>
                  <div className={styles.Sheets}></div>
                </div>
                <div className={styles.BookShadow}></div>
              </div>
              <div className={styles.BookReading}>
                <img src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1566425108i/33.jpg" alt="" className={styles.BookCover} />
                <div className={styles.BookColumn}></div>
                <div className={styles.BorderSheets}>
                  <div className={styles.Sheets}></div>
                </div>
                <div className={styles.BookShadow}></div>
              </div>
              <div className={styles.BookReading}>
                <img src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1566425108i/33.jpg" alt="" className={styles.BookCover} />
                <div className={styles.BookColumn}></div>
                <div className={styles.BorderSheets}>
                  <div className={styles.Sheets}></div>
                </div>
                <div className={styles.BookShadow}></div>
              </div>
              <div className={styles.BookReading}>
                <img src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1566425108i/33.jpg" alt="" className={styles.BookCover} />
                <div className={styles.BookColumn}></div>
                <div className={styles.BorderSheets}>
                  <div className={styles.Sheets}></div>
                </div>
                <div className={styles.BookShadow}></div>
              </div>
              <div className={styles.BookReading}>
                <img src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1566425108i/33.jpg" alt="" className={styles.BookCover} />
                <div className={styles.BookColumn}></div>
                <div className={styles.BorderSheets}>
                  <div className={styles.Sheets}></div>
                </div>
                <div className={styles.BookShadow}></div>
              </div>
              <div className={styles.BookReading}>
                <img src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1566425108i/33.jpg" alt="" className={styles.BookCover} />
                <div className={styles.BookColumn}></div>
                <div className={styles.BorderSheets}>
                  <div className={styles.Sheets}></div>
                </div>
                <div className={styles.BookShadow}></div>
              </div>
              <div className={styles.BookReading}>
                <img src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1566425108i/33.jpg" alt="" className={styles.BookCover} />
                <div className={styles.BookColumn}></div>
                <div className={styles.BorderSheets}>
                  <div className={styles.Sheets}></div>
                </div>
                <div className={styles.BookShadow}></div>
              </div>
            </motion.div>
          </div>
        </div>
        <div className={styles.ShelfTable}>
          <div className={styles.Table}></div>
          <div className={styles.BorderTable}></div>
          <div className={styles.ShadowTable}></div>
        </div>
        <div className={styles.ShelfDown}>
          <div className={styles.TitlesContainerCount}>
            <div className={styles.TitleContent}>
              <h2 className={styles.TitleBooksAvailable}>Books Available</h2>
              <div>
                <div className={styles.SignAvailable}>10</div>
              </div>
            </div>
            <div className={styles.TitleContent}>
              <h2 className={styles.TitleGenreBooksAvailable}>Genre Books</h2>
              <div>
                <div className={styles.SignGenreAvailable}>5</div>
              </div>
            </div>
          </div>
          <div className={styles.FiltersSection}>
            <div className={styles.Filter}>
              <div className={styles.IconContainer}>
                <SearchIcon />
              </div>
              <input
                type="text"
                placeholder='Titles, or author'
                className={styles.InputSearch}
              />
            </div>
            <div className={styles.Filter}>
              <label className={styles.FilterLabel}>Filtrar por genero</label>
              <div className={styles.FilterSelectContainer}>
                <select className={styles.FilterSelect}>
                  <option value="" className={styles.FilterOption}>All</option>
                  <option value="" className={styles.FilterOption}>Fantasía</option>
                  <option value="" className={styles.FilterOption}>Ciencia ficción</option>
                  <option value="" className={styles.FilterOption}>Zombies</option>
                </select>
              </div>
            </div>
            <div className={styles.Filter}>
              <label className={styles.FilterLabel}>Filtrar por paginas</label>
              <input type="range" className={styles.InputRange} />
            </div>
          </div>
          <div className={styles.BooksAvailableContainer}>
            <div className={styles.BookAvailable}>
              <div className={styles.BookAvailableReading}>
                <img src="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1566425108i/33.jpg" alt="" className={styles.BookAvailableCover} />
                <div className={styles.BookColumn}></div>
                <div className={styles.BorderSheets}>
                  <div className={styles.Sheets}></div>
                </div>
                <div className={styles.BookAvailableShadow}></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
