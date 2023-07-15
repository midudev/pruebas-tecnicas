import Image from 'next/image'
import { useLibrary } from '@/hooks/useLibrary'

import homeStyles from '@/assets/styles/Home.module.css'
import headerStyles from '@/assets/styles/HeaderPage.module.css'

import logo from './icon.svg'
import { SuggestBook } from './components/SuggestBook'

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
        <section className={homeStyles.homeMain__suggestSection}>
          <SuggestBook />
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
