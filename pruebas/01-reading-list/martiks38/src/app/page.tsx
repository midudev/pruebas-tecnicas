import Image from 'next/image'
import { useLibrary } from '@/hooks/useLibrary'

import homeStyles from '@/assets/styles/Home.module.css'
import headerStyles from '@/assets/styles/HeaderPage.module.css'

import logo from './icon.svg'

export default function Home() {
  const [books, genres] = useLibrary()

  return (
    <>
      <header className={headerStyles.headerPage}>
        <h1 aria-label='Reading List'>
          <Image
            src={logo}
            alt='Reading List'
            width={36}
            height={36}
            className={headerStyles.headerPage__logo}
          />
        </h1>
      </header>
      <main className={homeStyles.homeMain}>
        <section
          className={homeStyles.homeMain__searchSection}
          style={{ width: '100%', height: 200 }}
        >
          <form>
            <h2>Buscar libros</h2>
            <div>
              <label htmlFor='author'>Autor</label>
              <input type='text' name='author' id='author' />
            </div>
            <div>
              <label htmlFor='book'>Libro</label>
              <input type='text' name='book' id='book' />
            </div>
          </form>
          <figure>
            {/* <Image
              src='https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1669159060i/63631742.jpg'
              alt=''
              width={200}
              height={360}
            /> */}
            <figcaption></figcaption>
          </figure>
        </section>
        <section className={homeStyles.homeMain__bookGenresSection}>
          <h3 className={homeStyles.booksGenresSection__title}>Género</h3>
          <ul className={homeStyles.booksGenresSection__list}>
            {genres.map((genre) => (
              <li key={genre} className={homeStyles.booksGenresSection__listItem}>
                {genre}
              </li>
            ))}
          </ul>
        </section>
        <article className={homeStyles.homeMain__booksSection}></article>
      </main>
    </>
  )
}
