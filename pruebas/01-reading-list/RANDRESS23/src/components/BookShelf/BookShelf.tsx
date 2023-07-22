import { useRef } from 'react'
import { motion } from 'framer-motion'
import styles from './styles/BookShelf.module.css'

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
        {/* <div className={styles.shelfDown}></div> */}
      </div>
    </div>
  )
}
